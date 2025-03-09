import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import BottomNavbar from '@/components/BottomNavbar';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <BottomNavbar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }} />
  );
}
