import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const QuantityItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  console.log(quantity);

  return (
    <View style={styles.quantityContainer}>
      <TouchableOpacity
        onPress={() => {
          const addQuantity = (item.quantity += 1);
          setQuantity(addQuantity);
        }}
      >
        <Ionicons name="add-circle" size={40} color={"#FF7D29"} />
      </TouchableOpacity>
      <Text>{quantity}</Text>
      <TouchableOpacity
        onPress={() => {
          if (quantity > 0) {
            const removeQuantity = (item.quantity -= 1);
            setQuantity(removeQuantity);
          }
        }}
      >
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
});
