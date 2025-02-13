import { View, Text, StyleSheet } from 'react-native';
import CityScreen from '../components/cityScreen';

const EdmontonScreen = () => (
  <CityScreen
    imageSource={require('../assets/edmonton.jpg')}
    cityUrl="https://www.edmonton.ca/"
    cityName="Edmonton"
    description="Edmonton is the fifth largest city in Canada, famous for its festivals. With this, also has one of the largest malls in Canada by square footage. It is home to the NHL team the Edmonton Oilers."
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default EdmontonScreen;