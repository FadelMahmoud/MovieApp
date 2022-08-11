/* eslint-disable prettier/prettier */
import React from 'react';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/Home/HomeScreen';
import FavouriteScreen from '../screens/Favourite/FavouriteScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const HomeTabNavigator = () => {

  // Manages Home Bottom Tab navigation
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
            component={FavouriteScreen}
        />

        <Tab.Screen
            name={'Profile'}
            component={ProfileScreen}
        />

    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
