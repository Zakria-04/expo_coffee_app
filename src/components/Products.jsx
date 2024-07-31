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

const Products = (props) => {
  const { currency, products, category, setItem, setRender } = props;
  const Navigation = useNavigation();

  const onProductPress = (item) => {
    Navigation.navigate("product", { data: item });
  };

  const renderCoffee = ({ item }) => {
    const { product, price, img, category } = item;

    return (
      <View>
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
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.categoryText}>{category}</Text>
      <FlatList
        data={products}
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
  categoryText: {
    color: "#fff",
  },
});
