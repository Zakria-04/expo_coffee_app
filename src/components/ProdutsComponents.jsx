import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Products from "./Products";
import RenderProducts from "../components/RenderProducts";

const ProdutsComponents = (props) => {
  const { products, setItem } = props;
  const [render, setRender] = useState(true);
  const [black, setBlack] = useState(true);

  return (
    <View>
      {/* {render && (
        <Products
          category="Americano"
          products={products}
          currency="$"
          setItem={setItem}
          setRender={setRender}
        />
      )}
      {black && (
        <Products
          category="black coffee"
          products={products}
          currency="$"
          setItem={setItem}
          setBlack={setBlack}
        />
      )} */}
      <RenderProducts
        products={products}
        category="Americano"
        setRender={setRender}
        render={render}
      />
      <RenderProducts
        products={products}
        category="Americano"
        setRender={setRender}
        render={render}
      />
    </View>
  );
};

export default ProdutsComponents;

const styles = StyleSheet.create({});
