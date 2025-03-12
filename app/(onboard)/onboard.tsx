import { StyleSheet, Image, Platform, View, Button, Text } from 'react-native';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedIcon } from '@/components/ThemedIcon';
import { ThemedButton } from '@/components/ThemedButton';

export default function OnboardScreen() {
    const router = useRouter();

    return (
        <ThemedView className={`${styles.loginContainer}`} style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View className={`${styles.greetingTextContainer}`}>
                <ThemedText type='h3'>
                    Selamat Datang di SmartShop!
                </ThemedText>
                <ThemedText type='body'>
                    Belanja jadi lebih mudah dan cerdas dengan bantuan AI
                </ThemedText>
            </View>

            <View className={`${styles.buttonContainer}`}>
                <ThemedButton type='primary' onPress={() => { router.push('/(auth)/login') }}>
                    <ThemedText className='!font-medium !text-white-default !group-hover:text-white-default !group-focus:text-white-default !text-body'>
                        Explore
                    </ThemedText>
                </ThemedButton>
                <ThemedButton className='text-body font-medium group' type='secondary' onPress={() => { router.push('/(auth)/login') }}>
                    <ThemedText className='!font-medium group-hover:!text-white-default group-focus:text-white-default text-body' style={{ textTransform: "none" }}>
                        Login
                    </ThemedText>
                </ThemedButton>
            </View>
        </ThemedView>
    );
}

const styles = {
    greetingTextContainer: "h-full w-full space-y-[12px] flex-1 justify-center",
    loginContainer: "px-[20px] h-screen pb-[69px]",
    buttonContainer: "w-full space-y-[16px]"
}