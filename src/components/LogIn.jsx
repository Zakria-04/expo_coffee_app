import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LogIn = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff'}}>LogIn</Text>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021526'
  },
});
