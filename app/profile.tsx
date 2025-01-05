import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Link href="/" style={{ color: "green" }}>
        Go back
      </Link>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default Profile;
