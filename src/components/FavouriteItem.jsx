import {
  FlatList,
  ImageBackground,
  Pressable,
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
  const Navigation = useNavigation();

  const onProductPress = (item) => {
    Navigation.navigate("product", { data: item });
  };

  const renderFavourite = ({ item }) => {
    return (
      <View>
        <Pressable
          onPress={() => {
            onProductPress(item);
          }}
        >
          <ImageBackground
            source={item.productImg}
            style={styles.productImg}
            imageStyle={{ borderRadius: 60 }}
          >
            <View style={styles.favoriteHeaderContainer}>
              <ProductHeader getData={item} />
            </View>
          </ImageBackground>
        </Pressable>
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
    marginBottom: 50,
    marginTop: 50,
  },
  icon: {
    alignItems: "flex-end",
    marginRight: 30,
    marginTop: 30,
  },
  favoriteHeaderContainer: {
    margin: 20
  }
});
