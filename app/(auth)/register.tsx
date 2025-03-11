import { StyleSheet, Image, Platform, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import * as Iconsax from 'iconsax-react-native';

export default function LoginScreen() {
    const router = useRouter();

    return (
        <ThemedView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ThemedText type='h1' style={styles.title}>
                This is Register
            </ThemedText>
            <Iconsax.Airplane size={24} color={'#000'} />
            <Button title="Go to login Page" onPress={() => router.push('/(auth)/login')} />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
    },
});