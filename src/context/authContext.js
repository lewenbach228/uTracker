import createDataContext from "../context/createDataContext";
import trackerApi from "../api/trackerApi";

import { navigate } from "../navigationRef";
import { AsyncStorage } from 'react-native';


const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } else {
    navigate("Signup");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const SignupScreen =
  (dispatch) =>
  async ({ email, password }) => {
    //  make api request to sign up with that email and password
    try {
      const response = await trackerApi.post("/signup", { email, password });

      await AsyncStorage.setItem("token", response.data.token);
      //  if we sign up, modify our state, and say we are authenticated
      dispatch({ type: "signup", payload: response.data.token });
      navigate("TrackList");

      //  if signing up fails, we probably need to reflect an error message
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };

const SigninScreen =
  (dispatch) =>
  async ({ email, password }) => {
    //  Try to signin
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("tooken", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("Signup");
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { SigninScreen, signout, SignupScreen, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
