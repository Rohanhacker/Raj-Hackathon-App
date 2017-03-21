import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';

export default class Accounts extends Component {
  state = {
    modalVisible: false,
    email: '',
    name: '',
    password: '',
    behavior: 'padding'
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
    handleEmailChange = (e) => {
        this.setState({
            email: e
        })
    }
    handlePasswordChange = (e) => {
        this.setState({
            password: e
        })
    }
    handleNameChange = (e) => {
        this.setState({
            name: e
        })
    }
    _onPress = (e) => {
                fetch('https://cryptic-lowlands-56194.herokuapp.com/api/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        }).then((response) => response.json())
          .then((responseJson) => {
              if(responseJson.success) {
                  this.setModalVisible(!this.state.modalVisible)
              } else {
                  console.warn(responseJson)
              }
        })
      .catch((error) => {
            console.error(error);
        });
    }
  render() {
    return (
      <View style={{marginTop: 22}}>
        <KeyboardAvoidingView behavior={this.state.behavior} style={styles.container}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          backdrop={false}
          >
          <View style={styles.main}>
            <TextInput underlineColorAndroid={'black'} onChangeText={this.handleNameChange} placeholderTextColor={'black'} placeholder="Name" style={styles.input} value={this.state.name} />
            <TextInput underlineColorAndroid={'black'} onChangeText={this.handleEmailChange} placeholderTextColor={'black'} placeholder="Email" style={styles.input} value={this.state.email} />
            <TextInput underlineColorAndroid={'black'} placeholderTextColor={'black'} onChangeText={this.handlePasswordChange} placeholder="Password" style={styles.input} secureTextEntry={true} value={this.state.password} />
            <View style={styles.btngrp}>
                <TouchableHighlight style={styles.btn} onPress={this._onPress}>
                <Text>SignUp</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.btn} onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
                }}>
                <Text>Close</Text>
                </TouchableHighlight>
            </View>
          </View>
        </Modal>
    </KeyboardAvoidingView>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text style={styles.text}>Show Modal</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center'
    },
    input: {
        marginTop: 20,
        width: 300,
        fontSize: 20,
    },
    btn: {
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: 'springgreen',
        padding: 10,
        width: 120
        },
    loginBtn: {
        fontSize: 25
    }
});