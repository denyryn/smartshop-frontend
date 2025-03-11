import { TouchableOpacity, View, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedButtonProps = {
    type: "primary" | "secondary";
    onPress?: () => void;
    className?: string;
    children?: React.ReactNode;
    lightColor?: string;
    darkColor?: string;
};

export function ThemedButton({ type, onPress, className, lightColor, darkColor, children, ...otherProps }: ThemedButtonProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

    return (
        <TouchableOpacity className={`${type === "primary" ? styles.primary : styles.secondary} ${className}`} onPress={onPress} {...otherProps}>
            {children}
        </TouchableOpacity>
    );
}

const additional = "h-[48px] w-full";

const styles = {
    primary: `btn btn-primary ${additional}`,
    secondary: `btn btn-outline btn-secondary ${additional}`
};
