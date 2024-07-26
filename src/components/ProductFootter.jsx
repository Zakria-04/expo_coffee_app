import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductFootter = () => {
  return (
    <View style={styles.container}>
      <Text>ProductFootter</Text>
    </View>
  );
};

export default ProductFootter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 80
  },
});
