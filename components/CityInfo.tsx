// components/CityInfo.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type CityInfoProps = {
  title: string;
  info: string;
};

const CityInfo: React.FC<CityInfoProps> = ({ title, info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} Info</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#e0f7fa',
    borderRadius: 5,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default CityInfo;
