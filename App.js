/* eslint-disable prettier/prettier */
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

import Router from './src/navigations/Router';

import {Provider} from 'react-redux';
import {Store} from './src/redux/store';

const App: () => Node = () => {

  return (

// Provider & Store are used to manage Async Local Storage of the device
    <Provider store={Store}>
      <Router />
    </Provider>
  );
};

export default App;
