import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const activities = [
  { id: "1", title: "Activity 1" },
  { id: "2", title: "Activity 2" },
  { id: "3", title: "Activity 3" },
];

const ActivityScreen = () => (
  <View style={styles.container}>
    <FlatList
      data={activities}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
    />
  </View>
);

export default ActivityScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { fontSize: 18, padding: 10, borderBottomWidth: 1, borderColor: "#ccc" },
});
