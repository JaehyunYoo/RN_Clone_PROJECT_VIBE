import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Home';

import Video from '../screens/Video';
import Search from '../screens/Search';
import HomeDetail from '../components/home/HomeDetail';
import UserKeep from '../screens/UserKeep';
import { View } from 'react-native';
import MiniPlayer from '../components/player/MiniPlayer';

const TabStack = createBottomTabNavigator();
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
        headerTransparent:true,
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

function MainNavigator() {
  return (
    <>
      <TabStack.Navigator
        tabBarOptions={{
          activeTintColor: '#FD044F',
          inactiveTintColor: '#585858',
          tabBarPosition: 'bottom',
          tabStyle: {
            marginTop: 5,
            width: '100%',
            height: 60,
            backgroundColor: '#1F1F1F',
          },
          style: {
            height: 80,
            borderTopColor: '#1F1F1F',
            borderBottomColor: '#1F1F1F',
            backgroundColor: '#1F1F1F',
          },
        }}
      >
        <TabStack.Screen
          name='Home'
          component={HomeStack}
          options={{
            tabBarLabel: '투데이',
            tabBarIcon: ({ color, size }) => {
              return (
                <View>
                  <Icon name='home' size={size} color={color} />
                </View>
              );
            },
          }}
        />
        <TabStack.Screen
          name='Video'
          component={Video}
          options={{
            tabBarLabel: '비디오',
            tabBarIcon: ({ color, size }) => {
              return <Icon name='ios-videocam' size={size} color={color} />;
            },
          }}
        />
        <TabStack.Screen
          name='Search'
          component={Search}
          options={{
            tabBarLabel: '검색',
            tabBarIcon: ({ color, size }) => {
              return <Icon name='ios-search' size={size} color={color} />;
            },
          }}
        />
        <TabStack.Screen
          name='UserKeep'
          component={UserKeep}
          options={{
            tabBarLabel: '보관함',
            tabBarIcon: ({ color, size }) => {
              return <Icon name='ios-person' size={size} color={color} />;
            },
          }}
        />
      </TabStack.Navigator>
      <MiniPlayer />
    </>
  );
}
export default MainNavigator;
