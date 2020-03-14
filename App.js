/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store/store';
import ReduxApp from './src/redux-app';

const App = () => {
  return (
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  );
};

export default App;
