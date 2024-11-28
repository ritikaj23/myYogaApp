// App.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import Navigation from './index'; // Assuming you have navigation set up in index.js

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation />
    </SafeAreaView>
  );
}
