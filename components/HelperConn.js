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
    KeyboardAvoidingView,
    AsyncStorage,
} from 'react-native';
import RF from "react-native-responsive-fontsize";
import * as firebase from "firebase";
import "firebase/firestore";
import { ScrollView, FlatList } from 'react-native-gesture-handler';


export default class HelperConn extends Component {
  
  static navigationOptions = {
    title: 'Chat',
  }


  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        loader: false,
        ListOfReq: [{key: "A"},{key: "B"},{key: "C"},{key: "D"},{key: "E"},{key: "F"},{key: "G"},{key: "H"}]
        
    }
}
 

    render() {
        return (
          <View style={styles.viewstyle}>
              <View style={styles.HeaderStyle}>
              <View style={styles.logostyle}>
                          <Text style={styles.textstyle}>Talk It Out </Text>
                      </View>    
                      <View style={styles.Headermessage}>
                        <Text style={styles.HMStyle}>Connection Screen</Text>
                    </View>

              </View>
            <View style = {{flex : 1}}>
            {
              
              this.state.ListOfReq.length > 0 ?
              <FlatList  data = {this.state.ListOfReq}
              contentContainerStyle={styles.container}

              renderItem={({item})=>(
                <View>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('')}>
                    <Text style={styles.buttontext}> {item.key} </Text>
                </TouchableOpacity>
                </View>
    

              )}
              />
              
            :
            <View>
            <Text> NO Request </Text>

            </View>


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
    borderRadius: 20,
    margin: 10,
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
    fontFamily: "Poppins",
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
    fontFamily: "Poppins",
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
  },
  button: {
    fontFamily: "Poppins",
    alignItems: "center",
    backgroundColor: "#244882",
    padding: 10,
    alignSelf: "center",
    width: Dimensions.get("window").width,
    borderRadius: 20
},
container :{
  justifyContent : "space-evenly",
  flex : 0.8,
}

});

AppRegistry.registerComponent("HelperConn", () => HelperConn)