import { globalStyles } from "@/styles/global";
import React from "react";
import { ScrollView, Text } from "react-native";

export default function MealScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>All Meals</Text>
    </ScrollView>
  );
}
