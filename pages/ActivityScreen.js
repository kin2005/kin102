// pages/ActivityScreen.js
import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const data = [
  { id: "1", title: "กิจกรรม 1" },
  { id: "2", title: "กิจกรรม 2" },
  { id: "3", title: "กิจกรรม 3" }
];

export default function ActivityScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { padding: 12, borderBottomWidth: 1 }
});
