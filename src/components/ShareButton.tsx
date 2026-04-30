import { Meal } from "@/storage/meal";
import { colors } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import { Share, TouchableOpacity } from "react-native";

type ShareButtonProps = {
  meals: Meal[];
};

export default function ShareButton({ meals }: ShareButtonProps) {
  const onShare = async () => {
    const total = meals.reduce(
      (acc, meal) => ({
        calories: acc.calories + meal.calories,
        protein: acc.protein + meal.protein,
        carbs: acc.carbs + meal.carbs,
        fat: acc.fat + meal.fat,
      }),
      { calories: 0, protein: 0, carbs: 0, fat: 0 },
    );
    const ShareText = `
    Mainzone Daily Summary
    Calories: ${total.calories} Cal
    Protein: ${total.protein} g
    Carbs: ${total.carbs} g
    Fat: ${total.fat} g
    Meals: ${meals.length}
    
    `;

    await Share.share({ message: ShareText });
  };
  return (
    <TouchableOpacity onPress={onShare}>
      <Ionicons name="share-outline" size={24} color={colors.primary} />
    </TouchableOpacity>
  );
}
