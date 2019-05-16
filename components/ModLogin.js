import React, { Component } from 'react';
import {
<<<<<<< HEAD
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    AsyncStorage,
=======
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
>>>>>>> c6c8618b80797c175578778a7caa499133510da4
} from 'react-native';
import RF from "react-native-responsive-fontsize";
import * as firebase from "firebase";




export default class ModLogin extends Component {
<<<<<<< HEAD
  
    static navigationOptions = {
      title: 'Moderator Login',
    }

    render() {
        return (
          <View style={styles.viewstyle}>
              
              <View style={styles.HeaderStyle}>
                <View style={styles.logostyle}>
                  <Text style={styles.textstyle}>Talk It Out</Text>
                </View>
                <View style={styles.Headermessage}>
                  <Text style={styles.HMStyle}>Login As</Text>
                </View>
              </View>
              
              <View style = {{flex: 0.6, justifyContent: "space-evenly"}}>
              
                 <View>
                    <TouchableOpacity style={styles.button}
                    onPress={() => this.props.navigation.navigate('helpermod')}>
                        <Text style={styles.buttontext}>Seeker</Text> 
                        
                    </TouchableOpacity>
                 </View>   
              
                <View>
                    <TouchableOpacity style={styles.button}
                    onPress={() => this.props.navigation.navigate('connMod')}
                    >
                        <Text style={styles.buttontext}>Helper</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.button}
                    onPress = {
                      () => {
                        const temp = this.props.navigation
                        firebase.auth().signOut().then(async function () {
                          await AsyncStorage.removeItem('usertype');
                          temp.navigate('Auth');
                        }).catch(function (error) {
                          // An error happened.
                          alert(error)
                        });
                      }
                    }
                    >
                        <Text style={styles.buttontext}>LogOut </Text>
                    </TouchableOpacity>
                </View>
                
              
              </View>
=======

  static navigationOptions = {
    title: 'Moderator Login',
  }

  render() {
    return (
      <View style={styles.viewstyle}>

        <View style={styles.HeaderStyle}>
          <View style={styles.logostyle}>
            <Text style={styles.textstyle}>Talk It Out</Text>
          </View>
          <View style={styles.Headermessage}>
            <Text style={styles.HMStyle}>Login As</Text>
          </View>
        </View>

        <View style={{ flex: 0.6, justifyContent: "space-evenly" }}>

          <View>
            <TouchableOpacity style={styles.button}
              onPress={() => this.props.navigation.navigate('helpermod')}>
              <Text style={styles.buttontext}>Seeker</Text>

            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.button}
              onPress={() => this.props.navigation.navigate('connMod')}
            >
              <Text style={styles.buttontext}>Helper</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.button}
              onPress={
                () => {
                  const temp = this.props.navigation
                  firebase.auth().signOut().then(async function () {
                    await AsyncStorage.removeItem('usertype');
                    temp.navigate('Auth');
                  }).catch(function (error) {
                    // An error happened.
                    alert(error)
                  });
                }
              }
            >
              <Text style={styles.buttontext}>LogOut </Text>
            </TouchableOpacity>
>>>>>>> c6c8618b80797c175578778a7caa499133510da4
          </View>


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
    justifyContent: "space-between"
  },

  viewstyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#1a2942"
  },


});

AppRegistry.registerComponent("ModLogin", () => ModLogin)