import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CartContext from "@/store/CartContext";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import AddToCartModal from "./AddToCartModal";

const ProductFootter = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const { price, currency, getData, addToCart, totalPrice } = props;
  const [cartModal, setCartModal] = useState(false);
  const Navigation = useNavigation();

  const addToCartBtn = () => {
    const CartList = getData;
    CartList.quantity += 1;
    CartList.cartTotal = [totalPrice];
    cart.push(CartList);
    setCart([...cart]);
  };

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
        <TouchableOpacity
          onPress={() => {
            getData;
            addToCartBtn();
            setCartModal(true);
          }}
        >
          <View style={styles.addToCartContainer}>
            <Text style={styles.addToCartTxt}>Add to Cart</Text>
            <Ionicons name="basket" size={30} color={"#fff"} />
          </View>
        </TouchableOpacity>
        <Modal visible={cartModal} transparent>
          <AddToCartModal cartModal={cartModal} setCartModal={setCartModal} />
        </Modal>
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
    marginBottom: 35,
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
  PaymentModalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.5)",
  },
  borderContainer: {
    backgroundColor: "#F3F7EC",
    borderRadius: 15,
  },
  lottieStyle: {
    width: 300,
    height: 350,
  },
  // coffeeModalText: {
  //   fontSize: 25,
  //   textAlign: "center",
  //   marginTop: 20,
  //   color: "#543310",
  // },
  // closeBtn: {
  //   alignItems: "flex-end",
  //   marginRight: 10,
  //   marginTop: 10,
  // },
  // modalBtnContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  // },
  // modalBtn: {
  //   fontSize: 20,
  //   padding: 15,
  //   textAlign: "center",
  //   color: "#fff",
  // },
  // modalBtnTxt: {
  //   backgroundColor: "orange",
  //   borderRadius: 10,
  //   width: 100,
  //   marginBottom: 25,
  // },
});
