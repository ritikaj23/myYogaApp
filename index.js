import { registerRootComponent } from 'expo';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import DetailScreen from './screens/DetailScreen';
import MyYogaApp from './screens/MyYogaApp';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="MyYogaApp" component={MyYogaApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

registerRootComponent(Navigation);
