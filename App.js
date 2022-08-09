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
// import { Provider } from 'react-redux/es/exports';
// import { Store } from 'redux';

import { Provider } from 'react-redux';
import { Store } from './src/redux/store';

const App: () => Node = () => {
  return (
    <Provider store={Store} >
      <Router />
    </Provider>
  );
};

export default App;
