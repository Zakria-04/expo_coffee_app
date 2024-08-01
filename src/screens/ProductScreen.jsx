import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import ProductFooter from "../components/ProductFootter";
import CartContext from "../../store/CartContext";
import Images from "../assets/images/images";
import { Ionicons } from "@expo/vector-icons";
import ProductHeader from "../components/ProductHeader";

const ProductScreen = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const getData = props.route.params.data;
  const [data, setData] = useState(getData);

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
          <View style={styles.productImageFootter}>
            {/* <Text style={{ color: "red", marginTop: 20 }}>Hello World</Text> */}
          </View>
        </ImageBackground>
        <View style={styles.productBody}>
          <Text style={styles.description}>Discription</Text>
          <Text style={styles.descriptionTxt}>{getData.description}</Text>
          <View style={styles.sizeContainer}>
            <View style={styles.sizeBoxContainer}>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.size}>{getData.prices[0].size}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sizeBoxContainer}>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.size}>{getData.prices[1].size}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sizeBoxContainer}>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.size}>{getData.prices[2].size}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <ProductFooter
        price={getData.prices[0].price}
        currency={"$"}
        getData={getData}
      />
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
  productImageFootter: {
    marginTop: "100%",
    height: 120,
    backgroundColor: "rgba(0,0,0,.5)",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  productBody: {
    padding: 15,
  },
  description: {
    fontSize: 25,
    color: "#fff",
    marginTop: 20,
  },
  descriptionTxt: {
    color: "#fff",
    fontSize: 16,
    marginTop: 15,
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
    marginBottom: 50,
  },
  size: {
    fontSize: 25,
    color: "#fff",
    padding: 15,
    textAlign: "center",
  },
  sizeBoxContainer: {
    width: 100,
    backgroundColor: "#29354b",
    borderRadius: 10,
  },
});
