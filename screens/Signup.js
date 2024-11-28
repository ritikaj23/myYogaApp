// screens/Signup.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignup = async () => {
    setError("");

    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      await AsyncStorage.setItem("userData", JSON.stringify({ username, email, password }));
      Alert.alert("Success", "Account created successfully!");
      navigation.navigate("Login");
    } catch (e) {
      setError("Failed to save user data.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sign Up</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TextInput style={styles.input} placeholder="Enter your username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry={true} />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.prompt}>
        Already have an account? <Text style={styles.link} onPress={() => navigation.navigate("Login")}>Login</Text>
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

export default Signup;
