import React, { Component } from 'react';
import { AppRegistry } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0

import Fire from '../Fire.js';

export default class Chat extends Component {

    static navigationOptions = {
        title: 'Chat',
    }

    state = {
        messages: [],
    };

    get user() {
        return {
            name: Fire.shared.username,
            _id: Fire.shared.uid,
        };
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={Fire.shared.send}
                user={this.user}
            />
        );
    }

    componentDidMount() {
        Fire.shared.on(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))
        );
    }
    componentWillUnmount() {
        Fire.shared.off();
    }
}

AppRegistry.registerComponent("Chat", () => Chat)