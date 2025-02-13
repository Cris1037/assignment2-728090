import React from 'react';
import { TouchableOpacity, Text, Linking, StyleSheet } from 'react-native';

type CityLinkProps = {
  url: string;
};

const CityLink: React.FC<CityLinkProps> = ({ url }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>Go to City Page</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: "75%",
    height: "10%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    margin: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontFamily: 'Times New Roman',
    fontStyle: 'italic',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default CityLink;