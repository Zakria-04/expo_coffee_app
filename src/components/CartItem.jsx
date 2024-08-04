import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useContext } from "react";
import CartContext from "@/store/CartContext";

const CartItem = () => {
  const { cart, setCart } = useContext(CartContext);
  console.log("Cart ", cart);

  const renderCart = ({ item }) => {
    let price = item.cartTotal[0];
    const { img, product } = item;
    return (
      <View style={{ padding: 10 }}>
        <View style={styles.itemContainer}>
          <Image source={item.img} style={styles.imgItem} />
          <View style={styles.itemTxtContainer}>
            <Text style={styles.productItem}>{product}</Text>
            <Text style={styles.sizeItem}>{price.size}</Text>
            <Text style={styles.priceItem}>
              {price.price}
              <Text style={{ color: "orange" }}>$</Text>
            </Text>
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
  },
  itemTxtContainer: {
    marginLeft: 15,
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
    marginBottom: 10
  },
});
