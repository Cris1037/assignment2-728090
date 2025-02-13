import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import credentials from '../credentials.json';

type SignInProps = {
  setIsSignedIn: (isSignedIn: boolean) => void;
};

const SignIn: React.FC<SignInProps> = ({ setIsSignedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateCredentials = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (username.length < 5) {
      Alert.alert('Error', 'Username must be at least 5 characters long.');
      return;
    }

    if (!passwordRegex.test(password)) {
      Alert.alert(
        'Error',
        'Password must be at least 8 characters, include uppercase, lowercase, number, and special character.'
      );
      return;
    }

    const user = credentials.users.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      Alert.alert('Error', 'Invalid Username or Password');
    } else {
      setIsSignedIn(true);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/dune.jpg')} 
      style={styles.backgroundImage}
      resizeMode="cover" 
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput
          placeholder="Username"
          style={styles.input}
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={validateCredentials}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(105, 105, 105, 0.6)',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: 'rgba(237, 231, 225, 1)',
    fontWeight: 'bold',
    fontFamily:'Times new roman',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: 'rgba(25, 114, 146, 1);', 
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignIn;