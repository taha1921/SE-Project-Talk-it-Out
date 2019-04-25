import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  View,
  Picker
} from "react-native";
import DatePicker from "react-native-datepicker";
import RF from "react-native-responsive-fontsize";
import {CheckBox} from 'react-native-elements'
import * as firebase from "firebase";
import 'firebase/firestore';

export default class HelperSignUp extends Component {
    
    static navigationOptions = {
        title: 'Helper Sign Up',
    }
    
    constructor(props) {
        super(props)
        this.state = { 
            date: "",
            email: '',
            username: '',
            password: '',
            retyped: '',
            name: '',
            gender: '',
            depression: false,
            anxiety: false,
            loneliness: false,
            abuse: false,
            comfort: false
        }
    }

    verify = () => {
        if(this.state.password != this.state.retyped)
        {
            alert("Passwords do not match")
        }
        
        else 
        {
          const email = this.state.email;
          const username = this.state.username;
          const name = this.state.name;
          const gender = this.state.gender;
          const pref = [];
          const age = this.state.date
          if(this.state.depression){
              pref.push("Depression");
          }
          if(this.state.anxiety){
              pref.push("Anxiety");
          }
          if(this.state.loneliness){
              pref.push("Loneliness");
          }
          if(this.state.abuse){
              pref.push("Abuse");
          }
          if(this.state.comfort){
              pref.push("Comfort");
          }
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(cred => {
            firebase.auth().onAuthStateChanged(function (user) {
              user.sendEmailVerification();
              firebase.firestore().collection("Helpers").doc(user.uid).set({
                Username: username,
                Email: email,
                Currently_Connected : [],
                Previously_Connected : [],
                Name: name,
                Preferences: pref,
                Gender:gender,
                Rating: 0,
                Reviews: [],
                Age: age,

              })
              .then(function() {
                alert("lol")
              });
            });
            alert("signed up")
          })
        }
    }
    
