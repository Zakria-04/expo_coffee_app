import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const FavouriteItem = (props) => {
  const { setFavourite, favourite } = props;

  const filterFavourite = () => {
    if (favourite.map(val => val.favourite == false)) {
        console.log("must be removed");
    }
  };

  return (
    <View>
      <Text>FavouriteItem</Text>
      <TouchableOpacity onPress={filterFavourite()}>
        <Text style={{ color: "#fff", fontSize: 20 }}>Hello World</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FavouriteItem;

const styles = StyleSheet.create({});
