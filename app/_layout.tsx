import React from "react";
import { Stack } from "expo-router";
import App from "./index";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <App />
    </Stack>
  );
};

export default RootLayout;
