import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Switch, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NotificationsScreen = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    useEffect(() => {
        const loadSettings = async () => {
            const storedValue = await AsyncStorage.getItem('notificationsEnabled');
            setNotificationsEnabled(storedValue === 'true');
        };
        loadSettings();
    }, []);

    const requestPermissions = async () => {
        const { status } = await Notifications.getPermissionsAsync();
        if (status !== 'granted') {
            const permissionResponse = await Notifications.requestPermissionsAsync();
            return permissionResponse.status === 'granted';
        }
        return true;
    };

    const scheduleNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Yoga Reminder",
                body: "It's time for your yoga session!",
            },
            trigger: { seconds: 10 }, // Change this to a more appropriate value based on user preferences
        });
    };

    const handleToggleSwitch = async () => {
        const granted = await requestPermissions();
        if (granted) {
            setNotificationsEnabled((prev) => {
                const newValue = !prev;
                AsyncStorage.setItem('notificationsEnabled', newValue.toString());
                return newValue;
            });
            if (!notificationsEnabled) {
                scheduleNotification();
                Alert.alert("Notifications Enabled", "You will receive reminders for yoga sessions.");
                if (typeof Notification !== 'undefined' && Notification.permission === "granted") {
                    new Notification("Yoga Reminder", { body: "You will receive reminders for yoga sessions." });
                }
            } else {
                Alert.alert("Notifications Disabled", "You will no longer receive reminders.");
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notifications Settings</Text>
            <View style={styles.switchContainer}>
                <Text>Enable Notifications</Text>
                <Switch
                    value={notificationsEnabled}
                    onValueChange={handleToggleSwitch}
                />
            </View>
            <Button
                title="Test Notification"
                onPress={scheduleNotification}
                disabled={!notificationsEnabled}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
});

export default NotificationsScreen;
