/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/HomeScreen';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
            return <Fontisto name={iconName} size={size} color={color} />
          } else if (route.name === 'Favorites') {
            iconName = 'heart-o';
            return <FontAwesome name={iconName} size={size} color={color} />
          } else if (route.name === 'Profile') {
            iconName = 'user-alt';
            return <FontAwesome5 name={iconName} size={size} color={color} />
          }

        },
        tabBarActiveTintColor: '#E82351',
        tabBarInactiveTintColor: '#68707C',
        headerShown: false,
      })}  
    >

        <Tab.Screen
            name={'Home'}
            component={HomeScreen}
        />

        <Tab.Screen
            name={'Favorites'}
            component={HomeScreen}
        />

        <Tab.Screen
            name={'Profile'}
            component={HomeScreen}
        />

    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
