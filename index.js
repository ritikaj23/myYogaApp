import { registerRootComponent } from 'expo';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import DetailScreen from './screens/DetailScreen';
import MyYogaApp from './screens/MyYogaApp'; 
import SettingsScreen from './screens/SettingsScreen'; 
import PoseOfTheDay from './screens/PoseOfTheDay';

import NotificationsScreen from './screens/NotificationsScreen';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSettingsScreen from './screens/ThemeSettingsScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="MyYogaApp" component={MyYogaApp} />
        <Stack.Screen name="Settings" component={SettingsScreen} /> 
        <Stack.Screen name="PoseOfTheDay" component={PoseOfTheDay} />
        <Stack.Screen name="ThemeSettings" component={ThemeSettingsScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
};
registerRootComponent(Navigation);