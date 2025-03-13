import { Image, StyleSheet, TextInput, View } from "react-native";

// components
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import * as Iconsax from "iconsax-react-native";

export default function HomeScreen() {
  return (
    <ThemedView className="p-4 flex-1">
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

      <View className="border mt-6 rounded-2xl w-3/4 overflow-hidden">
        <Image
          source={require("../../assets/images/product.png")}
          className="w-full h-48 object-contain"
        />
        <View className="p-4 gap-2">
          <ThemedText className="text-lg">Best Earphone</ThemedText>
          <View className="flex-row justify-between items-center">
            <ThemedText className="text-sm">Toko Gadget</ThemedText>
            <ThemedText className="text-sm">Rp. 500.000</ThemedText>
          </View>
          <View className="flex-row justify-start items-start">
            <View className="flex-row items-center gap-2">
              <Image
                source={require("../../assets/icons/star.svg")}
                className="h-4 w-4"
              />
              <ThemedText className="text-xs">
                4.3 | 155 Rating | 99 Reviews
              </ThemedText>
            </View>
          </View>
        </View>
      </View>

      <View className="flex-row border mt-6 rounded-2xl w-64">
        <Image
          source={require("../../assets/images/product2.png")}
          className="w-4 h-4"
        />
        <View className="p-4 gap-2">
          <ThemedText className="text-lg">Best Earphone</ThemedText>
          <View className="flex-row justify-between items-center">
            <ThemedText className="text-sm">Toko Gadget</ThemedText>
            <ThemedText className="text-sm">Rp. 500.000</ThemedText>
          </View>
          <View className="flex-row justify-start items-start">
            <ThemedText className="text-sm">
              ⭐ 4.3 | 155 Rating | 99 Reviews
            </ThemedText>
          </View>
        </View>
      </View>
    </ThemedView>
  );
}
