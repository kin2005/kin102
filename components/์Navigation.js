// navigation/Navigation.js
import React, { useState, useMemo } from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AuthContext } from "./AuthContext";

// pages
import LoginScreen from "../pages/LoginScreen";
import HomeScreen from "../pages/HomeScreen";
import ActivityScreen from "../pages/ActivityScreen";
import ProfileScreen from "../pages/ProfileScreen";
import SettingsScreen from "../pages/SettingsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  const scheme = useColorScheme();
  const [user, setUser] = useState(null);

  const auth = useMemo(() => ({
    user,
    signIn: (email) => setUser({ email }),
    signOut: () => setUser(null),
  }), [user]);

  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!user ? (
            <Stack.Screen name="Login" component={LoginScreen} />
          ) : (
            <Stack.Screen name="MainTabs" component={MainTabs} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
