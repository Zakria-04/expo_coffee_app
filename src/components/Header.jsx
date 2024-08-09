import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../assets/images/images";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = (props) => {
  const { logoText, signUp } = props;
  const Navigation = useNavigation();
  return (
    <View>
      <View style={styles.headerContainer}>
        <Ionicons style={styles.menu} name="grid" color={"#FF7D29"} size={40} />
        <Text style={styles.logoText}>{logoText}</Text>
        <TouchableOpacity
          onPress={() => {
            Navigation.navigate("signup");
          }}
        >
          <Text style={styles.signUpText}>{signUp}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoText: {
    fontSize: 30,
    color: "#fff",
  },
  signUpText: {
    fontSize: 15,
    color: "#fff",
    marginRight: 15,
  },
  menu: {
    marginLeft: 15,
  },
});
