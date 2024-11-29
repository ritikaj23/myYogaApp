// UserProfile.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserProfile = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to load user data from AsyncStorage
    const loadUserData = async () => {
        try {
            const userData = await AsyncStorage.getItem('userData');
            if (userData) {
                const { username, email, password } = JSON.parse(userData);
                setUsername(username);
                setEmail(email);
                setPassword(password); // Password should be handled carefully
            }
        } catch (error) {
            console.error('Failed to load user data', error);
        }
    };

    // Function to save user data to AsyncStorage
    const saveUserData = async () => {
        try {
            const userData = { username, email, password }; // Store updated data
            await AsyncStorage.setItem('userData', JSON.stringify(userData));
            alert('User data saved!');
        } catch (error) {
            console.error('Failed to save user data', error);
        }
    };

    useEffect(() => {
        loadUserData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Profile</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Button title="Save" onPress={saveUserData} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingLeft: 10,
    },
});

export default UserProfile;
