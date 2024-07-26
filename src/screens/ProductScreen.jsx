import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductScreen = (props) => {
  const getProduct = props.route.params.data;
  console.log("product ", getProduct);
  return (
    <View style={styles.container}>
      <ImageBackground source={getProduct.img} resizeMode="cover" style={styles.backImg}>

      </ImageBackground>
      <Text>{getProduct.product}</Text>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImg: {
    flex: 1,
    justifyContent: 'center'
  }
});
