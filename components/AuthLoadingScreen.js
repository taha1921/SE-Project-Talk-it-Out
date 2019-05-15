import React, {Component} from 'react';
import {
    AppRegistry,
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View,
} from 'react-native';

export default class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        token = await AsyncStorage.getItem('usertype');
        if(token)
        {
            type = await AsyncStorage.getItem('usertype')
            if(type == "Helper")
            {
                this.props.navigation.navigate("Helper")
            }
            else if(type == "Seeker")
            {
                this.props.navigation.navigate("Seeker")
            }
            else if(type == "Moderator")
            {
                this.props.navigation.navigate("Moderator")
            }
        }
        else
        {
            this.props.navigation.navigate('Auth')
        }
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

AppRegistry.registerComponent("AuthLoadingScreen", () => AuthLoadingScreen);