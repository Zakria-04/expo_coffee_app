import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Home from "../src/screens/Home"

interface Data {
  id: number;
  name: string;
  text: string;
}

const HomeS = () => {
//   const { data } = useLocalSearchParams<{ data: any }>();
//   console.log(data);
  

//   let parsedData: Data | null = null;
//   if (data) {
//     try {
//       parsedData = JSON.parse(data);
//     } catch (error) {
//       console.error("Failed to parse data:", error);
//     }
//   }

  return (
    // <View style={styles.container}>
    //   {parsedData ? (
    //     <Text>{`ID: ${parsedData.id}, Name: ${parsedData.name}, Text: ${parsedData.text}`}</Text>
    //   ) : (
    //     <Text>No data available</Text>
    //   )}
    //   <Text>{`test ${parsedData?.name}`}</Text>
    // </View>
    <View style={{flex: 1}}>
        <Home />
    </View>
  );
};

export default HomeS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});