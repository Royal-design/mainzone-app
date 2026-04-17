import { globalStyles } from "@/styles/global";
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function meal() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>All Meals</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
