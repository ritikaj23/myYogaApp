import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ActivityIndicator, Image, ScrollView } from 'react-native';

const PoseOfTheDay = () => {
  const [pose, setPose] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch yoga pose data from the API
  const fetchPoseOfTheDay = async () => {
    try {
      const response = await fetch('https://yoga-api-nzy4.onrender.com/v1/poses'); 
      if (response.ok) {
        const data = await response.json();
        // Randomly select a pose from the fetched data
        const randomIndex = Math.floor(Math.random() * data.length);
        setPose(data[randomIndex]);
      } else {
        throw new Error('Failed to fetch yoga pose');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPoseOfTheDay();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {pose && (
        <>
          <Text style={styles.title}>{pose.english_name}</Text>
          <Image source={{ uri: pose.url_png }} style={styles.image} resizeMode="contain" />
          <Text style={styles.description}>{pose.pose_description}</Text>
          <Text style={styles.benefits}>{pose.pose_benefits}</Text>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%', 
    height: undefined, 
    aspectRatio: 1, 
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 10,
  },
  benefits: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default PoseOfTheDay;
