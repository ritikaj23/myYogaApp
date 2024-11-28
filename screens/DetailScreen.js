import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params; // Retrieve the item passed from the previous screen

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.duration}>Duration: {item.duration}</Text>
      <View style={styles.imageContainer}>
        {/* Use the image directly as a source */}
        <Image source={item.image} style={styles.image} />
      </View>
      <Button title="Back to List" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, marginBottom: 20 },
  duration: { fontSize: 14, color: 'gray', marginBottom: 10 },
  imageContainer: { alignItems: 'center', marginBottom: 20 },
  image: { width: '100%', height: 200, borderRadius: 10 },
});

export default DetailScreen;
