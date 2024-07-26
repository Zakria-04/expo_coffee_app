import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductFooter from "../components/ProductFootter"

const ProductScreen = (props) => {
  const getProduct = props.route.params.data;
  console.log("product ", getProduct);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={getProduct.productImg}
        resizeMode="cover"
        style={styles.backImg}
      >
        <View style={styles.backImgContainer}>
          <Text>{getProduct.product}</Text>
        </View>
      </ImageBackground>
      <ProductFooter />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImg: {
    flex: 2,
    justifyContent: "center",
    height: "70%",
  },
  backImgContainer: {
    flex: 3,
  },
});
