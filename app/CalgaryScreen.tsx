// screens/CalgaryScreen.tsx
import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import CityLink from '../components/CityLink';
import CityInfo from '../components/CityInfo';

const CalgaryScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={require('../assets/cities/calgary.jpg')}
        style={styles.image} 
      />
      <CityLink url="https://www.calgary.ca/home.html" text="Go to Calgary page" />
      <CityInfo 
        title="Calgary" 
        info="Calgary is a vibrant city known for its annual Calgary Stampede, beautiful landscapes, and modern architecture." 
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    alignItems: 'center', 
    padding: 20 
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});

export default CalgaryScreen;
