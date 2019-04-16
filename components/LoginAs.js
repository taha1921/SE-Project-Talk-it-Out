import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';
// import { Directions } from 'react-native-gesture-handler';


export default class LoginAs extends Component {

    render() {
        return (
          <View style={styles.viewstyle}>
            {/* <View style={{flex: 0.9}}> */}
              <View style={styles.HeaderStyle}>
                <View style={styles.logostyle}>
                  <Text style={styles.textstyle}>Talk It Out</Text>
                </View>
                <View style={styles.Headermessage}>
                  <Text style={styles.HMStyle}>Login As</Text>
                </View>
              </View>
              <View style = {{flex: 0.75, justifyContent: "space-evenly"}}>
                 <View style={styles.seekeroption}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}>Seeker</Text> 
                    </TouchableOpacity>
                 </View>   
                <View style={styles.modoption}>
                    <TouchableOpacity style={styles.button}
                    onPress={() => this.props.navigation.navigate('HelperLogin')}
                    >
                        <Text style={styles.buttontext}>Helper</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.helperoption}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}>Moderator</Text>
                    </TouchableOpacity>
                </View>
             
              </View>
              
              
            {/* </View> */}
            {/* <View style={{flex:0.2}}></View> */}
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
    width: Dimensions.get("window").width / 2.5
  },

  buttontext: {
    fontFamily: "Poppins",
    fontSize: 20,
    color: "white"
  },

  textstyle: {
    fontFamily: "Poppins",
    fontSize: 14,
    color: "#536787"
  },

  logostyle: {
    flex: 0.18
  },

  Headermessage: {
    flex: 0.7,
    paddingTop: 15
  },

  HMStyle: {
    fontFamily: "Poppins",
    fontSize: 30,
    color: "#158ec1"
  },

  HeaderStyle: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  viewstyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#1a2942"
  },

  seekeroption: {
    paddingTop: 0,
    justifyContent: 'center',
    // backgroundColor: 'red'
  },

  helperoption: {
    // backgroundColor: 'green'

  },
  modoption: {
    // backgroundColor: 'pink'
  },

  message: {
    alignSelf: "center",
    fontFamily: "Poppins",
    fontSize: 17,
    color: "#158ec1",
  }
});

//AppRegistry.registerComponent("SignUpAs", () => SignUpAs)
