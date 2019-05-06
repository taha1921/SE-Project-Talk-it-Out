import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import RF from "react-native-responsive-fontsize";

export default class SignUpAs extends Component {

    static navigationOptions = {
      title: 'Sign Up',
    }

    render() {
        return (
          <View style={styles.viewstyle}>
            <View style={{flex: 0.8}}>
              <View style={styles.HeaderStyle}>
                <View style={styles.logostyle}>
                  <Text style={styles.textstyle}>Talk It Out</Text>
                </View>
                <View style={styles.Headermessage}>
                  <Text style={styles.HMStyle}>Sign Up As</Text>
                </View>
              </View>
              <View style={styles.seekeroption}>
                  <Text style={styles.message}>Looking for someone to talk to? This ones for you</Text>
                    <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.5}
                    onPress={() => this.props.navigation.navigate('Seekersignup')}
                    >
                        <Text style={styles.buttontext}>Seeker</Text> 
                    </TouchableOpacity>
              </View>
              <View style={styles.helperoption}>
                  <Text style={styles.message}>Looking to help someone out? Try this out</Text>
                    <TouchableOpacity 
                    style={styles.button}
                    activeOpacity={0.5}
                    onPress={() => this.props.navigation.navigate('Helpersignup')}>
                        <Text style={styles.buttontext}>Helper</Text>
                    </TouchableOpacity>
              </View>
            </View>
            <View style={{flex:0.2}}></View>
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
    justifyContent: 'flex-start'
  },

  Headermessage: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
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

  seekeroption: {
    flex: 0.45,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  helperoption: {
    flex: 0.45,
  },

  message: {
    alignSelf: "center",
    fontFamily: "Poppins-Light",
    fontSize: RF(2.5),
    color: "#158ec1",
  }
});

AppRegistry.registerComponent("SignUpAs", () => SignUpAs)