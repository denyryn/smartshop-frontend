import * as Iconsax from 'iconsax-react-native';
import { useThemeColor } from '@/hooks/useThemeColor';


export type ThemedIconProps = {
    name: keyof typeof Iconsax;
    size?: number;
    variant?: 'Linear' | 'Outline' | 'TwoTone' | 'Bulk' | 'Broken' | 'Bold';
    style?: any;
    onPress?: () => void;
    lightColor?: string;
    darkColor?: string;
};

export function ThemedIcon({ name,
    size,
    variant = 'Linear',
    style,
    onPress,
    darkColor,
    lightColor,
    ...rest }: ThemedIconProps) {
    const IconComponent = Iconsax[name];
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    if (!IconComponent) {
        console.error(`Icon "${name}" not found in Iconsax`);
        return (
            <Iconsax.ArrowDown3
                size={size}
                color={color}
                variant={variant}
                style={style}
                onPress={onPress}
                {...rest}
            />
        );
    }

    return (
        <IconComponent
            color={color}
            size={size}
            variant={variant}
            style={style}
            onPress={onPress}
            {...rest}
        />
    );
}