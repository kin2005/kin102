import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StyleExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to My App</Text>
      <Text style={styles.paragraph}>
        This is a sample text. Feel free to explore and enjoy the experience!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf6ff', // สีฟ้าอ่อนแบบพาสเทล
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a73e8', // ฟ้าสดใส
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    lineHeight: 26,
    maxWidth: 320,
  },
});

export default StyleExample;
