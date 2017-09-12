import React, { Component } from 'react';
import { View } from 'react-native';
import Config from 'react-native-config';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null }; // start in null instead of false to start with spinner

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
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    // Helper Function
    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={{ height: 45 }}>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </View>
                    );
            case false:
                return <LoginForm />;
            default:
                return (

                    // To Do Center Spinner in the Middle and bigger
                    <View 
                        style={{ marginTop: 45 }}
                    >
                        <Spinner />
                        
                    </View>
                );
        }
    }

    render() {
        return (
            
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
