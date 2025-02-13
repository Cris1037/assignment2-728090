// screens/EdmontonScreen.tsx
import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import CityLink from '../components/CityLink';
import CityInfo from '../components/CityInfo';

const EdmontonScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
    //   source: 'https://www.edmontondowntown.com/wp-content/uploads/Downtown-Pics-2-1600x1066.jpg'
        source={require('../assets/cities/edmonton.jpg') } 
        style={styles.image} 
      />
      <CityLink url="https://www.edmonton.ca/" text="Go to Edmonton page" />
      <CityInfo 
        title="Edmonton" 
        info="Edmonton is the capital city of Alberta, known for its festivals, rich history, and thriving arts scene." 
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

export default EdmontonScreen;
