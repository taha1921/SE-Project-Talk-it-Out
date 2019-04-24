import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import RF from "react-native-responsive-fontsize";
import * as firebase from 'firebase';


export default class HelperEmail extends Component {
    


    constructor(props) {
      super(props);
      this.state = {
        email: '',
        // authenticating: false
      }
    }

    verify = () => {
      if (this.state.email.substr(-12, 12) != '@lums.edu.pk')
      {
        alert('please enter your LUMS email')
      }
    }

    render() {
        return (
          <KeyboardAvoidingView behavior="height" style={styles.viewstyle}>
            
          {/*Header portion*/}
            <View style={styles.HeaderStyle}>
                <View style={styles.logostyle}>
                    <Text style={styles.textstyle}>Talk It Out</Text>
                </View>
                <View style={styles.Headermessage}>
                    <Text style={styles.HMStyle}>Helper</Text>
                </View>
            </View>
            
          {/*Input Portion*/}
            <View style={styles.Title}>
                
                <View style={styles.EmailPosition}>
                    <Text style={styles.TitleStyle}>Email ID</Text>
                </View>
                
                <View style={styles.info}>
                    <Text style={styles.message}>Please enter your LUMS email address, we will be sending a verification code to this email before proceeding to the next steps of signup</Text>
                </View>
                
                <View style={styles.inputlayout}>
                    <TextInput 
                    style={styles.input}
                    placeholder="LUMS Email"
                    returnKeyType="done"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor='rgba(255,255,255,0.2)'
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    />
                </View>
                
                <View style={styles.submitbutton}>
                    <TouchableOpacity 
                    style={styles.button}
                    activeOpacity={0.5}
                    // onPress={() => this.props.navigation.navigate('HelperVerification')}
                    onPress={this.verify}
                    >
                        <Text style={styles.buttontext}>Send Code</Text>
                    </TouchableOpacity>
                </View>
            
            </View>
          </KeyboardAvoidingView>
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
    width: Dimensions.get("window").width / 2.5
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

  message: {
    alignSelf: "center",
    fontFamily: "Poppins",
    fontSize: RF(2.5),
    color: "#158ec1"
  },

  Title: {
    flex: 0.9,
    flexDirection: "column"
  },

  EmailPosition: {
    flex: 0.3,
    justifyContent: "center"
  },

  TitleStyle: {
    fontFamily: "Poppins",
    fontSize: RF(4.5),
    color: "#158ec1",
    alignSelf: "center"
  },

  info: {
    flex: 0.2,
    alignItems: "center",
    marginLeft: 5
  },

  inputlayout: {
    justifyContent: "center",
    padding: 20
  },

  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "white",
    paddingHorizontal: 10
  },

  submitbutton: {
    flex: 0.15
  }
});

AppRegistry.registerComponent("HelperEmail", () => HelperEmail)