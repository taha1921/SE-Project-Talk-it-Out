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

<<<<<<< HEAD
export default class ModHelperConn extends Component{
=======
export default class ModHelperConn extends Component {
>>>>>>> c6c8618b80797c175578778a7caa499133510da4
    static navigationOptions = {
        title: 'Moderator as Seeker',
    }

    constructor(props) {
        super(props)
        this.state = {
            text: '',
            email: '',
            password: '',
            loader: false,
            ListOfReq: []

        };
    }
<<<<<<< HEAD
    
    SendId = (key) =>{
        var uid = Fire.shared.uid
        var ref = firebase.database().ref(uid + '/CurrentlyConnectedHelper/');
        const connect = {
            "uid":key
=======

    SendId = (key) => {
        var uid = Fire.shared.uid
        var ref = firebase.database().ref(uid + '/CurrentlyConnectedHelper/');
        const connect = {
            "uid": key
>>>>>>> c6c8618b80797c175578778a7caa499133510da4
        }

        ref.once('value', function (snapshot) {
            try {

                // alert(uid)
                var present = false
                snapshot.forEach(function (childSnapshot) {

                    var value = childSnapshot.val();
                    console.log(value)
                    if (value.uid) {
<<<<<<< HEAD
                        if(value.uid==key){
=======
                        if (value.uid == key) {
>>>>>>> c6c8618b80797c175578778a7caa499133510da4
                            present = true
                        }
                    }
                    else {
                        alert("lol")
                    }

                });
<<<<<<< HEAD
                if(!present)
                {
=======
                if (!present) {
>>>>>>> c6c8618b80797c175578778a7caa499133510da4
                    ref.push(connect)
                }
            } catch (error) {
                alert(error)
            }
        });

        var ref1 = firebase.database().ref(key + '/CurrentlyConnected/');
        const second = {
<<<<<<< HEAD
            "uid":uid
=======
            "uid": uid
>>>>>>> c6c8618b80797c175578778a7caa499133510da4
        }
        ref1.once('value', function (snapshot) {
            try {

                // alert(uid)
                var present = false
                snapshot.forEach(function (childSnapshot) {

                    var value = childSnapshot.val();
                    console.log(value)
                    if (value.uid) {
<<<<<<< HEAD
                        if(value.uid==uid){
                            present = true
                        }  
=======
                        if (value.uid == uid) {
                            present = true
                        }
>>>>>>> c6c8618b80797c175578778a7caa499133510da4

                    }
                    else {
                        alert("lol")
                    }

                });
<<<<<<< HEAD
                if(!present)
                {
=======
                if (!present) {
>>>>>>> c6c8618b80797c175578778a7caa499133510da4
                    ref1.push(second)
                }
            } catch (error) {
                alert(error)
            }
        });

        this.props.navigation.navigate("chat", { uid: key })
<<<<<<< HEAD
        
=======

>>>>>>> c6c8618b80797c175578778a7caa499133510da4

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
    SearchConnections = uid => {
        uid = Fire.shared.uid
<<<<<<< HEAD
        var temp =  this
=======
        var temp = this
>>>>>>> c6c8618b80797c175578778a7caa499133510da4
        firebase.firestore().collection("Helpers").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                var joined = temp.state.ListOfReq.concat({ key: doc.id });
                temp.setState({
                    ListOfReq: joined,
                });
            })
        })
    }

<<<<<<< HEAD
    
=======

>>>>>>> c6c8618b80797c175578778a7caa499133510da4
    render() {
        return (
            <View style={styles.viewstyle}>

<<<<<<< HEAD
            <View style={{ flex: 1 }}>
                {

                    this.state.ListOfReq.length > 0 ?
                        <FlatList data={this.state.ListOfReq}
                            contentContainerStyle={styles.container}

                            renderItem={({ item }) => (
                                <View style={{paddingBottom:10}}>
                                    <TouchableOpacity style={styles.button} onPress={() => this.SendId(item.key)}>
                                        <Text style={styles.buttontext} > {item.key} </Text>
                                    </TouchableOpacity>
                                </View>


                            )}
                        />

                        :
                        <View>
                            <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'white', fontFamily: 'Poppins-Medium', fontSize: RF(4) }}> NO Request </Text>
                        </View>


                }
=======
                <View style={{ flex: 1 }}>
                    {

                        this.state.ListOfReq.length > 0 ?
                            <FlatList data={this.state.ListOfReq}
                                contentContainerStyle={styles.container}

                                renderItem={({ item }) => (
                                    <View style={{ paddingBottom: 10 }}>
                                        <TouchableOpacity style={styles.button} onPress={() => this.SendId(item.key)}>
                                            <Text style={styles.buttontext} > {item.key} </Text>
                                        </TouchableOpacity>
                                    </View>


                                )}
                            />

                            :
                            <View>
                                <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'white', fontFamily: 'Poppins-Medium', fontSize: RF(4) }}> NO Request </Text>
                            </View>
>>>>>>> c6c8618b80797c175578778a7caa499133510da4


                    }


                </View>
            </View>
<<<<<<< HEAD
        </View>
=======
>>>>>>> c6c8618b80797c175578778a7caa499133510da4
            // <View style={styles.viewstyle}>

            //         <View style={styles.Header}>
            //             <Text style={styles.HM}>Connection with Helper</Text>
            //         </View>

            //     <View style={{ justifyContent: "center", paddingTop: 50 }} >
            //         <Text style={styles.HMStyle2}>Enter Helper ID</Text>

<<<<<<< HEAD
                   
=======

>>>>>>> c6c8618b80797c175578778a7caa499133510da4
            //         <TextInput
            //             style={{backgroundColor: "white"}}
            //             maxHeight={Dimensions.get('window').height/2}
            //             onChangeText={(text) => this.setState({ text })} />

            //         <View style={{padding:25}}></View>
            //         <TouchableOpacity
            //             style={styles.button}
            //             onPress={() => this.TextUP(this.state.text)} >
            //             <Text style={styles.buttontext}>Submit</Text>
            //         </TouchableOpacity>

            //     </View>



            // </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#244882",
        padding: 10,
        alignSelf: "stretch",
        // width: Dimensions.get("window").width / 2.5,
        borderRadius: 20,
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
    },
    myEmptyStarStyle: {
        color: 'white',
    },

    buttontext: {
        fontFamily: "Poppins",
        fontSize: 20,
        color: "white"
    },

    Header: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 10
    },

    HM: {
        fontFamily: "Poppins-Bold",
        fontSize: RF(3),
        color: "#158ec1",
    },

    HMStyle2: {
        fontFamily: "Poppins-Regular",
        fontSize: RF(2.5),
        color: "#158ec1",
        alignSelf: 'center',
        paddingBottom: 20
    },

    viewstyle: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#1a2942"
    },

});

AppRegistry.registerComponent("ModHelperConn", () => ModHelperConn)