import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Config from 'react-native-config';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: Config.API_KEY,
                authDomain: Config.AUTH_DOMAIN,
                databaseURL: Config.DATABASE_URL,
                projectId: Config.PROJECT_ID,
                storageBucket: Config.STORAGE_BUCKET,
                messagingSenderId: Config.MESSAGING_SENDER_ID
        });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An App!</Text>
            </View>
        );
    }
}

export default App;
