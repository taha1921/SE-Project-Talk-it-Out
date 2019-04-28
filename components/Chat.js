import React, {Component} from 'react';
import {AppRegistry} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';

export default class Chat extends Component {
    // 2.
    static navigationOptions = {
        title: "Chat"
    }
    // 3.
    state = {
        messages: [],
    };

    render() {
        // 4.
        return (
            <GiftedChat
                messages={this.state.messages}
            />
        );
    }
}
AppRegistry.registerComponent("Chat", () => Chat)