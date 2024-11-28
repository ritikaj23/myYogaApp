import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bestMeditations, setBestMeditations] = useState([]);

  const meditationData = [
    {
      id: 1,
      title: "Mindful Breathing",
      shortDescription: "Focus on your breath to reduce stress.",
      description: "Mindful breathing is about calming the mind and reducing stress through awareness of breath.",
      duration: "10 minutes",
      image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=2070&auto=format&fit=crop",
      target: "calmness",
      instructions: [
        "Sit comfortably with your back straight.",
        "Close your eyes and focus on your breathing.",
        "Inhale deeply through your nose.",
        "Exhale gently through your mouth.",
        "Continue for 10 minutes."
      ]
    },
    {
      id: 2,
      title: "Body Scan Meditation",
      shortDescription: "Relax your muscles and relieve tension.",
      description: "Progressively bring your attention to different parts of the body to release tension.",
      duration: "15 minutes",
      image: "https://images.unsplash.com/photo-1573384666979-2b1e160d2d08?q=80&w=1878&auto=format&fit=crop",
      target: "relaxation",
      instructions: [
        "Lie down on a comfortable surface.",
        "Close your eyes and take deep breaths.",
        "Focus on your toes, tense and relax them.",
        "Move slowly upward, relaxing each muscle group.",
        "Finish by focusing on your head and neck."
      ]
    },
    {
      id: 3,
      title: "Loving-Kindness Meditation",
      shortDescription: "Send thoughts of love and kindness to yourself and others.",
      description: "Cultivate positive emotions by generating feelings of compassion and love.",
      duration: "20 minutes",
      image: "https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?q=80&w=2070&auto=format&fit=crop",
      target: "compassion",
      instructions: [
        "Sit comfortably and close your eyes.",
        "Focus on feelings of love and kindness toward yourself.",
        "Extend these feelings toward loved ones and acquaintances.",
        "Mentally repeat phrases like 'May you be happy.'",
        "Continue for 20 minutes."
      ]
    }
  ];

  const BestMeditations = [
    {
      id: 4,
      title: "Guided Visualization",
      description: "Visualize a peaceful scene to calm your mind.",
      duration: "12 minutes",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
      target: "mental clarity",
      instructions: [
        "Find a quiet place and sit comfortably.",
        "Close your eyes and visualize a peaceful scene.",
        "Engage your senses in the visualization.",
        "Focus on this image for 12 minutes.",
        "Slowly bring your attention back when finished."
      ]
    },
    {
      id: 5,
      title: "Mantra Meditation",
      description: "Repeat a calming word or phrase to quiet the mind.",
      duration: "10 minutes",
      image: "https://images.unsplash.com/photo-1547852355-26c780c450f9?q=80&w=2071&auto=format&fit=crop",
      target: "inner peace",
      instructions: [
        "Choose a mantra such as 'Om' or 'peace'.",
        "Sit comfortably with your eyes closed.",
        "Inhale deeply and repeat your mantra on the exhale.",
        "Focus on the sound of the mantra.",
        "Continue for 10 minutes."
      ]
    }
  ];

  const fetchData = () => {
    setIsLoading(true);
    try {
      // Simulate API delay
      setTimeout(() => {
        // Combine both arrays into one
        setData(meditationData);
        setBestMeditations(BestMeditations);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setError("Failed to fetch data");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  const getItemById = (id) => {
    const item =
      meditationData.find((meditation) => meditation.id === id) ||
      bestMeditations.find((meditation) => meditation.id === id);
    return item || null;
  };

  return { data, isLoading, error, refetch, getItemById, bestMeditations };
};

export default useFetch;
