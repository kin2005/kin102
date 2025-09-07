import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export default function SettingsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dark Mode</Text>
      <Switch value={isEnabled} onValueChange={() => setIsEnabled(!isEnabled)} />
      <Text>{isEnabled ? "เปิด Dark Mode" : "ปิด Dark Mode"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, marginBottom: 10 },
});
