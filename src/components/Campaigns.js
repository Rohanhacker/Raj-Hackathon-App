import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  AsyncStorage
} from 'react-native'
import {Spinner} from 'native-base'
import Card from './Card'

class Campaign extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            token: ''
        }
    }
    componentDidMount() {
            AsyncStorage.getItem('@MySuperStore:key', (err,r) => {
                console.log(r)
                if (r) {
                    fetch('https://cryptic-lowlands-56194.herokuapp.com/api/campaign', {
                        method: 'GET',
                        headers: {
                            'x-access-token': r,
                        }
                    }).then((response) => response.json())
                    .then((responseJson) => {
                        console.log(responseJson)
                        this.setState({
                            data: responseJson.data,
                            token: r
                        })
                    })
                    .catch((e) => {
                        console.error(e);
                    })
                } else {
                    console.warn('err')
                }
            });
        }
    render() {
        if(this.state.data.length) {
            let cards = this.state.data.map((value,i) => {
                            return (
                                <Card key={i} value={value} token={this.state.token} />
                            )
                        })
                return (
                    <View style={{flex: 1}}>
                        <ScrollView style={styles.container}>
                            {cards}
                        </ScrollView>
                    </View>    
                )
        } else {
            return <Spinner />
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default Campaign
