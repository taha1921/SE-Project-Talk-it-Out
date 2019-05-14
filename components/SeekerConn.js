import React, { Component } from 'react'
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    FlatList,
    Alert
} from 'react-native'
import * as firebase from "firebase";
import 'firebase/firestore';
import Fire from '../Fire.js';


export default class SeekerConn extends Component {
    static navigationOptions = {
        title: 'Currently Connected',

    }

    constructor(props) {
        super(props)
        this.state = {
            uidlist: []
        }
    }

    SearchConnections = uid => {
        uid = Fire.shared.uid

        var ref2 = firebase.database().ref(uid + '/PreviouslyConnected/');
        ref2.once('value', function (snapshot) {
            try {

                // alert(uid)

                snapshot.forEach(function (childSnapshot) {

                    var value = childSnapshot.val();
                    console.log(value)
                    if (value.Key) {
                        var present = false

                        temp.state.uidlist.forEach(element => {
                            if (element.key == value.Key) {
                                present = true
                            }
                        })

                        if (!present) {
                            var joined = temp.state.uidlist.concat({ key: value.Key });
                            // alert(key)
                            temp.setState({
                                uidlist: joined,
                            });
                        }


                    }
                    else {
                        alert("lol")
                    }

                });
            } catch (error) {
                alert(error)
            }
        });

        var ref = firebase.database().ref(uid + '/CurrentlyConnected/');
        const temp = this
        ref.on('value', function (snapshot) {
            try {

                // alert(uid)

                snapshot.forEach(function (childSnapshot) {

                    var value = childSnapshot.val();
                    console.log(value)
                    if (value.uid) {
                        var present = false

                        temp.state.uidlist.forEach(element => {
                            if (element.key == value.uid) {
                                present = true
                            }
                        })

                        if (!present) {
                            var joined = temp.state.uidlist.concat({ key: value.uid });
                            // alert(key)
                            temp.setState({
                                uidlist: joined,
                            });
                        }


                    }
                    else {
                        alert("lol")
                    }

                });
            } catch (error) {
                alert(error)
            }
        });


    }

    componentDidMount() {
        var uid = Fire.shared.uid
        var temp = this
        if (!uid) {
            setTimeout(function () { temp.SearchConnections(uid) }, 2000)
        } else {
            this.SearchConnections(uid)
        }
    }

    componentWillUnmount() {
        var uid = Fire.shared.uid

        var ref = firebase.database().ref(uid + '/CurrentlyConnected/');

        ref.off();
    }

    endchat = (Key) => {

        /*BASIT CODE HERE*/
        var uid = Fire.shared.uid
        var ref1 = firebase.database().ref(Key + '/CurrentlyConnected/');
        const connect = {
            uid
        }
        ref1.once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {

                var value = childSnapshot.val();
                if (value.Key) {
                    if (value.Key == uid) {

                        var key1 = childSnapshot.key
                        ref1.child(key1).remove()

                    }

                }
                else {
                    alert("lol")
                }

            });
        });
        ref1 = firebase.database().ref(Key + '/PreviouslyConnected/');
        ref1.push(connect)
        ref1 = firebase.database().ref(Key + '/ToBeDeleted/');
        ref1.push(connect)
        var ref2 = firebase.database().ref(uid + '/CurrentlyConnected/');
        ref2.once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {

                var value = childSnapshot.val();
                if (value.uid) {
                    if (value.uid == Key) {

                        var key1 = childSnapshot.key
                        ref2.child(key1).remove()

                    }

                }
                else {
                    alert("lol")
                }

            });
        });
        const second = {
            Key
        }
        ref2 = firebase.database().ref(uid + '/PreviouslyConnected/');
        ref2.push(second)
    }
    render() {
        return (
            <View style={styles.viewstyle}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('request')}>
                    <Text style={styles.buttontext}>Connect to a Helper</Text>
                </TouchableOpacity>

                <View style={{ padding: 20 }}></View>

                <View>
                    {
                        this.state.uidlist.length > 0 ?
                            <FlatList data={this.state.uidlist}
                                contentContainerStyle={styles.container}

                                renderItem={({ item, index }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => this.props.navigation.navigate("Chatting", { uid: item.key })}
                                            onLongPress={() => Alert.alert(
                                                'End Chat Session',
                                                'Would you like to end your chat session with the helper?',
                                                [
                                                    {
                                                        text: 'Cancel',
                                                        onPress: () => console.log('Cancel Pressed'),
                                                        style: 'cancel',
                                                    },
                                                    { text: 'OK', onPress: () => this.endchat(item.key) },
                                                ],
                                                { cancelable: false },
                                            )}>
                                            <Text style={styles.buttontext}> Helper {index + 1} </Text>
                                        </TouchableOpacity>
                                    </View>


                                )}
                            />
                            :
                            <View>
                                <Text>No helper connected yet</Text>
                            </View>
                    }

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewstyle: {
        flex: 1,
        backgroundColor: "#1a2942"
    },

    button: {
        fontFamily: "Poppins",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        alignSelf: "stretch",
        height: Dimensions.get("window").height / 15
    },

    buttontext: {
        fontFamily: "Poppins",
        fontSize: 20,
        color: "black"
    },

    container: {
        justifyContent: "space-evenly",

    }
});

AppRegistry.registerComponent("SeekerConn", () => SeekerConn);