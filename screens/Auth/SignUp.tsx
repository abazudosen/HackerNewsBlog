import {
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  useWindowDimensions,
  Alert,
  TextInput,
  View,
} from "react-native";
import * as SQLite from "expo-sqlite";
import { useNavigation } from "@react-navigation/core";
import { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import CustomButton from "../../components/CustomButton";

const SignUp = () => {
  const db = SQLite.openDatabase("HN_APP.db");

  const { height } = useWindowDimensions();
  const navigation = useNavigation<any>();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    createTable();
  }, []);

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, password TEXT)"
      );
    });

    console.log("table created successfully");
    setLoading(false);
  };

  const onRegisterPressed = async () => {
    if (name === "" || password === "") {
      alert("Please enter your username and password!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Password and Confirm Password does not match!");
      return;
    }

    db.transaction((tx) => {
      let sql = `SELECT * FROM users WHERE name='${name}'`;
      tx.executeSql(sql, [], (tx, results) => {
        const len = results.rows.length;
        console.log("results", len);
        if (len === 0) {
          let sql = 'INSERT INTO users (name, password) VALUES (?,?)';
          tx.executeSql(sql, [name, password], (tx, results) => {
            Alert.alert("Register successfully!");
            console.log("new results", results);
            navigation.navigate("Sign in");
          });
        } else {
          alert("This username is used! Please choose another username.");
          return;
        }
      });
    });
  };

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraHeight={120}
        contentContainerStyle={styles.root}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../../assets/images/logo.png")}
          style={[styles.logo, { height: height }]}
          resizeMode="contain"
        />
        <Text style={{ fontWeight: "bold", fontSize: 16, padding: 10 }}>
          Create an account
        </Text>

        {/* UserName */}
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            onChangeText={(value) => setName(value)}
          />
        </View>

        {/* Password */}
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            onChangeText={(value) => setPassword(value)}
            secureTextEntry
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Repeat your password"
            onChangeText={(value) => setConfirmPassword(value)}
            secureTextEntry
          />
        </View>

        <CustomButton text={"Register"} onPress={onRegisterPressed} />

        <CustomButton
          text="Have an account? Sign in"
          onPress={() => navigation.navigate("Sign in")}
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

export default SignUp;
