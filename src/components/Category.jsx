import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CoffeeList from "../res/data";

const Category = ({ setItem }) => {
  const categoryList = [...new Set(CoffeeList.map((val) => val.category))];

  const filterItems = (cat) => {
    const newItems = CoffeeList.filter((newVal) => newVal.category === cat);
    setItem(newItems);
  };

  const returnedFilteredItems = () => {
    return categoryList.map((val, index) => (
      <View key={val.toString()}>
        <TouchableOpacity
          onPress={() => {
            filterItems(val);
          }}
        >
          <Text style={styles.category}>{val}</Text>
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <View style={styles.categoryContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => {
            setItem(CoffeeList);
          }}
        >
          <Text style={styles.category}>All</Text>
        </TouchableOpacity>
        {returnedFilteredItems()}
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  category: {
    color: "#fff",
    fontSize: 25,
    marginLeft: 20,
  },
  categoryContainer: {
    marginTop: 25,
    marginBottom: 10,
  },
});
