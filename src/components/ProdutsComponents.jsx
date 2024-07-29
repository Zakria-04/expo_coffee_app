import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Products from "./Products";
import RenderProducts from "../components/RenderProducts";

const ProdutsComponents = (props) => {
  const { products, setItem } = props;

  return (
    <View>
      {/* {/* {render && (
        <Products
          category="Americano"
          products={products}
          currency="$"
          setItem={setItem}
          setRender={setRender}
        />
      )} */}
        <Products
          category="black coffee"
          products={products}
          currency="$"
          setItem={setItem}
        />
      {/* <RenderProducts
        products={products}
        category="Americano"
        setRender={setRender}
        render={render}
      /> */}
    </View>
  );
};

export default ProdutsComponents;

const styles = StyleSheet.create({});
