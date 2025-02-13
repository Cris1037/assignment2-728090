// screens/SignInScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import credentials from '../credentials.json';

type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignInScreen: React.FC<SignInProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const validateInputs = (): boolean => {
    if (username.length < 5) {
      setErrorMsg('Username must be at least 5 characters long.');
      return false;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMsg(
        'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.'
      );
      return false;
    }
    return true;
  };

  const handleSignIn = () => {
    setErrorMsg('');
    if (!validateInputs()) return;

    // Find the user in the JSON file
    const user = credentials.users.find((cred: any) => cred.username === username);    if (!user) {
      setErrorMsg('Username not found.');
      return;
    }
    if (user.password !== password) {
      setErrorMsg('Incorrect password.');
      return;
    }

    // On successful sign in, navigate to Home screen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      {errorMsg !== '' && <Text style={styles.error}>{errorMsg}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default SignInScreen;
