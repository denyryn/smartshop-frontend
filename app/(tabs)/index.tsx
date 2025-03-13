import { Image, StyleSheet, TextInput, View, ScrollView } from "react-native";

// components
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import * as Iconsax from "iconsax-react-native";

export default function HomeScreen() {
  const productCards = [1, 2, 3];

  return (
    <ThemedView className="flex-1 pt-6 pb-20">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View className="flex-row items-center justify-between mt-8 w-full">
          <View className="flex-row items-center space-x-2">
            <Image
              source={require("../../assets/images/profile.png")}
              className="w-8 h-8 rounded-full"
            />
            <ThemedText className="text-lg text-[black]">Hi Pares!</ThemedText>
          </View>
          <Iconsax.Notification size={24} />
        </View>

        <View className="flex-row items-center w-full mt-8 p-2 border border-gray-100 rounded-lg">
          <TextInput
            placeholder="Search"
            className="flex-1 ml-2 text-base focus:outline-none"
          />
          <Iconsax.SearchNormal size={20} className="text-gray-500" />
        </View>

        <View className="border border-gray-100 mt-6 rounded-2xl w-3/4 overflow-hidden">
          <View style={{ width: "100%", aspectRatio: 16 / 9 }}>
            <Image
              source={require("../../assets/images/product.png")}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
              className="rounded-2xl"
            />
          </View>
          <View className="p-4 gap-2">
            <ThemedText className="text-lg font-semibold">
              Best Earphone
            </ThemedText>
            <View className="flex-row justify-between items-center">
              <ThemedText className="text-sm font-medium">
                Toko Gadget
              </ThemedText>
              <ThemedText className="text-sm font-medium">
                Rp. 500.000
              </ThemedText>
            </View>
            <View className="flex-row justify-start items-start">
              <View className="flex-row items-center gap-2">
                <Image
                  source={require("../../assets/icons/star.svg")}
                  style={{ height: 12, width: 12 }}
                />
                <ThemedText className="text-xs font-medium">
                  4.3 | 155 Rating | 99 Reviews
                </ThemedText>
              </View>
            </View>
          </View>
        </View>

        {productCards.map((_, index) => (
          <View
            key={index}
            className="flex flex-row items-center mt-4 border border-gray-100 rounded-2xl"
          >
            <View>
              <Image
                source={require("../../assets/images/product2.png")}
                className="rounded-l-2xl"
              />
            </View>
            <View className="p-4 gap-2 flex-grow">
              <ThemedText className="text-lg font-semibold">
                Best Earphone
              </ThemedText>
              <View className="flex-row justify-between items-center">
                <ThemedText className="text-sm font-medium">
                  Toko Gadget
                </ThemedText>
                <ThemedText className="text-sm font-medium">
                  Rp. 500.000
                </ThemedText>
              </View>
              <View className="flex-row justify-start items-start">
                <View className="flex-row items-center gap-2">
                  <Image
                    source={require("../../assets/icons/star.svg")}
                    style={{ height: 12, width: 12 }}
                  />
                  <ThemedText className="text-xs font-medium">
                    4.3 | 155 Rating | 99 Reviews
                  </ThemedText>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
}
