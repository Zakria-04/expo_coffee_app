import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { createContext, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CartContext from "@/store/CartContext";
import CartProvider from "@/store/CartProvider";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Cart</Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate("product")
        }}>
          <Text>Go To product</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
