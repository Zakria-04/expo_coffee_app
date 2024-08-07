import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const QuantityItem = (props) => {
  const { item, totalPrice, setCart, setTotalP, totalP } = props;
  const [quantity, setQuantity] = useState(item.quantity);
  // const [totalP, setTotalP] = useState(item.cartTotal[0].price);

  const addQuantity = () => {
    let QuantityPlus = (item.quantity += 1);
    let price = totalPrice.price * QuantityPlus;
    const fixedPrice = price.toFixed(2);

    setTotalP(fixedPrice);
    setQuantity(QuantityPlus);
  };

  const removeQuantity = () => {
    if (quantity > 1) {
      let QuantityRemove = (item.quantity -= 1);
      let price = (totalP.price -= totalPrice.price);
      const fixedPrice = price.toFixed(2);

      setTotalP(fixedPrice);
      setQuantity(QuantityRemove);
    }
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
