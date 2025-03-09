import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform, TouchableHighlight } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import * as Iconsax from 'iconsax-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Routes } from '@/constants/Routes';
import { ColorVariables } from '@/constants/ColorVariables';
import { router, useRouter } from 'expo-router';

const BottomNavbar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.tabContainer, { paddingBottom: insets.bottom }]}>
            {/* Tabs */}
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const focusedColor = isFocused ? '#000' : '#888';

                const getIcon = (name: string) => {
                    const iconMap: Record<string, JSX.Element> = {
                        [Routes.home['url']]: <Iconsax.Home size={24} color={focusedColor} />,
                        [Routes.explore['url']]: <Iconsax.Box1 size={24} color={focusedColor} />,
                        [Routes.profile['url']]: <Iconsax.ProfileCircle size={24} color={focusedColor} />,
                    };
                    return iconMap[name] || <Iconsax.ArrowDown3 size={24} color={focusedColor} />;
                };

                const getLabel = (name: string) => {
                    const labelMap: Record<string, string> = {
                        [Routes.home['url']]: 'Home',
                        [Routes.explore['url']]: 'Explore',
                        [Routes.profile['url']]: 'Profile',
                    };
                    return labelMap[name] || '';
                };

                const onPress = () => {
                    navigation.navigate(route.name);
                };

                return (
                    <TouchableOpacity key={route.key} onPress={onPress} style={styles.tabButton}>
                        {getIcon(route.name)}
                        <Text style={[styles.tabLabel, { color: focusedColor }]}>{getLabel(route.name)}</Text>
                    </TouchableOpacity>
                );
            })}

            {/* Floating Button */}
            <TouchableHighlight style={styles.floatingButton} onPress={() => router.push('/scan')}>
                <Iconsax.I3DCubeScan size={28} color={ColorVariables.white['default']} />
            </TouchableHighlight>
        </View>
    );
};

export default BottomNavbar;

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#fff',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingEnd: 110,
        elevation: 10,
    },
    tabButton: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    tabLabel: {
        fontSize: 12,
        marginTop: 4,
    },
    floatingButton: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: "#1c1c1e",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: -32,
        right: "10%",
        alignSelf: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
    },
});