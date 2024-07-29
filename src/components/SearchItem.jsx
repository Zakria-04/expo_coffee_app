import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React, { useState } from "react";
import Images from "../assets/images/images";
import CoffeeList from "../res/data";

const SearchItem = ({ setSearch, search, item, setItem }) => {
  // console.log("searching ", search);

  const filterSearch = (value) => {
    console.log("value is ", value);
    // const filterV = CoffeeList.filter((val) => val.category == value);
    const filterV = item.filter((val) => val.category == value);
    console.log("data is ", item);
    return filterV;
  };

  return (
    <View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInputContainer}
          placeholder="search..."
          placeholderTextColor={"#fff"}
          onChangeText={(changeV) => {
            setSearch(changeV.toLowerCase());
            setItem(filterSearch(search));
          }}
        />
        <Image style={styles.searchImg} source={Images.search()} />
      </View>
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: "#fff",
    width: "80%",
    height: 50,
    borderRadius: 10,
    color: "#fff",
    fontSize: 20,
    paddingLeft: 15,
  },
  searchImg: {
    width: 35,
    height: 35,
    marginLeft: 15,
  },
});
