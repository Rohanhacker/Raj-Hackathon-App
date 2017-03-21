import React, { Component } from 'react';
import {AsyncStorage} from 'react-native'
import { Container, Content, Form, Item, Input, Text, Button, Toast } from 'native-base';

export default class AddCampaign extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            desc: '',
            link: ''
        }
    }
    handleBtn = (e) => {
        const a = (this.state)
        AsyncStorage.getItem('@MySuperStore:key', (err,r) => {
            if (r) {
                fetch('https://cryptic-lowlands-56194.herokuapp.com/api/campaign', {
                    method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': r
                },
                body: JSON.stringify({
                    title: a.title,
                    details: a.desc,
                    link: a.link
                })
                }).then((response) => response.json())
                .then((responseJson) => {
                    if(responseJson.success) {
                        Toast.show({
                            text: 'Sucessfully submitted !',
                            position: 'bottom',
                            buttonText: 'Okay'
                        })
                    }
                })
                .catch((e) => {
                    console.error(e);
                })
            }
        } 
    )
}
    handleTitle = (e) => {
        this.setState({
            title: e
        })
    }
    handleDesc = (e) => {
        this.setState({
            desc: e
        })
    }
    handleLink = (e) => {
        this.setState({
            link: e
        })
    }
    render() {
        return (
            <Container >
                <Content >
                    <Form>
                        <Item>
                            <Input onChangeText={this.handleTitle} placeholder="Title" value={this.state.title} />
                        </Item>
                        <Item>
                            <Input onChangeText={this.handleDesc} placeholder="Description" value={this.state.desc} />
                        </Item>
                        <Item>
                            <Input onChangeText={this.handleLink} placeholder="Video Link" value={this.state.link} />
                        </Item>
                        <Button onPress={this.handleBtn} style={{alignSelf: 'center', marginTop: 50}}><Text>Submit</Text></Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}