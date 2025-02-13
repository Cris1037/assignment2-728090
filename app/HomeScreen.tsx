// screens/HomeScreen.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalgaryScreen from './CalgaryScreen';
import EdmontonScreen from './EdmontonScreen';
import { View, Text, StyleSheet } from 'react-native';

type TabParamList = {
  Calgary: undefined;
  Edmonton: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to My New App</Text>
      <View style={styles.tabContainer}>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Calgary" component={CalgaryScreen} />
          <Tab.Screen name="Edmonton" component={EdmontonScreen}/>
        </Tab.Navigator>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: { flex: 1 },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 100,
  },
  tabContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 5,
    marginBottom: 5,
  },
});

export default HomeScreen;
