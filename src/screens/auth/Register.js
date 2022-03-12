import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthForm from "../../components/AuthForm";
import NavLink from "../../components/NavLink";

import { Context as AuthContext } from "../../context/authContext";

const Register = ({ navigation }) => {
  const { state, SignupScreen, clearErrorMessage } = useContext(AuthContext);

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
      // style={styles.container}
    >
    
      <AuthForm
        headerText="Register to uTracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={SignupScreen}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead"
      />
    </SafeAreaView>
  );
};

export default Register;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     marginBottom: 200,
//   },
// });
