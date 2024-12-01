import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a Context for the Theme
const ThemeContext = createContext();

// Custom hook to use the Theme context
export const useTheme = () => {
    return useContext(ThemeContext);
};

// Provider component
export const ThemeProvider = ({ children }) => {
    const [isGradient, setIsGradient] = useState(false);
    const [gradientColors, setGradientColors] = useState(['#ffffff', '#ffffff']);

    useEffect(() => {
        const loadThemePreference = async () => {
            const storedGradient = await AsyncStorage.getItem('isGradient');
            const storedColors = await AsyncStorage.getItem('gradientColors');
            setIsGradient(storedGradient === 'true');
            if (storedColors) {
                setGradientColors(JSON.parse(storedColors));
            }
        };
        loadThemePreference();
    }, []);

    const toggleGradientTheme = async () => {
        const newGradient = !isGradient;
        setIsGradient(newGradient);
        const newColors = newGradient ? getRandomColors() : ['#ffffff', '#ffffff'];
        setGradientColors(newColors);
        await AsyncStorage.setItem('isGradient', newGradient.toString());
        await AsyncStorage.setItem('gradientColors', JSON.stringify(newColors));
    };

    const getRandomColors = () => {
        return [
            `#${Math.floor(Math.random() * 16777215).toString(16)}`,
            `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        ];
    };

    return (
        <ThemeContext.Provider value={{ isGradient, gradientColors, toggleGradientTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
