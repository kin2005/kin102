import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const activities = [
  { id: "1", title: "ทำการบ้าน" },
  { id: "2", title: "ออกกำลังกาย" },
  { id: "3", title: "อ่านหนังสือ" },
];

export default function ActivityScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { fontSize: 18, marginVertical: 8 },
});
