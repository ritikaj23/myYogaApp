// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './index'; 
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});