import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Products from "./Products";

const ProdutsComponents = (props) => {
  const { products, setItem, currency } = props;
  return (
    <View>
      <Products
        category={"Americano"}
        products={products}
        setItem={setItem}
        currency={currency}
      />
        {/* <Products
        category={"Black Coffee"}
        products={products}
        setItem={setItem}
        currency={currency}
      />
      <Products
        category={"Cappuccino"}
        products={products}
        setItem={setItem}
        currency={currency}
      />
      <Products
        category={"expresso"}
        products={products}
        setItem={setItem}
        currency={currency}
      />
      <Products
        category={"latte"}
        products={products}
        setItem={setItem}
        currency={currency}
      />
      <Products
        category={"Macchiato"}
        products={products}
        setItem={setItem}
        currency={currency}
      /> */}
    </View>
  );
};

export default ProdutsComponents;
