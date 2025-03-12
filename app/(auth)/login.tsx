import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedIcon } from "@/components/ThemedIcon";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { ColorVariables } from "@/constants/ColorVariables";
import Divider from '@/components/Divider';

export default function LoginScreen() {
    const navigation = useNavigation();
    const textTints = { light: '#0f172a', dark: '#e2e8f0' };

    return (
        <ThemedView className="flex-1 text-slate-900" lightColor={ColorVariables.gray[900]}>
            <View className="flex-1 p-[20px] rounded-t-3xl bottom-0 absolute min-w-full" style={{
                backgroundColor: "#fff",
                alignItems: "center",
            }}>
                <View className="flex-1 flex-row items-center space-x-[13px]" style={{ position: 'absolute', top: 24, left: 20 }}>
                    <ThemedIcon size={24} name="ArrowLeft" variant="TwoTone" onPress={() => { navigation.goBack }} />
                    <ThemedText className="font-medium">Welcome</ThemedText>
                </View>
                <View className="flex-1 pt-[48px] min-w-full space-y-[42px]">
                    <ThemedText >
                        Please enter your phone number or email to log in to the SmartShop AI.
                    </ThemedText>
                    <View className="space-y-[8px]">
                        <ThemedText>Email / No. Wa</ThemedText>
                        <TextInput
                            className="h-[48px] p-[16px] rounded-2xl min-w-full border border-1 border-gray-100 focus:border-gray-100 focus:outline-gray-100 placeholder:text-gray-300"
                            placeholder="Email / No. Wa"
                        />
                    </View>
                    <View className="flex-1 flex-row w-full space-x-[16px]">
                        <ThemedButton type="primary">
                            <ThemedText lightColor="#f8fafc" darkColor="#0f172a" >
                                Next
                            </ThemedText>
                        </ThemedButton>
                        <TouchableOpacity className="w-[48px] h-[48px] rounded-2xl bg-slate-100 items-center justify-center">
                            <ThemedIcon name="FingerScan" size={36} />
                        </TouchableOpacity>
                    </View>
                    <View className="flex-1 flex-row space-x-[10px] items-center">
                        <Divider width={0.5} />
                        <Text style={{ color: "gray", alignSelf: "center" }}>Login / Register</Text>
                        <Divider width={0.5} />
                    </View>
                    <View className="space-y-[16px]">
                        <ThemedButton type="secondary" className="space-x-[12px] group">
                            <ThemedText className={styles.text} lightColor={textTints.light} darkColor={textTints.dark}>
                                Google
                            </ThemedText>
                            <ThemedIcon name="Google" variant="Bold" />
                        </ThemedButton>
                        <ThemedButton type="secondary" className="space-x-[12px] group">
                            <ThemedText className={styles.text} lightColor={textTints.light} darkColor={textTints.dark}>
                                Apple ID
                            </ThemedText>
                            <ThemedIcon name="Apple" variant="Bold" />
                        </ThemedButton>
                    </View>
                </View>
            </View>
        </ThemedView>
    );
};

const styles = {
    text: "!text-slate-900 group-hover:!text-slate-200"
}