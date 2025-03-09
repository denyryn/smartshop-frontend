import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function ScanScreen() {
    return (
        <>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                    headerShown: true,
                    headerTitle: 'Scan Item',
                }}
            />
            <ThemedView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ThemedText type='h1' style={styles.title}>
                    This is Scan Page
                </ThemedText>
            </ThemedView>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
    },
});
