import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";
import App from "./index";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <App />
    </Stack>
  );
};

export default RootLayout;
