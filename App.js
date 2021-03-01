import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import theme from './src/styles/Theme';
import MainNavigator from './src/navigation/MainNavigation';
import * as SplashScreen from 'expo-splash-screen';
import rootReducer from './src/store';
import thunk from 'redux-thunk';

SplashScreen.preventAutoHideAsync()
  .then((result) => console.log(result, 'Splash Screen Loading'))
  .catch(console.warn);

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar barStyle='light-content' />
          <MainNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
