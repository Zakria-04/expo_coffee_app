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
  const getData = props.route.params.data

  console.log(getData);

  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={getData.productImg}
          imageStyle={styles.productImg}
        >
          <View style={styles.productHeader}>
            <ProductHeader getData={getData} goBack={goBack} />
          </View>
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
  productHeader: {
    paddingTop: 55,
    paddingRight: 30,
    paddingLeft: 30,
  },
});
