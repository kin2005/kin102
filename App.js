import React from "react";
import Navigation from "./navigation/Navigation";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="default" />
      <Navigation />
    </>
  );
}
