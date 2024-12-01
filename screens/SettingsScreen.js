import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../context/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';

const SettingsScreen = ({ navigation }) => {
    const { isGradient, gradientColors } = useTheme();
  const handleLogout = async () => {
    try {
      // Corrected the key by removing the extra quote
      await AsyncStorage.removeItem('userData'); 
      
      // Navigate to the Login screen
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  };

  return (
    <LinearGradient colors={isGradient ? gradientColors : ['#ffffff', '#ffffff']} style={styles.container}>
     <ScrollView>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ThemeSettings')}>
        <Image source={require('../assets/settings.png')} style={styles.icon} />
        <Text style={styles.menuText}>Theme Settings</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notifications')}>
        <Image source={require('../assets/settings.png')} style={styles.icon} />
        <Text style={styles.menuText}>Notifications</Text>
      </TouchableOpacity>  
      
      <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
        <Image source={require('../assets/settings.png')} style={styles.icon} />
        <Text style={styles.menuText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 24,
    alignItems: 'center',
    backgroundColor: '#007aff',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuText: {
    marginLeft: 16,
    fontSize: 18,
  },
  icon: {
    width: 50, 
    height: 50, 
    resizeMode: 'contain', 
  },
});

export default SettingsScreen;
