import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import FavouriteContext from "@/store/FavouriteContext";
import CoffeeList from "../res/data";

const ProductHeader = (props) => {
  const { goBack, getData } = props;
  const { favourite, setFavourite } = useContext(FavouriteContext);
  // console.log("Favourite List",favourite);
  console.log(getData);
  console.log(favourite);

  const addToFavourite = () => {
    const checkData = getData.favourite;
    if (checkData === false) {
      console.log("must be added ");
      getData.favourite = true;
      console.log(getData);
    } else {
      console.log("must be remove ");
      getData.favourite = false;
      console.log(getData);
    }
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
            name="arrow-back-outline"
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
          <Ionicons name="heart" size={50} color={getData.favourite === true ? 'red' : '#222831'} style={styles.txt} />
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
