import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const FlexboxScreen = () => {
  const topGenres = [
    { title: 'Pop', color: '#9b59b6' },
    { title: 'Indie', color: '#27ae60' },
  ];

  const popularPodcasts = [
    { title: 'News & Politics', color: '#3498db' },
    { title: 'Comedy', color: '#e74c3c' },
  ];

  const browseAll = [
    { title: '2021 Wrapped', color: '#8e9aaf' },
    { title: 'Podcasts', color: '#2c3e50' },
    { title: 'Made for you', color: '#27ae60' },
    { title: 'Charts', color: '#9b59b6' },
  ];

  const renderBoxes = (items) =>
    items.map((item, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.box, { backgroundColor: item.color }]}
        activeOpacity={0.8}
      >
        <Text style={styles.boxText}>{item.title}</Text>
      </TouchableOpacity>
    ));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your top genres</Text>
      <View style={styles.flexContainer}>{renderBoxes(topGenres)}</View>

      <Text style={styles.title}>Popular podcast categories</Text>
      <View style={styles.flexContainer}>{renderBoxes(popularPodcasts)}</View>

      <Text style={styles.title}>Browse all</Text>
      <View style={styles.flexContainer}>{renderBoxes(browseAll)}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 15,
    fontWeight: 'bold',
  },
  flexContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  box: {
    width: '48%',
    aspectRatio: 1.6,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'flex-end',
    padding: 15,
  },
  boxText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default FlexboxScreen;
