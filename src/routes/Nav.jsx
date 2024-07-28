import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Favourite from "../screens/Favourite";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
const Nav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 90,
          position: "absolute",
          backgroundColor: "rgba(2,21,38,0.5)",
          borderTopWidth: 0,
          elevation: 0,
          borderTopColor: "transparent",
        },
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.blurViewStyles}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"home-sharp"}
              color={focused ? "#FF7D29" : "#686D76"}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"basket"}
              color={focused ? "#FF7D29" : "#686D76"}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"heart"}
              color={focused ? "#FF7D29" : "#686D76"}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Nav;

const styles = StyleSheet.create({
  blurViewStyles: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
