import React, { Component } from 'react';
import { Container, Content, Tab, Tabs, Header } from 'native-base';

import Tab1 from './Campaigns';
import Tab2 from './AddCampaign';
import Footer from './Footer';

export default class TabsView extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Container style={{flex: 1}}>
            <Header hasTabs style={{flex: 1}} />
            <Tabs style={{flex: 1}}>
                <Tab heading="Campaigns">
                    <Tab1 />
                </Tab>
                <Tab heading="Add Campaign">
                    <Tab2 />
                </Tab>
            </Tabs>
            <Footer logout={this.props.logout} />
            </Container>
        );
    }
}