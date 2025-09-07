import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen({ user }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>ยินดีต้อนรับ, {user?.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  welcome: { fontSize: 20, fontWeight: "bold" },
});
