import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigation';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';

SplashScreen.preventAutoHideAsync()
  .then((result) => console.log(result, 'Splash Screen Loading'))
  .catch(console.warn);

export default function App() {
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' />
      <MainNavigator />
    </NavigationContainer>
  );
}
