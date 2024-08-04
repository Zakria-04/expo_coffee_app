import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { createContext, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CartContext from "@/store/CartContext";
import EmptyList from "../components/EmptyList";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import CartItem from "./../components/CartItem";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {cart.length === 0 ? (
          <EmptyList
            exptyMessage="Your cart is Empty"
            name="cafe"
            size={40}
            color={"#914F1E"}
          />
        ) : (
          <View>
            <ScrollView>
              <Header logoText="Cart" signUp="SignUp" />
              <CartItem />
            </ScrollView>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021526",
  },
});
