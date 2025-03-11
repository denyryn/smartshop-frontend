import { Image, StyleSheet, Platform } from "react-native";

import { useState } from "react";
import { View } from "react-native";
import CustomTextInput from "@/components/CustomTextInput";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Text, Button } from "react-native";

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
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
  },
});
