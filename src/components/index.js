import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import Main from './Main'
import { Provider } from 'react-redux'
import { store } from '../store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        )
    }
}


export default App