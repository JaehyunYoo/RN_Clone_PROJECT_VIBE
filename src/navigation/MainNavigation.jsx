import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from '../screens/Video';
import Search from '../screens/Search';
import UserKeep from '../screens/UserKeep';
import { View } from 'react-native';
import HomeStack from './HomeStack';
import MiniPlayer from '../components/player/MiniPlayer';

const TabStack = createBottomTabNavigator();

function MainNavigator({ route }) {
  return (
    <TabStack.Navigator
      tabBar={(tabsProps) => (
        <>
          <MiniPlayer />
          <BottomTabBar {...tabsProps} />
        </>
      )}
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
  );
}
export default MainNavigator;
