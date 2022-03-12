import React, { useState } from "react";
import { View, Text, Image, TextInput, Button } from "react-native";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Text style={{ color: "#075e54", fontSize: 24, marginBottom: 20 }}>
        {headerText}
      </Text>
      <Image
        source={require("../../assets/welcome-img.png")}
        style={{ width: 180, height: 180, borderRadius: 180 }}
        resizeMode="contain"
      />
      <View style={{ marginTop: 20 }}>
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={setEmail}
          style={{
            borderBottomColor: "#128c7e",
            borderBottomWidth: 2,
            width: 200,
          }}
        />

        <TextInput
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{
            borderBottomColor: "#128c7e",
            borderBottomWidth: 2,
            width: 200,
            marginTop: 20,
          }}
        />
        {errorMessage ? (
          <Text style={{ color: 'red', fontSize: 18 }}>{errorMessage} </Text>
        ) : null}
        <View style={{ marginVertical: 20 }}>
          <Button
            color={"#25d366"}
            title={submitButtonText}
            onPress={() => onSubmit({ email, password })}
          />
        </View>
      </View>
    </>
  );
};

export default AuthForm;
