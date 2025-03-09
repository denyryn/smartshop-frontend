import { Text, type TextProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Typography } from '@/constants/Typography';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: keyof typeof Typography;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'bodyMd',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const textStyle = Typography[type] || Typography.bodyMd;

  return (
    <Text style={[{ color }, textStyle, style]} {...rest} />
  );
}
