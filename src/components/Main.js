import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'
import Accounts from './Modal'
import { connect } from 'react-redux'
import { createAction } from 'redux-actions'
import Tabs from './Tab'
import LinearGradient from 'react-native-linear-gradient'

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapActionsToProps = (dispatch) => ({
  loginUser() {
    return dispatch(createAction('LOGIN')());
  },
  logoutUser() {
      return dispatch(createAction('LOGOUT')());
  }
});

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('@MySuperStore:key', (err,r) => {
            console.log(r)
            if (r) {
                this.props.loginUser()
            }
        }
        )
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
    _onPress = (e) => {
        fetch('https://cryptic-lowlands-56194.herokuapp.com/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        }).then((response) => response.json())
          .then(async (responseJson) => {
                try {
                    await AsyncStorage.setItem('@MySuperStore:key', responseJson.token);
                    await this.props.loginUser()
                } catch (error) {
                    console.log(error)
                }
        })
      .catch((error) => {
            console.error(error);
        });
    }
    render() {
        if(this.props.auth === 'LOGOUT') {
            return (
                <View style={styles.body}>
                    <LinearGradient colors={['#4A148C', '#880E4F']} style={styles.linearGradient}>
                        <View style={styles.login}>
                            <Text style={styles.text}>Go SOcial</Text>
                            <TextInput underlineColorAndroid={'white'} onChangeText={this.handleEmailChange} placeholderTextColor={'white'} placeholder="Username" style={styles.input} value={this.state.email} />
                            <TextInput underlineColorAndroid={'white'} placeholderTextColor={'white'} onChangeText={this.handlePasswordChange} placeholder="Password" style={styles.input} secureTextEntry={true} value={this.state.password} />
                            <TouchableOpacity onPress={this._onPress} style={styles.btn} >
                                <Text style={styles.loginBtn}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                    <Accounts />
                </View>
            )
        } else {
            return <Tabs logout={this.props.logoutUser} />
        }
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

export default connect(mapStateToProps, mapActionsToProps)(Main)
