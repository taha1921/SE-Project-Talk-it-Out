import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    ScrollView,
    StyleSheet,
    Dimensions,
    Picker,
    TouchableOpacity
} from 'react-native';
import RF from 'react-native-responsive-fontsize'
import {CheckBox} from 'react-native-elements'
import * as firebase from "firebase";
import 'firebase/firestore';
import Fire from '../Fire.js';

export default class ConnectionSeeker extends Component {

    static navigationOptions = {
        title: 'Chat',
    }
    

    constructor(props)
    {
        super(props)
        this.state = {
          gender: "",
          age: "",
          depression: false,
          anxiety: false,
          loneliness: false,
          abuse: false,
          comfort: false,
          justdown: false,
        };
    }

    verify = () => {
        if(this.state.gender === "" || this.state.age === "")
        {
            alert("Please choose an option in gender and age")
        }
        else
        {
            const uid = Fire.shared.uid
            var lol = "lol"
            const req = {
                "request": {
                    uid,
                },


            };
            var temp = this
            firebase.firestore().collection("Helpers").get().then(function (querySnapshot) {
                var Helpers = []
                querySnapshot.forEach(function (doc) {
                    var comp = 0
                    var data = doc.data()
                    var pref = doc.Preferences
                    if(temp.state.depression)
                    {
                        if(pref.includes("Depression"))
                        {
                            comp = comp + 1
                        }
                    }
                    if(temp.state.comfort)
                    {
                        if(pref.includes("Comfort"))
                        {
                            comp = comp + 1
                        }
                    }
                    if(temp.state.anxiety)
                    {
                        if(pref.includes("Anxiety"))
                        {
                            comp = comp + 1
                        }
                    }
                    if(temp.state.loneliness)
                    {
                        if(pref.includes("Loneliness"))
                        {
                            comp = comp + 1
                        }
                    }
                    if(temp.state.abuse)
                    {
                        if(pref.includes("Abuse"))
                        {
                            comp = comp + 1
                        }
                    }
                    if(data.Gender==temp.state.gender)
                    {
                        comp = comp + 2
                    }
                    var helper = {
                        "id":doc.id,
                        "comp":comp
                    }
                    Helpers.push(helper)
                    
                });
                Helpers.sort(function(a, b){return b-a});
                console.log(Helpers)
                for (let i = 0; i < 5; i++) {
                    var ref = firebase.database().ref(Helpers[i].id + '/Requests/');
                    ref.push(req)
                    
                }
                
            });
            alert('Request Sent, We will connect you to a helper in some time')
            
        }

    }
    
    render() {
        return (
             <ScrollView contentContainerStyle={styles.viewstyle}>
                
                <View style={styles.message}>
                    <Text style={styles.textstyle}>Select Preferences for your helper and we'll try our best to find you a good match</Text>
                </View>


                <View style={{paddingVertical: 20}}>
                    <Text style={{ alignSelf: 'center', color: '#158ec1', fontSize: RF(2.4), fontFamily: 'Poppins-Regular' }}>Choose Gender</Text>
                    <Text style={{ alignSelf: 'center', color: '#158ec1', fontSize: RF(1.9), fontFamily: 'Poppins-Regular' }}>(Please open and tap No preference if you don't have a preference)</Text>
                    
                    <Picker
                        selectedValue={this.state.gender}
                        onValueChange={(gender) => { this.setState({ gender: gender }) }}
                        style={styles.pickerstyle}>
                        <Picker.Item label="..." value=""/>
                        <Picker.Item label="No preference" value="no preference"/>                        
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Non-binary" value="non-binary" />
                    </Picker>
                </View>
                
                <View style={{ paddingVertical: 20}}>
                    <Text style={{ alignSelf: 'center', color: '#158ec1', fontSize: RF(2.4), fontFamily: 'Poppins-Regular' }}>Choose Age</Text>
                    <Text style={{ alignSelf: 'center', color: '#158ec1', fontSize: RF(1.9), fontFamily: 'Poppins-Regular' }}>(Please open and tap No preference if you don't have a preference)</Text>                    
                    <Picker
                        selectedValue={this.state.age}
                        onValueChange={(age) => { this.setState({ age: age }) }}
                        style={styles.pickerstyle}>
                        <Picker.Item label="..." value=""/>
                        <Picker.Item label="No preference" value="No preference" />
                        <Picker.Item label="18" value="18" />                        
                        <Picker.Item label="19" value="19" />
                        <Picker.Item label="20" value="20" />
                        <Picker.Item label="21" value="21" />
                        <Picker.Item label="22" value="22" />
                        <Picker.Item label="23" value="23" />
                        <Picker.Item label="24" value="24" />
                        <Picker.Item label="25" value="25" />
                        <Picker.Item label="26" value="26" />
                        <Picker.Item label="27" value="27" />
                    </Picker>
                </View>

                <View style={{paddingVertical: 20}}>
                    <View style={{paddingBottom: 5}}>
                    <Text style={{ alignSelf: 'center', color: '#158ec1', fontSize: RF(1.9), fontFamily: 'Poppins-Regular' }}>Do you have a specific issue you want to talk about with the helper?</Text>
                    </View>
                    <CheckBox
                        center
                        title='Just feeling down'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({ justdown: !this.state.justdown })}
                        checked={this.state.justdown}
                    />
                    <CheckBox
                        center
                        title='Depression'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({ depression: !this.state.depression })}
                        checked={this.state.depression}
                    />
                    <CheckBox
                        center
                        title='Anxiety'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({ anxiety: !this.state.anxiety })}
                        checked={this.state.anxiety}
                    />
                    <CheckBox
                        center
                        title='Loneliness'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({ loneliness: !this.state.loneliness })}
                        checked={this.state.loneliness}
                    />
                    <CheckBox
                        center
                        title='Abuse'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({ abuse: !this.state.abuse })}
                        checked={this.state.abuse}
                    />
                    <CheckBox
                        center
                        title='Comfort'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({ comfort: !this.state.comfort })}
                        checked={this.state.comfort}
                    />
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.5}
                        onPress={this.verify}
                    >
                        <Text style={styles.buttontext}>Send Request</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ padding: 5 }}></View>
             </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#244882",
        padding: 10,
        alignSelf: "center",
        width: Dimensions.get("window").width / 2.5,
        borderRadius: 20
    },
   
    viewstyle: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#1a2942"
   },

   textstyle: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontSize: RF(2.5)
   },

   message: {
    // flex:,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Dimensions.get("window").width/4,
    marginRight: Dimensions.get("window").width/4,
    paddingTop: 50
    // backgroundColor: 'blue'
   },

    pickerstyle: {
        backgroundColor: "rgba(255,255,255,0.2)",
        width: Dimensions.get("window").width / 1.4,
        alignSelf: 'center',
        color: "rgba(255,255,255,0.5)",
        borderRadius: 20
    },
    
    scrollstyle: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly"
        // backgroundColor: 'red'
    },

    buttontext: {
        fontSize: 15,
        color: "white"
    },
    
})

AppRegistry.registerComponent("ConnectionSeeker", () => ConnectionSeeker)