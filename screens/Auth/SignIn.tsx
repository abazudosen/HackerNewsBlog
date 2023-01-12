import {
  Image,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
  View,
  TextInput,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as SQLite from "expo-sqlite";

import CustomButton from "../../components/CustomButton";

const SignIn = () => {
  const db = SQLite.openDatabase("HN_APP.db");

  const { height } = useWindowDimensions();
  const navigation = useNavigation<any>();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   onSignInPressed();
  // }, [db]);

  const onSignInPressed = () => {
    if (name === "" || password === "") {
      Alert.alert("Please enter your username and password!");
      return;
    }
    db.transaction((tx) => {
      const sql = `SELECT * FROM users WHERE name='${name}'`;
      tx.executeSql(sql, [], (tx, results) => {
        const len = results.rows.length;
        if (!len) {
          Alert.alert("This account does not exist!");
        } else {
          const row = results.rows.item(0);
          if (password === row.password) {
            navigation.navigate("Home", { name });
            return;
          }
          Alert.alert("Authentication failed!");
        }
      });
    });
  };

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraHeight={50}
        contentContainerStyle={styles.root}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../../assets/images/logo.png")}
          style={[styles.logo, { height: height }]}
          resizeMode="contain"
        />

        {/* Email */}
        <View style={styles.container}>
          <TextInput
            value={name}
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={(value) => setName(value)}
            keyboardType="email-address"
          />
        </View>

        {/* Password */}
        <View style={styles.container}>
          <TextInput
            value={password}
            style={styles.input}
            placeholder="Enter your password"
            onChangeText={(value) => setPassword(value)}
            secureTextEntry
          />
        </View>

        <CustomButton text={"Sign In"} onPress={onSignInPressed} />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={() => navigation.navigate("Sign up")}
          type="TERTIARY"
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 25,
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 250,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "white",
    width: "100%",

    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    height: 50,
  },
});

export default SignIn;
