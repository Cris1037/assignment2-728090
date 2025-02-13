import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import CityLink from './cityLink';

type CityScreenProps = {
  imageSource: any;
  cityUrl: string;
  cityName: string;
  description: string;
};

const CityScreen: React.FC<CityScreenProps> = ({
  imageSource,
  cityUrl,
  cityName,
  description,
}) => {
  return (
    <ImageBackground
      source={imageSource}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.cityName}>{cityName}</Text>
        <Text style={styles.description}>{description}</Text>
        <CityLink url={cityUrl} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    padding: 20,
  },
  cityName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default CityScreen;