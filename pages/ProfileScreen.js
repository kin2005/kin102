import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AuthContext } from "../navigation/Navigation";

export default function ProfileScreen() {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => setUser(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email: {user?.email}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, marginBottom: 20 },
});
