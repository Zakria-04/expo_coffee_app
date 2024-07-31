import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import FavouriteContext from "@/store/FavouriteContext";
import Products from "./Products";
import RenderProducts from "./RenderProducts";
import ProductHeader from "./ProductHeader";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ProductScreen from "../screens/ProductScreen";

const FavouriteItem = (props) => {
  const { favourite, setFavourite } = useContext(FavouriteContext);
  // console.log("My Favourite", favourite);
  console.log(favourite);
  const Navigation = useNavigation();

  const onProductPress = (item) => {
    Navigation.navigate("product", { data: item });
  };

  const renderFavourite = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            onProductPress(item);
          }}
        >
          <ImageBackground source={item.productImg} style={styles.productImg}>
            
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favourite}
        renderItem={renderFavourite}
        scrollEnabled={false}
      />
    </View>
  );
};

export default FavouriteItem;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  productImg: {
    height: 500,
  },
});
