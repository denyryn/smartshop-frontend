import { Stack } from "expo-router";

export default function OnboardLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="onboard" options={{ title: "Onboard" }} />
        </Stack>
    );
}
