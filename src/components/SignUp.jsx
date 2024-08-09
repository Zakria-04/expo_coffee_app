import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const Navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#021526" }}>
      <View style={styles.container}>
        <Text style={styles.signUpText}>Sign Up</Text>
        <View style={styles.signUpBorder}>
          <Text style={[styles.inputText]}>Username</Text>
          <TextInput
            placeholder="username"
            placeholderTextColor={"#EEF7FF"}
            style={[styles.textInput]}
          />
          <Text style={[styles.inputText]}>Password</Text>
          <TextInput
            placeholder="password"
            placeholderTextColor={"#EEF7FF"}
            style={[styles.textInput]}
          />
          <Text style={[styles.inputText]}>re-enter Password</Text>
          <TextInput
            placeholder="re-enter password"
            placeholderTextColor={"#EEF7FF"}
            style={[styles.textInput]}
          />
          <TouchableOpacity>
            <View style={styles.signUpBtnContainer}>
              <Text style={styles.signUpBtn}>Create Account</Text>
              <Ionicons name="log-in-outline" size={30} color={"#EEF7FF"} />
            </View>
          </TouchableOpacity>
          <View style={styles.loginContainer}>
            <Text style={{ color: "#fff", fontSize: 18 }}>
              alredy have and account?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                Navigation.navigate("login");
              }}
            >
              <Text style={{ color: "#FF7D29", fontSize: 20 }}>login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#021526",
  },
  signUpBorder: {},
  textInput: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 15,
    width: 350,
    marginBottom: 30,
    marginTop: 15,
    borderRadius: 5,
    color: "#fff",
    fontSize: 20,
  },
  inputText: {
    fontSize: 20,
    color: "#fff",
  },
  signUpText: {
    fontSize: 30,
    color: "#FF7D29",
    marginBottom: 15,
  },
  signUpBtn: {
    fontSize: 30,
    color: "#EEF7FF",
    textAlign: "center",
    marginRight: 10,
  },
  signUpBtnContainer: {
    backgroundColor: "#FF7D29",
    borderRadius: 10,
    padding: 15,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 35,
    justifyContent: "center",
  },
  backBtn: {
    flexDirection: "row",
  },
});
