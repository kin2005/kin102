import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const playlists = [
    { id: "1", name: "Shazam", likes: 7, image: "https://via.placeholder.com/60" },
    { id: "2", name: "Roadtrip", likes: 4, image: "https://via.placeholder.com/60" },
    { id: "3", name: "Study", likes: 5, image: "https://via.placeholder.com/60" },
  ];

  const renderPlaylist = ({ item }) => (
    <TouchableOpacity style={styles.playlistItem}>
      <Image source={{ uri: item.image }} style={styles.playlistImage} />
      <View style={{ flex: 1 }}>
        <Text style={styles.playlistName}>{item.name}</Text>
        <Text style={styles.playlistLikes}>{item.likes} likes</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#aaa" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* ส่วนหัวโปรไฟล์ */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* สถิติ */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>23</Text>
          <Text style={styles.statLabel}>PLAYLISTS</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>58</Text>
          <Text style={styles.statLabel}>FOLLOWERS</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>43</Text>
          <Text style={styles.statLabel}>FOLLOWING</Text>
        </View>
      </View>

      {/* Playlists */}
      <View style={styles.playlistSection}>
        <Text style={styles.playlistHeader}>Playlists</Text>
        <FlatList
          data={playlists}
          keyExtractor={(item) => item.id}
          renderItem={renderPlaylist}
        />
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all playlists</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Mock */}
      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={26} color="white" />
        <Ionicons name="search-outline" size={26} color="white" />
        <Ionicons name="library-outline" size={26} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // ดำแบบ Spotify
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: "#333",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  editText: {
    color: "white",
    fontWeight: "600",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#aaa",
    fontSize: 12,
  },
  playlistSection: {
    flex: 1,
    marginTop: 10,
  },
  playlistHeader: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  playlistItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  playlistImage: {
    width: 50,
    height: 50,
    borderRadius: 6,
    marginRight: 10,
  },
  playlistName: {
    color: "white",
    fontSize: 16,
  },
  playlistLikes: {
    color: "#aaa",
    fontSize: 12,
  },
  seeAll: {
    color: "#1DB954",
    marginTop: 8,
    fontWeight: "600",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderTopColor: "#333",
  },
});
