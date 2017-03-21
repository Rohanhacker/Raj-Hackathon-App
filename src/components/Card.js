import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Left, Body, Thumbnail, Text, Button, Icon } from 'native-base';
export default class Ccard extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card >
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Campaign 1</Text>
                                    <Text note>JECRC</Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
  <Image
          style={{width: 400, height: 200}}
          source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
        />
                          </CardItem>
                          <CardItem content>
                              <Text>dhak hsdk fkdsfh dk</Text>
                          </CardItem>
                          <CardItem style={{ justifyContent: 'space-around' }}>
                              <Button transparent>
                                  <Icon active name="thumbs-up" />
                                  <Text>12 votes</Text>
                              </Button>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
        )
    }
}