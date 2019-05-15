import React, { Component } from 'react';
import { AppRegistry, AsyncStorage, Platform } from 'react-native'
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

    get uid() {
        return this.props.navigation.state.params.uid
    }
    get sendRef() {
        return firebase.database().ref(this.uid + '/messages/' + Fire.shared.uid);
    }

    get recvRef() {
        return firebase.database().ref(Fire.shared.uid + '/messages/' + this.uid);

    }

    update = () => {

    }

    parse = snapshot => {
        temp = this
        setTimeout(function () {
            var key = snapshot.key
            temp.recvRef.child(key).remove()
        }, 3000);

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
    parse1 = snapshot => {
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

    on1 = callback => {
        this.sendRef.limitToLast(20).on('child_added', snapshot => callback(this.parse1(snapshot)));
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
        AsyncStorage.setItem("messages/" + this.uid, JSON.stringify((this.state.messages)))
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={this.send}
                user={this.user}
            />
        );
    }


    componentWillMount() {
        AsyncStorage.getItem("messages/" + this.uid).then(val => {
            if (val) {
                const temp = this
                temp.setState({
                    messages: JSON.parse(val),
                }
                )
            }

        })
    }


    componentDidMount() {



        const temp = this
        temp.on(message => {
            if (temp.state.messages.some(e => e._id == message._id)) {
            }
            else {
                temp.setState(previousState => {
                    if (previousState.messages.includes(message)) {
                        return {}
                    }
                    return {
                        messages: GiftedChat.append(previousState.messages, message),
                    }
                })
            }
        }
        );

        temp.on1(message => {
            if (temp.state.messages.some(e => e._id == message._id)) {
            }
            else {
                temp.setState(previousState => {
                    if (previousState.messages.includes(message)) {
                        return {}
                    }
                    return {
                        messages: GiftedChat.append(previousState.messages, message),
                    }
                })
            }
        }

        );
    }
    componentWillUnmount() {
        this.recvRef.off();
        this.sendRef.off();
    }
}

AppRegistry.registerComponent("Chat", () => Chat)