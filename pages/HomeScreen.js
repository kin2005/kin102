import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';

const trendingSongs = [
  { title: 'Tears', artist: 'Sabrina Carpenter', image: 'https://link.to/tears.jpg' },
  { title: 'ฝากให้เขารัก', artist: 'เยสเซอร์เดย์', image: 'https://link.to/yessir.jpg' },
  { title: 'wanna be yours (อยากให้เธอรัก)', artist: 'วี วิโอเลต วอเทียร์', image: 'https://link.to/vee.jpg' },
  { title: 'หน้าเบลอหลังชัด (Foreground)', artist: 'LYKN', image: 'https://link.to/lykn.jpg' },
  { title: 'ข้าแค่โดนทิ้ง', artist: 'LITTLE JOHN', image: 'https://link.to/littlejohn.jpg' },
];

const popularArtists = [
  { name: 'Artist 1', image: 'https://share.google/images/XA11lzW7xSrNdDoN3' },
  { name: 'Artist 2', image: 'https://share.google/images/ggez7Fpo4oBW1nycs' },
  { name: 'Artist 3', image: 'https://share.google/images/pt7k3k8kVKIvGw6xE' },
  { name: 'Artist 4', image: 'https://share.google/images/jnSrZRJusdQamgrK0' },
  { name: 'Artist 5', image: 'https://share.google/images/4vekDlQEYZlOFnwOz' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>เพลงมาแรง</Text>
      <FlatList
        horizontal
        data={trendingSongs}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.albumImage} />
            <Text style={styles.songTitle}>{item.title}</Text>
            <Text style={styles.artistName}>{item.artist}</Text>
          </View>
        )}
      />

      <Text style={styles.heading}>ศิลปินยอดนิยม</Text>
      <FlatList
        horizontal
        data={popularArtists}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.artistCard}>
            <Image source={{ uri: item.image }} style={styles.artistImage} />
          </View>
        )}
      />

      <Text style={styles.heading}>Navigation Buttons</Text>
      <View style={styles.buttonContainer}>
        {['Counter','Details','Flexbox','Layout','Login','Profile','StyleSheet'].map((screen, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.navButton}
            onPress={() => navigation.navigate(screen)} // ชื่อตรงกับ Stack.Screen
          >
            <Text style={styles.navButtonText}>{screen}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#000', padding: 20, flex: 1 },
  heading: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginVertical: 15 },
  card: { marginRight: 15, width: 120 },
  albumImage: { width: 120, height: 120, borderRadius: 6 },
  songTitle: { color: '#fff', marginTop: 8, fontSize: 14, fontWeight: 'bold' },
  artistName: { color: 'gray', fontSize: 12 },
  artistCard: { marginRight: 15, alignItems: 'center' },
  artistImage: { width: 80, height: 80, borderRadius: 40 },
  buttonContainer: { marginTop: 20 },
  navButton: {
    backgroundColor: '#1DB954',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  navButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default HomeScreen;
