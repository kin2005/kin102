import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ProfileScreen({ user, setUser }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Email: {user?.email}</Text>
      <Button title="Logout" onPress={() => setUser(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 10 },
});
