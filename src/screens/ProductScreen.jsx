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
  const [price, setPrice] = useState(getData.prices[0]);

  const goBack = () => {
    props.navigation.goBack();
  };

  const onSmallBtnClick = () => {
    setPrice(getData.prices[0]);
  };
  const onMediomBtnClick = () => {
    // .log(getData.prices.splice(0,1));
    setPrice(getData.prices[1]);
  };

  const onLargeBtnClick = () => {
    setPrice(getData.prices[2]);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={getData.productImg}
          imageStyle={styles.productImg}
        >
          <View style={styles.productHeader}>
            <ProductHeader getData={getData} goBack={goBack} backIcon={"arrow-back-outline"} />
          </View>
          <View style={styles.productImageFootter}>
            {/* <Text style={{ color: "red", marginTop: 20 }}>Name</Text> */}
          </View>
        </ImageBackground>
        <View style={styles.productBody}>
          <Text style={styles.description}>Discription</Text>
          <Text style={styles.descriptionTxt}>{getData.description}</Text>
          <View style={styles.sizeContainer}>
            <View style={styles.sizeBoxContainer}>
              <TouchableOpacity
                onPress={() => {
                  onSmallBtnClick();
                }}
              >
                <Text style={styles.size}>{getData.prices[0].size}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sizeBoxContainer}>
              <TouchableOpacity
                onPress={() => {
                  onMediomBtnClick();
                }}
              >
                <Text style={styles.size}>{getData.prices[1].size}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sizeBoxContainer}>
              <TouchableOpacity
                onPress={() => {
                  onLargeBtnClick();
                }}
              >
                <Text style={styles.size}>{getData.prices[2].size}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <ProductFooter
        price={price.price}
        currency={"$"}
        getData={getData}
        totalPrice={price}
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
