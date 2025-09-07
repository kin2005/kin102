import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const activities = [
  { id: "1", name: "กิจกรรมที่ 1" },
  { id: "2", name: "กิจกรรมที่ 2" },
  { id: "3", name: "กิจกรรมที่ 3" },
];

export default function ActivityScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { fontSize: 18, paddingVertical: 10 },
});
