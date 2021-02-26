import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Home';
import Chart from '../screens/Chart';
import Video from '../screens/Video';
import Search from '../screens/Search';
import UserKeep from '../screens/UserKeep';
import { View } from 'react-native';

const TabStack = createBottomTabNavigator();

function MainNavigator() {
  return (
    <TabStack.Navigator
      tabBarOptions={{
        activeTintColor: '#FD044F',
        inactiveTintColor: '#585858',
        style: {
          backgroundColor: '#1F1F1F',
        },
      }}
    >
      <TabStack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: '투데이',
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <Icon name='home' size={18} color={color} />
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
          tabBarIcon: ({ color }) => {
            return <Icon name='ios-musical-notes' size={18} color={color} />;
          },
        }}
      />
      <TabStack.Screen
        name='Video'
        component={Video}
        options={{
          tabBarLabel: '비디오',
          tabBarIcon: ({ color }) => {
            return <Icon name='ios-videocam' size={18} color={color} />;
          },
        }}
      />
      <TabStack.Screen
        name='Search'
        component={Search}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({ color }) => {
            return <Icon name='ios-search' size={18} color={color} />;
          },
        }}
      />
      <TabStack.Screen
        name='UserKeep'
        component={UserKeep}
        options={{
          tabBarLabel: '보관함',
          tabBarIcon: ({ color }) => {
            return <Icon name='ios-person' size={18} color={color} />;
          },
        }}
      />
    </TabStack.Navigator>
  );
}
export default MainNavigator;
