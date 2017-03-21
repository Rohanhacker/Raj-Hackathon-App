import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import {  Left, Body, Right, ListItem, Text, Toast } from 'native-base'

export default class Card extends Component {
    _onPress = (e) => {
        fetch('https://cryptic-lowlands-56194.herokuapp.com/api/upvote/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': this.props.token
            },
            body: JSON.stringify({
                campaignId: this.props.campaignId,
            })
        }).then((response) => response.json())
          .then((responseJson) => {
              console.log(responseJson)
              if(responseJson.success === true) {
                  this.props.value.votes += 1
              } else {
                  Toast.show({
                    text: 'Already UPvoted !',
                    position: 'bottom',
                    buttonText: 'Okay'
                })
              }
        })
      .catch((error) => {
            console.error(error);
        });
    }
    render() {
        return (
                <ListItem thumbnail>
                        <Left>
                            <Text style={{color: 'green'}}>{this.props.value.votes} votes</Text>
                         </Left>
                        <Body>
                            <Text>{this.props.value.title}</Text>
                            <Text note>{this.props.value.details}</Text>
                        </Body>
                        <Right>
                            <TouchableOpacity onPress={this._onPress}>
                                <Text style={{color: 'green'}}>Vote</Text>
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
        );
    }
}