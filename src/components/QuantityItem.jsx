import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Cart from "../screens/Cart";

const QuantityItem = (props) => {
  const { item, totalPrice, setCart, setTotalP, totalP, cart } = props;
  const [quantity, setQuantity] = useState(item.quantity);

  const addQuantity = () => {
    let QuantityPlus = (item.quantity += 1);
    let price = totalPrice.price * QuantityPlus;
    const fixedPrice = price.toFixed(2);

    setTotalP(fixedPrice);
    setQuantity(QuantityPlus);
  };
  // console.log("my cart", cart);

  const removeQuantity = () => {
    let QuantityRemove = (item.quantity -= 1);
    let price = (totalP.price -= totalPrice.price);
    const fixedPrice = price.toFixed(2);

    if (quantity <= 1) {
      const filterItem = cart.filter((val) => val.quantity !== 0);
      setCart(filterItem);
    }

    setTotalP(fixedPrice);
    setQuantity(QuantityRemove);
  };

  return (
    <View style={styles.quantityContainer}>
      <TouchableOpacity onPress={addQuantity}>
        <Ionicons name="add-circle" size={40} color={"#FF7D29"} />
      </TouchableOpacity>
      <Text style={styles.quantityItem}>{quantity}</Text>
      <TouchableOpacity onPress={removeQuantity}>
        <Ionicons name="remove-circle" size={40} color={"#FF7D29"} />
      </TouchableOpacity>
    </View>
  );
};

export default QuantityItem;

const styles = StyleSheet.create({
  quantityContainer: {
    alignItems: "center",
  },
  quantityItem: {
    color: "#fff",
    fontSize: 18,
  },
});
