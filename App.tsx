import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/routes/AppNavigator';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './src/redux/reducers';
import { ThemeProvider } from 'styled-components/native';

const store = createStore(rootReducer);

const lightTheme = {
  background: '#f4f6fb',
  card: '#fff',
  text: '#222',
  subtext: '#666',
  accent: '#3498db',
  border: '#eee',
  button: '#e74c3c',
  buttonText: '#fff',
};

const darkTheme = {
  background: '#2c3e50',
  card: '#232946',
  text: '#fff',
  subtext: '#b0b0b0',
  accent: '#34495e',
  border: '#232946',
  button: '#e74c3c',
  buttonText: '#fff',
};

function ThemedApp() {
  const mode = useSelector((state: any) => state.theme.mode);
  const theme = mode === 'dark' ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  );
}
