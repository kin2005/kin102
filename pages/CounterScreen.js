import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You clicked {count} times</Text>
      
      {/* ปุ่มเพิ่มค่า */}
      <View style={{ marginBottom: 20, width: '60%' }}>
        <Button title="Click me" color="#1DB954" onPress={() => setCount(count + 1)} />
      </View>

      {/* ปุ่มกลับไปหน้า Home */}
      <View style={{ width: '60%' }}>
        <Button
          title="Go to Home"
          color="#fff"
          onPress={() => navigation.navigate('Home')} // 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    color: '#1DB954',
    fontSize: 22,
    marginBottom: 20,
  },
});

export default CounterScreen;
