import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import CartContext from "@/store/CartContext";

const CartItem = () => {
  const { cart, setCart } = useContext(CartContext);

  const renderCart = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.img} style={styles.img} />
        <View style={styles.itemTxtContainer}>
          <Text style={styles.productItem}>{item.product}</Text>
          <Text style={styles.priceItem}>
            {item.price}
            <Text style={{ color: "orange" }}>$</Text>
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={cart} renderItem={renderCart} scrollEnabled={false} />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#29354b",
    padding: 15,
    borderRadius: 20,
  },
  productItem: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 5,
  },
  priceItem: {
    color: "#fff",
    fontSize: 20,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
  itemTxtContainer: {
    marginLeft: 20,
  },
});
