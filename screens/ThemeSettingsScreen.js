import React from 'react';
import { View, Text, Button, StyleSheet, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../context/ThemeContext';

const ThemeSettingsScreen = ({ navigation }) => {
    const { isGradient, gradientColors, toggleGradientTheme } = useTheme(); 

    return (
        <LinearGradient colors={isGradient ? gradientColors : ['#ffffff', '#ffffff']} style={styles.container}>
            
            <View style={styles.switchContainer}>
                <Text style={styles.label}>Gradient Theme</Text>
                <Switch
                    value={isGradient}
                    onValueChange={toggleGradientTheme}
                />
            </View>
            <Button title="Log Out" onPress={() => { navigation.navigate('Login'); }} />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginVertical: 10,
        color: '#000', 
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default ThemeSettingsScreen;
