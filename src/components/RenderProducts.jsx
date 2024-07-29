import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const RenderProducts = (props) => {
  const { products, category, setRender, render } = props;
  const renderProducts = ({ item }) => {
    return (
      <View>
        <Image source={item.img} />
      </View>
    );
  };

  return (
    <View>
      <Text style={{ color: "#fff" }}>{category}</Text>
      <FlatList
        data={products}
        renderItem={renderProducts}
        numColumns={2}
        ListEmptyComponent={() => <Text>Empty</Text>}
      />
    </View>
  );
};

export default RenderProducts;

const styles = StyleSheet.create({});
