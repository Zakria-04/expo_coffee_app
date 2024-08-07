import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import FavouriteContext from "@/store/FavouriteContext";
import CoffeeList from "../res/data";

const ProductHeader = (props) => {
  const { goBack, getData, backIcon } = props;
  const { favourite, setFavourite } = useContext(FavouriteContext);

  const addToFavourite = () => {
    const checkData = getData.favourite;
    checkData === false
      ? (getData.favourite = true)
      : (getData.favourite = false);

    const FavList = favourite;
    FavList.push(getData);
    setFavourite(FavList);

    const filterFavList = favourite.filter((val) => val.favourite === true);
    setFavourite(filterFavList);
  };

  return (
    <View>
      <View style={styles.backBtnContainer}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons
            name={backIcon}
            size={50}
            color={"#FF8225"}
            style={styles.txt}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            addToFavourite();
          }}
        >
          <Ionicons
            name="heart"
            size={50}
            color={getData.favourite === true ? "red" : "#222831"}
            style={styles.txt}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductHeader;

const styles = StyleSheet.create({
  backBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
