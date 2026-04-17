import HomeHeader from "@/components/HomeHeader";
import { colors, globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HimeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Mainzone</Text>
      <HomeHeader />
      <Link href="/meal" style={{ fontSize: 16, color: colors.primary }}>
        Go to Meals
      </Link>
      <Link href="/add-meal" style={{ fontSize: 16, color: colors.primary }}>
        Add Meal
      </Link>
    </View>
  );
}