    render() {
        return (
          <ScrollView contentContainerStyle={styles.viewstyle}>
            
            <View style={styles.HeaderStyle}>
              <View style={styles.logostyle}>
                <Text style={styles.textstyle}>Talk It Out</Text>
              </View>
              <View style={styles.Headermessage}>
                <Text style={styles.HMStyle}>Helper</Text>
              </View>
            </View>
            
            <ScrollView contentContainerStyle={styles.scrollstyle}>
                
                {/*Email input*/}
                <View style={styles.inputlayout}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email Address"
                        returnKeyType="done"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={true}
                        placeholderTextColor="rgba(255,255,255,0.5)"
                        onChangeText={(email)=>this.setState({email})}
                        value={this.state.email}/>
                </View>

                {/*Username input*/}
                <View style={styles.inputlayout}>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        returnKeyType="done"
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholderTextColor='rgba(255,255,255,0.5)'
                        onChangeText={(username)=>this.setState({username})}
                        value={this.state.username}/>
                </View>
                
                {/*Password input*/}                
                <View style={styles.inputlayout}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        returnKeyType="done"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        placeholderTextColor='rgba(255,255,255,0.5)' 
                        onChangeText={(password)=>this.setState({password})}
                        value={this.state.password}/>
                </View>
                
                {/*Confirm Password*/}                
                <View style={styles.inputlayout}>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        returnKeyType="done"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        placeholderTextColor='rgba(255,255,255,0.5)'
                        onChangeText={(retyped)=>this.setState({retyped})}
                        value={this.state.retyped}/>
                </View>

                {/*Full name*/}
                <View style={styles.inputlayout}>
                    <TextInput
                        style={styles.input}
                        placeholder="Full name"
                        returnKeyType="done"
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholderTextColor='rgba(255,255,255,0.5)' 
                        onChangeText={(name)=>this.setState({name})}
                        value={this.state.name}/>
                </View>

                {/*Date of Birth*/}                
                <View style={styles.datelayout}>               
                  <DatePicker
                    style={{ width: Dimensions.get('window').width/1.5}}
                    date={this.state.date}
                    mode="date"
                    placeholder="Date of Birth"
                    format="YYYY-MM-DD"
                    minDate="1990-01-01"
                    maxDate="2018-12-31"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    showIcon= {false}
                    TouchableComponent= {TouchableOpacity}
                    customStyles={{
                        placeholderText: {
                            color: '#158ec1'
                        },
                        dateText: {
                            color: '#158ec1'
                        }
                    }}
                    onDateChange={(date) => { this.setState({ date: date }) }}
                />
                </View>

                {/*Gender input*/}
                <View style={styles.inputlayout}>
                    <Text style={{alignSelf: 'center', color: '#158ec1', fontSize: RF(2.4), fontFamily: 'Poppins'}}>Choose Gender</Text>
                    <Picker
                    selectedValue={this.state.gender}
                    onValueChange={(gender)=>{this.setState({gender: gender})}}
                    style ={styles.pickerstyle}>
                    <Picker.Item label = "Female" value = "female" />
                    <Picker.Item label = "Male" value = "male" />
                    <Picker.Item label = "Non-binary" value = "non-binary" />
                    <Picker.Item label = "Other" value = "other" />
                    </Picker>
                </View>

                {/*Preferences Input*/}
                <View style={styles.inputlayout}>
                    <Text style={{alignSelf: 'center', color: '#158ec1', fontSize: RF(2.1), fontFamily: 'Poppins'}}>Issues you believe you can help seekers with (select atleast one)</Text>
                    <CheckBox
                        center
                        title='Depression'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({depression: !this.state.depression})}
                        checked={this.state.depression}
                    />
                    <CheckBox
                        center
                        title='Anxiety'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({anxiety: !this.state.anxiety})}
                        checked={this.state.anxiety}
                    />
                    <CheckBox
                        center
                        title='Loneliness'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({loneliness: !this.state.loneliness})}
                        checked={this.state.loneliness}
                    />
                    <CheckBox
                        center
                        title='Abuse'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({abuse: !this.state.abuse})}
                        checked={this.state.abuse}
                    />
                    <CheckBox
                        center
                        title='Comfort'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({comfort: !this.state.comfort})}
                        checked={this.state.comfort}
                    />
                </View>

                <View style={styles.submitbutton}>
                    <TouchableOpacity 
                    style={styles.button}
                    activeOpacity={0.5}
                    onPress={this.verify}
                    >
                        <Text style={styles.buttontext}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{padding: 5}}></View>
            </ScrollView>
          </ScrollView>
        );
    }
}

styles = StyleSheet.create({
  button: {
    fontFamily: "Poppins",
    alignItems: "center",
    backgroundColor: "#244882",
    padding: 10,
    alignSelf: "center",
    width: Dimensions.get("window").width / 2.5,
    borderRadius: 20
  },

  buttontext: {
    fontFamily: "Poppins",
    fontSize: 20,
    color: "white"
  },

  textstyle: {
    fontFamily: "Poppins",
    fontSize: 15,
    color: "#536787"
  },

  logostyle: {
    flex: 0.3,
    justifyContent: "flex-start"
  },

  Headermessage: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center"
  },

  HMStyle: {
    fontFamily: "Poppins",
    fontSize: 30,
    color: "#158ec1"
  },

  HeaderStyle: {
    flex: 0.1,
    flexDirection: "column",
    justifyContent: "space-between"
    // backgroundColor: "purple"
  },

  viewstyle: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#1a2942"
  },

  scrollstyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly"
    // backgroundColor: 'red'
  },

  inputlayout: {
    justifyContent: "center",
    padding: 20
  },

  datelayout: {
    justifyContent: "center",
    padding: 20,
    alignItems: "center"
  },

  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    width: Dimensions.get("window").width / 1.4,
    alignSelf: "center",
    color: "white",
    paddingHorizontal: 10,
    borderRadius: 20
      },

  pickerstyle: {
    backgroundColor: "rgba(255,255,255,0.2)",
    width: Dimensions.get("window").width / 1.4,
    alignSelf: 'center',
    color: "rgba(255,255,255,0.5)",
    borderRadius: 20
  }
});

AppRegistry.registerComponent("HelperEmail", () => HelperEmail);