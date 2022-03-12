import { View, Text ,Image,Button} from "react-native";
import React from "react";

const AccountScreen = () => {
  return (
    <View style={{ justifyContent: "center", flex: 1, alignItems: "center", marginBottom : 100 }}>
       <Text style={{ color: "#075e54", fontSize: 24, marginBottom: 20 }}>
        Welcome to uTracker
      </Text>
      <Image
        source={require("../../../assets/welcome-img.png")}
        style={{ width: 180, height: 180, borderRadius: 180 }}
        resizeMode="cover"
      />
    
        <View style={{ marginVertical: 20 }}>
          <Button
            color={"#25d366"}
            title="Log Out"
            onPress={() => {}}
          />
        </View>
    </View>
  );
};

export default AccountScreen;
