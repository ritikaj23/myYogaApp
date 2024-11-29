import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [username, setUsername] = useState('');

  // Load user data from AsyncStorage
  const loadUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        const { username } = JSON.parse(userData);
        setUsername(username);
      }
    } catch (error) {
      console.error('Failed to load user data', error);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

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
          <Image source={require('../assets/icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/splash-icon.png')} style={styles.icon} />
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
            <Image source={require('../assets/adaptive-icon.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/favicon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.greeting}>Hello, {username || 'Guest'}!</Text>
      <Text style={styles.subheading}>Yoga Guide</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      
      {/* Button to navigate to MyYogaApp */}
      <TouchableOpacity 
        style={styles.navigateButton} 
        onPress={() => navigation.navigate('MyYogaApp')}
      >
        <Text style={styles.navigateButtonText}>Go to My Yoga App</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('PoseOfTheDay')}>
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
  navigateButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  navigateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },
});

export default Home;
