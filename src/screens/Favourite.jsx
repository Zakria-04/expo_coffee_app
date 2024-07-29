import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyList from "../components/EmptyList";
import FavouriteContext from "@/store/FavouriteContext";

const Favourite = () => {
  const { favourite, setFavourite } = useContext(FavouriteContext);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {favourite.length === 0 ? (
          <EmptyList
            exptyMessage="Your Favourite list is Empty"
            name="heart"
            size={40}
            color="red"
          />
        ) : (
          <View>
            <Text>Item not empty</Text>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021526",
  },
});
