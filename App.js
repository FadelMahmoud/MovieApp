/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {View} from 'react-native';
import HomeScreen from './src/screens/Home/HomeScreen';
import MoviePosterCard from './src/components/MoviePoster/MoviePosterCard';
import HomeTabNavigator from './src/navigations/HomeTabNavigator';
import Router from './src/navigations/Router';

const App: () => Node = () => {
  return (
    <>
      <Router />
    </>
  );
};

export default App;
