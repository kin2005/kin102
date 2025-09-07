import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ProfileScreen({ user, navigation }) {
  const handleLogout = () => {
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email: {user?.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { marginBottom: 20, fontSize: 16 },
});
