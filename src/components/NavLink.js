import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";


import { Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const NavLink = ({ text, routeName }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
    
        <Text style={styles.link}>{text}</Text>
  
    </TouchableOpacity>
  );
};

export default NavLink;

const styles = StyleSheet.create({
  link: {
    color: "#757575",
  },
});
