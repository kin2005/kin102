import React, { useState, useContext } from "react";
import { View, TextInput, Button, Alert, StyleSheet, Text } from "react-native";
import { AuthContext } from "../navigation/AuthContext";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  const handleLogin = () => {
    if (email === "test@demo.com" && password === "123456") {
      signIn(email); // เปลี่ยน Navigation ไป MainTabs
    } else {
      Alert.alert("Login failed", "Email หรือ Password ไม่ถูกต้อง");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 16, textAlign: "center" },
  input: { borderWidth: 1, borderRadius: 6, padding: 10, marginBottom: 12 },
});
