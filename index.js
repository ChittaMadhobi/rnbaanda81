/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';

import configureStore from './src/store/configureStore';

// We execute the function confiureStore. It returns the value of store.
const store = configureStore();

// We now pass that store to the Provider store 
const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

// This would use RNRedux now (instead of App). It expects RNRedux
// to be a function. registerComponent expects a function and hence RNRedux is a function.
AppRegistry.registerComponent(appName, () => RNRedux);

