// components/CityLink.tsx
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

type CityLinkProps = {
  url: string;
  text: string;
};

const CityLink: React.FC<CityLinkProps> = ({ url, text }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginVertical: 10,
    fontSize: 16,
  },
});

export default CityLink;
