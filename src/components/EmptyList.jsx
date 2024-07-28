import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { Ionicons } from "@expo/vector-icons";

const EmptyList = props => {
  const { exptyMessage, emptyIcon, name, size, color } = props
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/animations/coffeecup.json")}
        style={styles.lottieStyle}
        autoPlay
        loop
      />
      <View style={styles.emptyTextContainer}>
        <Text style={styles.emptyText}>{exptyMessage}</Text>
        <Ionicons
          style={{ alignItems: "center" }}
          name={name}
          size={size}
          color={color}
        />
      </View>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
  },
  lottieStyle: {
    width: 500,
    height: 500,
  },
  emptyText: {
    color: "#fff",
    fontSize: 20,
    marginRight: 10
  },
  emptyTextContainer: {
    flexDirection: "row",
    alignItems: 'center'
  },
});
