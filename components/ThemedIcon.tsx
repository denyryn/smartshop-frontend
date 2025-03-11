import * as Iconsax from 'iconsax-react-native';
import { useThemeColor } from '@/hooks/useThemeColor';


export type ThemedIconProps = {
    name: keyof typeof Iconsax;
    size?: number;
    style?: any;
    onPress?: () => void;
    lightColor?: string;
    darkColor?: string;
};

export function ThemedIcon({ name, size, style, onPress, darkColor, lightColor }: ThemedIconProps) {
    const IconComponent = Iconsax[name];
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');


    if (!IconComponent) {
        console.error(`Icon "${name}" not found in Iconsax`);
        return (
            <Iconsax.ArrowDown3
                size={size}
                color={color}
                style={style}
                onPress={onPress}
            />
        );
    }

    return (
        <IconComponent
            color={color}
            size={size}
            style={style}
            onPress={onPress}
        />
    );
}