import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import ProductFooter from "../components/ProductFootter";
import CartContext from "../../store/CartContext";
import Images from "../assets/images/images";
import { Ionicons } from "@expo/vector-icons";
import ProductHeader from "../components/ProductHeader";

const ProductScreen = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const getData = props.route.params.data;
  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={Images.americano_pic_1_portrait()}
          imageStyle={styles.productImg}
        >
          <ProductHeader goBack={goBack} getData={getData} />
        </ImageBackground>
      </ScrollView>
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
    height: 650,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
