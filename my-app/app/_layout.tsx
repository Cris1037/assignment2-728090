import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import SignIn from './sign_in';
import { Tabs } from 'expo-router';

export default function RootLayout() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  if (!isSignedIn) {
    return (
      <View style={styles.container}>
        <SignIn setIsSignedIn={setIsSignedIn} />
      </View>
    );
  }

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: 'transparent', 
        position: 'absolute', 
        borderTopWidth: 0, 
        elevation: 0, 
        shadowOpacity: 0, 
      }
    }}>
      <Tabs.Screen
        name="tabs"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="sign_in"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="welcome"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="calgary"
        options={{
          title: 'Calgary',
          tabBarLabel: 'Calgary'
        }}
      />
      <Tabs.Screen
        name="edmonton"
        options={{
          title: 'Edmonton',
          tabBarLabel: 'Edmonton'
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});