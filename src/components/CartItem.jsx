import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import CartContext from "@/store/CartContext";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import QuantityItem from "./QuantityItem";

const CartItem = ({ sd }) => {
  const { cart, setCart } = useContext(CartContext);
  const Navigation = useNavigation();
  console.log(cart);

  const renderCart = ({ item }) => {
    let price = item.cartTotal[0];
    const { img, product } = item;
    return (
      <View style={{ padding: 10 }}>
        <View style={styles.itemContainer}>
          <TouchableOpacity
            onPress={() => {
              Navigation.navigate("product", { data: item });
            }}
          >
            <Image source={item.img} style={styles.imgItem} />
          </TouchableOpacity>
          <View style={styles.itemTxtContainer}>
            <Text style={styles.productItem}>{product}</Text>
            <Text style={styles.sizeItem}>{price.size}</Text>
            <Text style={styles.priceItem}>
              {price.price}
              <Text style={{ color: "orange" }}>$</Text>
            </Text>
          </View>
          <View style={styles.quantityContainer}>
            <QuantityItem item={item} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={cart} renderItem={renderCart} scrollEnabled={false} />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#29354b",
    padding: 15,
    borderRadius: 20,
    marginTop: 30,
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
  imgItem: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginRight: 20,
  },
  itemTxtContainer: {
    // marginRight: 50,
  },
  sizeItem: {
    fontSize: 20,
    color: "#fff",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#FF7D29",
    padding: 5,
    width: 50,
    textAlign: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  quantityItem: {
    fontSize: 20,
    color: "#fff",
  },
  quantityContainer: {
    justifyContent: "center",
  },
});
