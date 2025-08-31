import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function LayoutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.listening}>Listening on</Text>
        <Text style={styles.deviceName}>🎵 BeatsPill+</Text>
      </View>

      {/* Select Device */}
      <ScrollView style={styles.deviceList}>
        <Text style={styles.sectionTitle}>Select a device</Text>

        <TouchableOpacity style={styles.deviceItem}>
          <MaterialCommunityIcons name="television" size={28} color="white" />
          <View style={styles.deviceInfo}>
            <Text style={styles.deviceText}>BRAVIA 4K GB</Text>
            <Text style={styles.subText}>Google Cast</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deviceItem}>
          <Ionicons name="laptop-outline" size={28} color="white" />
          <View style={styles.deviceInfo}>
            <Text style={styles.deviceText}>Momitha’s MacBook Pro</Text>
          </View>
          <Ionicons name="ellipsis-vertical" size={18} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.deviceItem}>
          <Ionicons name="wifi-outline" size={28} color="white" />
          <View style={styles.deviceInfo}>
            <Text style={styles.deviceText}>Airplay or Bluetooth</Text>
          </View>
        </TouchableOpacity>

        {/* Group Session */}
        <View style={styles.groupSection}>
          <Text style={styles.sectionTitle}>Start a Group Session</Text>
          <Text style={styles.groupDesc}>
            Listen with friends, in real time. Pick what to play and control the music together.
          </Text>

          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
            style={styles.avatar}
          />

          <TouchableOpacity style={styles.startBtn}>
            <Text style={styles.startText}>Start Session</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.scanBtn}>
            <Text style={styles.scanText}>Scan to join</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 20,
  },
  listening: {
    color: "#aaa",
    fontSize: 14,
    marginBottom: 5,
  },
  deviceName: {
    color: "#1DB954",
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  deviceList: {
    flex: 1,
  },
  deviceItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  deviceInfo: {
    flex: 1,
    marginLeft: 12,
  },
  deviceText: {
    color: "white",
    fontSize: 16,
  },
  subText: {
    color: "#aaa",
    fontSize: 12,
  },
  groupSection: {
    marginTop: 30,
    alignItems: "center",
  },
  groupDesc: {
    color: "#aaa",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 15,
  },
  startBtn: {
    backgroundColor: "#1DB954",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 25,
    marginBottom: 12,
  },
  startText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  scanBtn: {
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 20,
  },
  scanText: {
    color: "white",
    fontSize: 14,
  },
});
