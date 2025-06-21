import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import Main from './home/Main';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {!signedIn ? (
        <Stack.Screen
          name="Login"
          // component={LoginScreen}
          options={{ headerShown: false }}
        >
          {props => (
            <LoginScreen
              {...props}
              setSignedIn={setSignedIn}
              signedIn={signedIn}
            />
          )}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="Home">
          {props => (
            <Main {...props} setSignedIn={setSignedIn} signedIn={signedIn} />
          )}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
}
