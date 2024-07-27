import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ProductFootter = (props) => {
  const { price, currency } = props;

  const addToCartBtn = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.priceText}>price</Text>
          <Text style={styles.price}>
            {currency}
            <Text style={{ color: "#fff", fontSize: 20 }}>{` ${price}`}</Text>
          </Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.addToCartContainer}>
            <Text style={styles.addToCartTxt}>Add to Cart</Text>
            <Ionicons name="basket" size={30} color={"#fff"} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductFootter;

const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  priceText: {
    color: "#fff",
    fontSize: 25,
    marginBottom: 10,
  },
  price: {
    color: "#FF8225",
    fontSize: 20,
  },
  addToCartContainer: {
    backgroundColor: "#FF8225",
    padding: 20,
    width: 200,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  addToCartTxt: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    marginRight: 5,
  },
});
