import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {

    onButtonPress = () => {
        console.log('Button Pressed!!')
    }

    render() {
        return (
            <View>
                <Text>Home Screen</Text>
                <Button title="Tab Navigation" onPress={this.onButtonPress} />
            </View>
        );
    }
}