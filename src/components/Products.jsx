import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CoffeeList from "../res/data";
import { useNavigation } from "@react-navigation/native";
// import { useNavigation } from "expo-router";

const Products = (props) => {
  const { currency, item, category } = props;
  const Navigation = useNavigation();

  const onProductPress = (item) => {
    Navigation.navigate("ProductScreen");
  };

  const renderCoffee = ({ item }) => {
    const { product, price, img } = item;
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => {
            onProductPress(item);
          }}
        >
          <Image style={styles.itemImg} source={img} />
          <Text style={styles.itemProduct}>{product}</Text>
          <Text style={styles.itemPrice}>{`${price} ${currency}`}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={item}
        renderItem={renderCoffee}
        numColumns={2}
        scrollEnabled={false}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: "#EEEEEE",
    padding: 10,
    borderRadius: 10,
    margin: 20,
  },
  itemImg: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  itemProduct: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    marginTop: 15,
  },
  itemPrice: {
    color: "#FF7D29",
    textAlign: "center",
    fontSize: 17,
    marginTop: 10,
    marginBottom: 10,
  },
});
