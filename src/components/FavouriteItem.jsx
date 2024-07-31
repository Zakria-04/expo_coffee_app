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

const FavouriteItem = (props) => {
  const { favourite, setFavourite } = useContext(FavouriteContext);
  // console.log("My Favourite", favourite);
  const Navigation = useNavigation();

  const onProductPress = () => {
    Navigation.navigate("product");
  };

  const renderFavourite = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => {}}>
          <ImageBackground source={item.productImg} style={styles.productImg}>
            <ProductHeader getData={favourite} />
            <Text>Hello World</Text>
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
