import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ProductFooter from "../components/ProductFootter";
import CartContext from "../../store/CartContext";

const ProductScreen = (props) => {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);
  const getData = props.route.params.data;
  console.log(getData);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={getData.productImg}
        style={styles.productImg}
      ></ImageBackground>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021526'
  },
  productImg: {
    height: "80%",
  },
});
