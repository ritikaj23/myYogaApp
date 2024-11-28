// screens/Login.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    try {
      const storedUserData = await AsyncStorage.getItem("userData");
      const userData = JSON.parse(storedUserData);

      if (userData && userData.email === email && userData.password === password) {
        Alert.alert("Success", "Login successful!");
        navigation.navigate("Home");
      } else {
        setError("Invalid email or password.");
      }
    } catch (e) {
      setError("Failed to retrieve user data.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry={true} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.prompt}>
        Don't have an account? <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>Sign Up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F5F5F5" },
  headerText: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { height: 40, borderColor: "#ccc", borderWidth: 1, marginBottom: 15, paddingHorizontal: 10 },
  button: { backgroundColor: "#4CAF50", padding: 10, alignItems: "center", borderRadius: 5, marginTop: 10 },
  buttonText: { color: "#FFFFFF", fontWeight: "bold" },
  errorText: { color: "red", marginBottom: 10 },
  prompt: { marginTop: 20, textAlign: "center" },
  link: { color: "#4CAF50", fontWeight: "bold" },
});

export default Login;
