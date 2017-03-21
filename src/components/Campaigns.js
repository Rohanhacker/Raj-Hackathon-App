import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import Card from './Card'

class Campaign extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Card />
        )
    }
}

const styles = StyleSheet.create({
    login: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100,
    },
    text: {
        color: 'white',
        fontSize: 50,
        marginBottom: 100
    },
    body: {
        flex: 1
    },
    linearGradient: {
        flex: 1
    },
    input: {
        marginTop: 20,
        width: 300,
        fontSize: 20,
        color: 'white'
    },
    btn: {
        justifyContent: 'center',
        marginTop: 50,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10
    },
    loginBtn: {
        color: 'white',
        fontSize: 25
    }
});

export default Campaign
