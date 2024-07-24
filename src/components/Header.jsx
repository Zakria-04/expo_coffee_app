import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Images from "../assets/images/images";

const Header = (props) => {
  const { logoText, signUp } = props;
  return (
    <View>
      <View style={styles.headerContainer}>
        <Image source={Images.menu()} />
        <Text style={styles.logoText}>{logoText}</Text>
        <Text style={styles.signUpText}>{signUp}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logoText: {
    fontSize: 30,
    color: "#fff",
  },
  signUpText: {
    fontSize: 15,
    color: '#fff'
  }
});
