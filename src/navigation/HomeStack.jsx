import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import HomeDetail from '../components/home/HomeDetail';
const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
          borderColor: '#000',
          shadowColor: 'transparent',
        },
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTintColor: '#fff',
        headerTitle: false,
      }}
    >
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='HomeDetail' component={HomeDetail} />
    </Stack.Navigator>
  );
}

export default HomeStack;
