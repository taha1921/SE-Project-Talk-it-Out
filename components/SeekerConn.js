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
import RF from 'react-native-responsive-fontsize'


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

        var ref = firebase.database().ref(uid + '/CurrentlyConnected/');
        const temp = this
        ref.on("value", function (snapshot) {
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

    startchat = (key) => {

        /*Basit Code Here*/

        var uid = Fire.shared.uid
        var ref = firebase.database().ref(uid + '/CurrentlyConnected/');
        const connect = {
            "uid":key
        }

        ref.push(connect)
        ref = firebase.database().ref(key + '/CurrentlyConnected/');
        const second = {
            "uid":uid
        }
        ref.push(second)
    }

    reportuser = (key) => {
        console.log('made it here')
        this.props.navigation.navigate('feedback', {uid: key})
    }

    onlongpress = (Key) => {
        var uid = Fire.shared.uid

        var ref = firebase.database().ref(uid);

        const temp = this

        ref.once('value', function (snapshot) {
            if(!snapshot.hasChild("CurrentlyConnected")) 
            {
                Alert.alert(
                    'Not Connected',
                    'You are currently not connected with this helper, what action would you like to take?',
                    [
                        {
                            text: "Report User",
                            onPress: () => temp.reportuser(Key)
                        },
                        
                        {
                            text: 'Cancel',
                            style: 'cancel',
                        },
                        
                        { text: 'Start Chat', 
                        onPress: () => temp.startchat(Key)
                        },
                    ],
                    { cancelable: false },
                )
            }
            else 
            {
                var seekerref = firebase.database().ref(uid + '/CurrentlyConnected/');
                seekerref.once('value', function (snapshot) {
                    snapshot.forEach(function (childSnapshot) {
                        var helperkey = childSnapshot.val()

                        if(helperkey.uid == Key)
                        {
                            Alert.alert(
                                'Currently Connected',
                                'You are currently connected with this helper, what action would you like to take?',
                                [
                                    {
                                        text: 'Cancel',
                                        style: 'cancel',
                                    },

                                    {
                                        text: 'End Chat',
                                        onPress: () => temp.endchat(Key)
                                    },
                                ],
                                { cancelable: false },
                            )
                        }
                        else
                        {
                            Alert.alert(
                                'Connected with another helper',
                                'You are not currently connected with this helper, what action would you like to take?',
                                [
                                    {
                                        text: 'Cancel',
                                        style: 'cancel',
                                    },

                                    {
                                        text: 'Report User',
                                        onPress: () => temp.reportuser(Key)
                                    },
                                ],
                                { cancelable: false },
                            )
                        }
                    })
                })
            }
        })


    }

    endchat = (Key) => {

        var uid = Fire.shared.uid
        var helperref = firebase.database().ref(Key + '/CurrentlyConnected/');
        const connect = {
            uid
        }
        helperref.once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {

                var value = childSnapshot.val();
                if (value.uid) {
                    if (value.uid == uid) {
                        var key1 = childSnapshot.key
                        helperref.child(key1).remove()
                        alert("Chat ended, You can long Press on the header if you want to report the helper or start another chat session")
                    }

                }
                else {
                    alert("lol")
                }

            });
        });
        
        var helperref1 = firebase.database().ref(Key + '/PreviouslyConnected/');
        helperref1.push(connect)
        var helperref2 = firebase.database().ref(Key + '/ToBeDeleted/');
        helperref2.push(connect)
        
        var seekerref = firebase.database().ref(uid + '/CurrentlyConnected/');
        seekerref.once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {

                var value = childSnapshot.val();
                if (value.uid) {
                    if (value.uid == Key) {

                        var key1 = childSnapshot.key
                        seekerref.child(key1).remove()

                    }

                }
                else {
                    alert("lol")
                }

            });
        });
        const second = {
            "uid":Key
        }
        var seekerref1 = firebase.database().ref(uid + '/PreviouslyConnected/');
        seekerref1.push(second)
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
                                    <View style={{padding:10}}>
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => this.props.navigation.navigate("Chatting", { uid: item.key })}
                                            onLongPress={() => this.onlongpress(item.key)}
                                            >
                                            <Text style={styles.buttontext}> Helper {index + 1} </Text>
                                        </TouchableOpacity>
                                    </View>


                                )}
                            />
                            :
                            <View>
                                <Text style={{justifyContent: 'center', alignSelf:'center', color:'white', fontFamily: 'Poppins-Medium', fontSize: RF(4)}}>No helper connected yet</Text>
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
        fontFamily: "Poppins-Medium",
        fontSize: 20,
        color: "black"
    },

    container: {
        justifyContent: "space-evenly",

    }
});

AppRegistry.registerComponent("SeekerConn", () => SeekerConn);