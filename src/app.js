import React, { Component } from 'react';
import { View } from 'react-native';
import Config from 'react-native-config';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

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
        console.log(Config.API_KEY);
    }
    render() {
        return (
            
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
