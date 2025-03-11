import { Image, StyleSheet, TextInput, View } from "react-native";

// components
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import * as Iconsax from "iconsax-react-native";

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1, alignItems: "center" }} className="p-4">
      <View className="flex-row items-center justify-between w-full">
        <View className="flex-row items-center space-x-2">
          <Image
            source={require("../../assets/images/profile.png")}
            className="w-8 h-8 rounded-full"
          />
          <ThemedText className="text-lg">Hi Pares!</ThemedText>
        </View>
        <Iconsax.Notification size={24} />
      </View>
      <View className="flex-row items-center w-full mt-8 p-2 border border-gray-300 rounded-lg">
        <TextInput
          placeholder="Search"
          className="flex-1 ml-2 text-base focus:outline-none"
        />
        <Iconsax.SearchNormal size={20} className="text-gray-500" />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
  },
});
