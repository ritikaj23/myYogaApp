import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View, ActivityIndicator, Image } from 'react-native';

const PoseOfTheDay = () => {
  const [pose, setPose] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch yoga pose data from the API
  const fetchPoseOfTheDay = async () => {
    try {
      const response = await fetch('https://yoga-api-nzy4.onrender.com/v1/poses'); // Your API endpoint
      if (response.ok) {
        const data = await response.json();
        // Assuming the API returns an array of poses and we want the first one as the pose of the day
        setPose(data[0]); // You can enhance this to randomly select a pose or select based on the date
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
    <View style={styles.container}>
      {pose && (
        <>
          <Text style={styles.title}>{pose.english_name}</Text>
          <Image source={{ uri: pose.url_png }} style={styles.image} />
          <Text style={styles.description}>{pose.pose_description}</Text>
          <Text style={styles.benefits}>{pose.pose_benefits}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 250,
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
