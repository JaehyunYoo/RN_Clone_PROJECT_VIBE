import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Home';
import Chart from '../screens/Chart';
import Video from '../screens/Video';
import Search from '../screens/Search';
import UserKeep from '../screens/UserKeep';
import { View } from 'react-native';
import MiniPlayer from '../components/player/MiniPlayer';

const TabStack = createBottomTabNavigator();

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
            borderTopColor: '#000',
            backgroundColor: '#1F1F1F',
          },
          style: {
            height: 80,
            borderTopColor: '#000',
            backgroundColor: '#1F1F1F',
          },
        }}
      >
        <TabStack.Screen
          name='Home'
          component={HomeScreen}
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
          name='Chart'
          component={Chart}
          options={{
            tabBarLabel: '차트',
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon name='ios-musical-notes' size={size} color={color} />
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
