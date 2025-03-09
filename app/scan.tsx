import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';


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
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ThemedText type='h1' style={styles.title}>
                    This is Scan Page
                </ThemedText>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
    },
});
