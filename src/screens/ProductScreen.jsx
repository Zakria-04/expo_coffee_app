import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import ProductFooter from "../components/ProductFootter";
import CartContext from "../../store/CartContext";
import Images from "../assets/images/images";
import { Ionicons } from "@expo/vector-icons";

const ProductScreen = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const getData = props.route.params.data;

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={Images.americano_pic_1_portrait()}
          style={styles.productImg}
        />
      </View>
      <View style={styles.backBtnContainer}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back-outline" size={50} color={"#FF8225"} />
        </TouchableOpacity>
      </View>
      <ProductFooter price={getData.price} currency={"$"} />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021526",
  },
  productImg: {
    height: "85%",
    width: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  product: {
    color: "#fff",
  },
  backBtnContainer: {
    position: "absolute",
    top: 50,
    left: 20,
  },
});
