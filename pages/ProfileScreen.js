import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AuthContext } from "./AuthContext";

const ProfileScreen = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email: {user?.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, marginBottom: 20 },
});