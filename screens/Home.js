import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

const DATA = [
  {
    id: '1',
    title: 'Mindful Breathing',
    subtitle: 'Find Inner Calm',
    duration: '10 minutes',
    description: 'A simple meditation practice focused on your breath to help calm the mind and reduce stress.',
    image: require('../assets/mindful_breathing.png'),
  },
  {
    id: '2',
    title: 'Guided Meditation',
    subtitle: 'Embrace Relaxation',
    duration: '15 minutes',
    description: 'A guided session to help you relax and embrace the moment.',
    image: require('../assets/guided_meditation.png'),
  },
  {
    id: '3',
    title: 'Yoga for Beginners',
    subtitle: 'Start Your Journey',
    duration: '30 minutes',
    description: 'An introductory yoga session perfect for beginners.',
    image: require('../assets/yoga_for_beginners.png'),
  },
];

const Home = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Detail', { item })} 
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
        <Text style={styles.cardDuration}>{item.duration}</Text>
      </View>
      <View style={styles.cardActions}>
        <TouchableOpacity>
          <Ionicons name="checkmark-circle" size={24} color="green" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="create-outline" size={24} color="blue" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transform Your Life</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="settings" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.greeting}>Hello, Ritz!</Text>
      <Text style={styles.subheading}>Yoga Guide</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0', // Light background color
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Darker text color for better contrast
  },
  headerIcons: {
    flexDirection: 'row',
  },
  greeting: {
    fontSize: 18,
    marginVertical: 10,
    color: '#666',
  },
  subheading: {
    fontSize: 16,
    color: '#666',
  },
  list: {
    paddingBottom: 80, // Prevent overlap with FAB
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3, // Slightly increased shadow for depth
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
  },
  cardDuration: {
    fontSize: 12,
    color: '#888',
  },
  cardActions: {
    flexDirection: 'row',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#4CAF50',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  fabText: {
    color: '#fff',
    fontSize: 28,
    lineHeight: 28,
  },
});

export default Home;
