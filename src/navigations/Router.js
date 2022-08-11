/* eslint-disable prettier/prettier */
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeTabNavigator from './HomeTabNavigator';
import MovieListScreen from '../screens/MovieList/MovieListScreen';
import MovieDetailsScreen from '../screens/MovieDetails/MovieDetails';
import FavouriteScreen from '../screens/Favourite/FavouriteScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Stack = createStackNavigator();

const Router = () => {

// Manages app's screens navigation
  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
      >

        <Stack.Screen
            name={'HomeScreen'}
            component={HomeTabNavigator}
        />

        <Stack.Screen
            name={'MovieListScreen'}
            component={MovieListScreen}
        />

        <Stack.Screen
            name={'MovieDetailsScreen'}
            component={MovieDetailsScreen}
        />

        <Stack.Screen
            name={'FavouriteScreen'}
            component={FavouriteScreen}
        />

        <Stack.Screen
            name={'ProfileScreen'}
            component={ProfileScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
