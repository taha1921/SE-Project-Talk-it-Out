import React, { Component } from 'react';
import { AppRegistry } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import * as firebase from "firebase";

import Fire from '../Fire.js';

export default class Chat extends Component {

    static navigationOptions = {
        title: 'Chat',
    }

    state = {
        messages: [],
    };

    // uid;

    get user() {
        return {
            name: Fire.shared.username,
            _id: Fire.shared.uid,
        };
    }

    get uid(){
        return this.props.navigation.state.params.uid
    }
    get sendRef(){
        return firebase.database().ref(this.uid+'/messages/'+Fire.shared.uid);
    }

    get recvRef(){
        return firebase.database().ref(Fire.shared.uid+'/messages/'+this.uid);

    }
    
    update = () => {

    }

    parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        const timestamp = new Date(numberStamp);
        const message = {
            _id,
            timestamp,
            text,
            user,
        };

        return message;
    };
    get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
    }
    on = callback => {
        this.recvRef.limitToLast(20).on('child_added', snapshot => callback(this.parse(snapshot)));
    }

    send = messages => {
        for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i];
            const message = {
                text,
                user,
                timestamp: this.timestamp,
            };
            this.sendRef.push(message);
        }
    };

    render() {
        alert(this.props.navigation.getParam('uid', "No-UID"))
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={this.send}
                user={this.user}
            />
        );
    }

    componentDidMount() {
        const temp = this
        temp.on(message => {
            alert(message.text)
            temp.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))}
        );
    }
    componentWillUnmount() {
        this.sendRef.off();
    }
}

AppRegistry.registerComponent("Chat", () => Chat)