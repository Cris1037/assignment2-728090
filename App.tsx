import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './components/signin';

const Stack = createStackNavigator();



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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});