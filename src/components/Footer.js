import React, { Component } from 'react';
import {AsyncStorage} from 'react-native'
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class FooterTabs extends Component {
    constructor(props) {
        super(props)
    }
    handlePress = () => {
        AsyncStorage.clear()   
        this.props.logout()
    }
    render() {
        return (
            <Container>
                <Content />
                <Footer >
                    <FooterTab>
                        <Button onPress={this.handlePress}>
                            <Text style={{fontSize: 20}}>Logout</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}