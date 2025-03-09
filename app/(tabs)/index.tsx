import { Image, StyleSheet, Platform } from 'react-native';

import { useState } from 'react';
import { View } from 'react-native';
import CustomTextInput from '@/components/CustomTextInput';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Text, Button } from 'react-native';

export default function HomeScreen() {

  return (
    <ThemedView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ThemedText type='h1' style={styles.title}>
        This is Home Page
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
  },
});
