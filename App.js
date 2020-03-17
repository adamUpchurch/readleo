/**
 * @format
 */

import React, {Component} from 'react';
import {AppRegistry, AppState} from 'react-native';
import App from './Navigator';
import * as SecureStore from 'expo-secure-store';

import Books from './helper/reducers/BookList.json'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {name as appName} from './app.json';

import { PersistGate } from 'redux-persist/integration/react'

import {persistor, store} from './configureStore'

export default class Leo extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {

            return (
                <Provider store={store}>
                  <PersistGate loading={null} persistor={persistor}>
                    <App />
                  </PersistGate>
                </Provider>
            );
        // }
    }   
}

AppRegistry.registerComponent(appName, () => Leo);
