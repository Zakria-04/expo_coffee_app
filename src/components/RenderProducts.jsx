import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RenderProducts = () => {
  return (
    <View style={styles.container}>
      <Text>RenderProducts</Text>
      <Text>RenderProducts</Text>
      <Text>RenderProducts</Text>
      <Text>RenderProducts</Text>
    </View>
  );
};

export default RenderProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
