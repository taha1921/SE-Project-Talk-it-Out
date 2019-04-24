import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView
} from "react-native";
import RF from "react-native-responsive-fontsize";
import * as firebase from "firebase";

export default class SeekerSignUp extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            retyped: ''
        }
    }

    verify = () => {
        if(this.state.password != this.state.retyped)
        {
            alert("Passwords do not match")
        }
         else
 		{
 			firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(cred=>{
        firebase.auth().onAuthStateChanged(function(user) {
            user.sendEmailVerification(); 
          });
 				alert("signed up")
			 })
		 }
        
        /*WRITE FIREBASE CODE HERE*/
    }
    render() {
        return (
          <ScrollView contentContainerStyle={styles.viewstyle}>
            
            {/*Header portion*/}
            <View style={styles.HeaderStyle}>
              <View style={styles.logostyle}>
                <Text style={styles.textstyle}>Talk It Out</Text>
              </View>
              <View style={styles.Headermessage}>
                <Text style={styles.HMStyle}>Seeker</Text>
              </View>
            </View>

            {/*Input Portion*/}
            <View style={styles.scrollstyle}>
              <View style={styles.info}>
                    <Text style={styles.message}>Please enter in all the following fields before proceeding</Text>
              </View>
              <View style={styles.inputlayout}>
                <TextInput
                  style={styles.input}
                  placeholder="Email Address"
                  returnKeyType="done"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={true}
                  placeholderTextColor="rgba(255,255,255,0.2)"
                  onChangeText={(email)=>this.setState({email})}
                  value={this.state.email}
                />
              </View>
              <View style={styles.inputlayout}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  returnKeyType="done"
                  autoCapitalize="none"
                  secureTextEntry={true}
                  autoCorrect={false}
                  placeholderTextColor="rgba(255,255,255,0.2)"
                  onChangeText={(password)=>this.setState({password})}
                  value={this.state.password}                
                />
              </View>
              <View style={styles.inputlayout}>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  returnKeyType="done"
                  autoCapitalize="none"
                  secureTextEntry={true}
                  autoCorrect={false}
                  placeholderTextColor="rgba(255,255,255,0.2)"
                  onChangeText={(retyped)=>this.setState({retyped})}
                  value={this.state.retyped}
                />
              </View>

              <View style={styles.submitbutton}>
                    <TouchableOpacity 
                    style={styles.button}
                    activeOpacity={0.5}
                    onPress={this.verify}
                    >
                        <Text style={styles.buttontext}>Send Code</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
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
    fontSize: RF(4.5),
    color: "#158ec1"
  },

  HeaderStyle: {
    flex: 0.1,
    flexDirection: "column",
    justifyContent: "space-between"
  },

  viewstyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#1a2942"
  },

  scrollstyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    // backgroundColor: 'red'
  },

  info: {
    alignItems: "center",
    marginLeft: 5
  },

  message: {
    alignSelf: "center",
    fontFamily: "Poppins",
    fontSize: RF(2.5),
    color: "#158ec1"
  },

  inputlayout: {
    justifyContent: "center",
    padding: 20
  },

  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    width: Dimensions.get('window').width/1.4,
    alignSelf: 'center',
    color: "white",
    paddingHorizontal: 10,
    borderRadius: 20,
  },
    
  submitbutton: {
        flex: 0.15,
    }
});

AppRegistry.registerComponent("SeekerSignUp", () => SeekerSignUp);