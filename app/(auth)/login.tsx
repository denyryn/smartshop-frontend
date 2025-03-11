import { StyleSheet, Image, Platform, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedIcon } from '@/components/ThemedIcon';
import { ThemedButton } from '@/components/ThemedButton';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function LoginScreen() {
    const router = useRouter();

    return (
        <ThemedView className={`${styles.loginContainer}`} style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ThemedText type='bodyMd'>
                This is Login
            </ThemedText>

            <View className={`${styles.buttonContainer}`}>
                <ThemedButton className='font-medium' type='primary' onPress={() => { router.push('/(auth)/register') }}>
                    Explore
                </ThemedButton>
                <ThemedButton className='font-medium' type='secondary' onPress={() => { router.push('/(auth)/register') }}>
                    Login
                </ThemedButton>
            </View>
        </ThemedView>
    );
}

const styles = {
    loginContainer: "px-[20px]",
    buttonContainer: "w-full space-y-[16px]"
}