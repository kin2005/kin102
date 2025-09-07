import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AuthContext } from "../navigation/Navigation";

export default function HomeScreen() {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ยินดีต้อนรับ {user?.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
