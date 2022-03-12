import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthForm from "../../components/AuthForm";
import NavLink from "../../components/NavLink";
import { Context as AuthContext } from "../../context/authContext";

const Login = ({ navigation }) => {
  const { state, SigninScreen, clearErrorMessage } = useContext(AuthContext);

  useEffect(
    () =>
      navigation.addListener("focus", () => {
        clearErrorMessage;
      }),
    []
  );

  return (
    <SafeAreaView 
    style={{
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      backgroundColor: "white",
    }}
    >
      <AuthForm
        headerText="Login to uTracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={SigninScreen}
      />
      <NavLink routeName="Signup" text="Don't have an account? Sign Up" />
    </SafeAreaView>
  );
};

export default Login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     marginBottom: 200,
//   },
// });
