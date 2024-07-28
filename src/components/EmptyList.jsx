import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const EmptyList = ({exptyMessage, emptyIcon}) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/animations/coffeecup.json")}
        style={styles.lottieStyle}
        autoPlay
        loop
      />
      <Text style={styles.emptyText}>{exptyMessage}</Text>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50
  },
  lottieStyle: {
    width: 500,
    height: 500,
  },
  emptyText: {
    color: '#fff',
    fontSize: 20,
  }
});
