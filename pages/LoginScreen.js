import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/736x/1b/3f/9f/1b3f9f3c7e4b3c8c77b19a63e2b5e3f8.jpg',
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg',
          }}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>
          Millions of Songs.{'\n'}Free on Spotify.
        </Text>

        {/* ช่องกรอก Email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
        />

        {/* ช่องกรอก Password */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* ปุ่ม Login */}
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>Log In</Text>
        </TouchableOpacity>

        {/* ปุ่ม Social Media */}
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
            }}
            style={styles.icon}
          />
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
            }}
            style={styles.icon}
          />
          <Text style={styles.socialText}>Continue with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
            }}
            style={styles.icon}
          />
          <Text style={styles.socialText}>Continue with Apple</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 60,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: 'white',
    marginBottom: 15,
  },
  signupButton: {
    backgroundColor: '#1DB954',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 20,
  },
  signupText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 12,
    width: '100%',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  socialText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
