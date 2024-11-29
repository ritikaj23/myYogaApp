import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import UserProfile from '../components/UserProfile'; 

const MyYogaApp = () => {
    return (
        <SafeAreaView style={styles.container}>
            <UserProfile />
        </SafeAreaView>
    );
};

// Styles for the main app
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
});

export default MyYogaApp;