/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeTabNavigator from './HomeTabNavigator';
import HomeScreen from '../screens/Home/HomeScreen';
import MovieListScreen from '../screens/MovieList/MovieListScreen';
import MovieDetailsScreen from '../screens/MovieDetails/MovieDetails';
import FavouriteScreen from '../screens/Favourite/FavouriteScreen';

const Stack = createStackNavigator();

const Router = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
            name={'HomeScreen'}
            component={HomeTabNavigator}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name={'MovieListScreen'}
            component={MovieListScreen}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name={'MovieDetailsScreen'}
            component={MovieDetailsScreen}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name={'FavouriteScreen'}
            component={FavouriteScreen}
            options={{
                headerShown: false,
            }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
