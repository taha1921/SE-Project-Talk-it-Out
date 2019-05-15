import React, { Component } from 'react';
import {
    ActivityIndicator,
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

export default class LoginModerator extends Component {
  
  static navigationOptions = {
    title: 'Moderator Login',
  }

  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        loader: false,
        ButtonState: false
        
    }
}
   verify = () => { 
     if (this.state.email == "" || this.state.password == "")
     {
      if (this.state.email == ""&& this.state.password != "")
      {
        alert("Enter Email")
      }
      else
      {
        if (this.state.email != "" && this.state.password == "")
        {
          alert("Enter Password")
        }
        else
        {
          alert("Enter email and Password")
        }
      
      }
     }
     else
     {
      alert(this.state.password)
      this.setState({loader:true, ButtonState: true})
     

     }
      
}

    render() {
        return (
          <View style={styles.viewstyle}>
            <View style={styles.HeaderStyle}>
                <View style={styles.logostyle}>
                    <Text style={styles.textstyle}>Talk It Out</Text>
                </View>
                <View style={styles.Headermessage}>
                    <Text style={styles.HMStyle}>Moderator</Text>
                </View>
            </View>
            
            <View style={styles.Title}>
                
                <View style={styles.info}>
                    <Text style={styles.message}>Email Address</Text>
                </View>
 
                <View style={styles.inputlayout}>
                    <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    returnKeyType="done"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(email)=>this.setState({email})}
                    value={this.state.email}
                    placeholderTextColor='rgba(255,255,255,0.5)'/>
                </View>
                <View style={styles.info}>
                    <Text style={styles.message}>Password</Text>
                </View>
                <View style={styles.inputlayout}>
                    <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    returnKeyType="go"
                    keyboardType="default"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={(password)=>this.setState({password})}
                    value={this.state.password}               
                    autoCorrect={false}
                    placeholderTextColor='rgba(255,255,255,0.5)'/>
                </View>
                <View style={styles.submitbutton}>
                    <TouchableOpacity style={styles.button}
                    onPress={this.verify}
                    disabled={this.state.ButtonState}
                    >
                        <Text 
                        style={styles.buttontext}
                        activeOpacity={0.5}>Login</Text>
                    </TouchableOpacity>
                    
                </View>
                   {
                      this.state.loader ?
                      <ActivityIndicator size = "large" style = {{flex: 0.9}}/>
                      :
                      <Text></Text>

                    }

               </View>
          </View>
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
      justifyContent: "flex-start",
    },

    Headermessage: {
      flex: 0.7,
      justifyContent: "center",
      alignItems: "center"
    },

    HMStyle: {
      fontFamily: "Poppins-Medium",
      fontSize: RF(4.5),
      color: "#158ec1"
    },

    HeaderStyle: {
      flex: 0.1,
      flexDirection: "column",
      justifyContent: "space-between",
    },

    viewstyle: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      backgroundColor: "#1a2942"
    },

    message: {
      alignSelf: "center",
      fontFamily: "Poppins-Light",
      fontSize: 17,
      color: "#158ec1"
    },

    Title: {
      flex: 0.7,
      flexDirection: 'column',
      paddingTop: 10
    },

    info: {
      flex: 0.07,
      alignSelf: 'center',
    },

    inputlayout: {
      flex: 0,
      justifyContent: 'center',
      padding: 20,
    },

    input: {
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.2)',
      color: 'white',
      paddingHorizontal: 10,
      borderRadius: 20
    },

    submitbutton: {
      flex: 0.1,
    }

});

AppRegistry.registerComponent("LoginModerator", () => LoginModerator);