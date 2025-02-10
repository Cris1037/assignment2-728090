// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, TextInput, View } from 'react-native';
// import Signin from './components/signin';



// export default function App() {
//   return (
//     <View>
//       <Signin booleanToggle={(isLoggedIn: boolean) => {}} username="defaultUsername" setUsername={() => {}} />
//       <Text>Welcome! Login to access your account.</Text>
//       <TextInput placeholder="Username" value="defaultUsername" onChangeText={() => {}} />
//       <StatusBar style="auto" />
//       <TextInput placeholder="Password" value="" onChangeText={() => {}} />

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './components/signin';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function SigninScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Signin booleanToggle={(isLoggedIn: boolean) => {}} username="defaultUsername" setUsername={() => {}} />
      <Text>Welcome! Login to access your account.</Text>
      <TextInput placeholder="Username" value="defaultUsername" onChangeText={() => {}} />
      <TextInput placeholder="Password" value="" onChangeText={() => {}} />
      <Text onPress={() => navigation.navigate('Home')}>Login</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});