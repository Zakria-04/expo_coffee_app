import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const AddToCartModal = (props) => {
  const { cartModal, setCartModal } = props;
  const Navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.PaymentModalContainer}>
        <View style={styles.borderContainer}>
          <View style={styles.closeBtn}>
            <TouchableOpacity
              onPress={() => {
                setCartModal(false);
              }}
            >
              <Ionicons name="close-circle" size={50} color={"orange"} />
            </TouchableOpacity>
          </View>
          <Text style={styles.coffeeModalText}>Your coffee is in the cart</Text>
          <LottieView
            source={require("../assets/animations/drinkingcoffee.json")}
            style={styles.lottieStyle}
            autoPlay
            loop
          />
          <View style={styles.modalBtnContainer}>
            <TouchableOpacity
              onPress={() => {
                Navigation.navigate("Home");
              }}
            >
              <View style={styles.modalBtnTxt}>
                <Text style={styles.modalBtn}>Home</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Navigation.navigate("Cart");
              }}
            >
              <View style={styles.modalBtnTxt}>
                <Text style={styles.modalBtn}>Cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddToCartModal;

const styles = StyleSheet.create({
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
  coffeeModalText: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
    color: "#543310",
  },
  closeBtn: {
    alignItems: "flex-end",
    marginRight: 10,
    marginTop: 10,
  },
  modalBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modalBtn: {
    fontSize: 20,
    padding: 15,
    textAlign: "center",
    color: "#fff",
  },
  modalBtnTxt: {
    backgroundColor: "orange",
    borderRadius: 10,
    width: 100,
    marginBottom: 25,
  },
});
