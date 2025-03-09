import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { ColorVariables } from '@/constants/ColorVariables';
import { ThemedText } from './ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

interface CustomTextInputProps {
    label?: string;
    placeholder?: string;
    value: string;
    setValue: (text: string) => void;
    isRequired?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    validate?: (text: string) => boolean;
    secureTextEntry?: boolean;
    lightColor?: string;
    darkColor?: string;
}

export default function CustomTextInput({
    label,
    placeholder,
    value,
    setValue,
    isRequired = false,
    keyboardType = 'default',
    validate,
    secureTextEntry,
    lightColor,
    darkColor
}: CustomTextInputProps) {
    const [error, setError] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    const handleChange = (text: string) => {
        setValue(text);
        if (isRequired && validate) {
            setError(validate(text) ? '' : `${label} is not valid!`);
        }
    };

    // Determine which style to apply based on state
    const getInputStyle = () => {
        if (error) return styles.inputError;
        if (isFocused) return styles.inputFocused;
        return styles.inputDefault;
    };

    return (
        <View style={styles.container}>
            {label && <ThemedText>{label}</ThemedText>}
            <TextInput
                style={[styles.input, getInputStyle()]}
                onFocus={() => {
                    setError('');
                    setIsFocused(true);
                }}
                onBlur={() => setIsFocused(false)}
                placeholder={placeholder}
                value={value}
                onChangeText={handleChange}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                className='input input-primary'
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 12,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    input: {
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        borderRadius: 12,
        borderWidth: 1,
    },
    inputDefault: {
        borderColor: ColorVariables.gray[200],
    },
    inputError: {
        borderColor: '#EF4444',
    },
    inputFocused: {
        borderColor: ColorVariables.info[500],
    },
    errorText: {
        color: '#EF4444',
        marginTop: 4,
        fontSize: 14,
    },
});
