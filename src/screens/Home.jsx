import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import SearchItem from "../components/SearchItem";
import Products from "../components/Products";
import Category from "../components/Category";
import CoffeeList from "../res/data";
import ProductsComponents from "../components/ProdutsComponents";

const Home = () => {
  const [item, setItem] = useState(CoffeeList);
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          {/* Header */}
          <Header logoText="Coffee-App" signUp="SignUp" />
          {/* Search */}
          <SearchItem
            setSearch={setSearch}
            search={search}
            item={item}
            setItem={setItem}
          />
          {/* Category */}
          <Category setItem={setItem} />
          {/* Products */}
          <Products products={item} setItem={setItem} currency={'$'} />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021526",
  },
});
