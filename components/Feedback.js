import React, { Component } from "react";
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  View,
  Picker,
} from "react-native";
import DatePicker from "react-native-datepicker";
import RF from "react-native-responsive-fontsize";
import {CheckBox} from 'react-native-elements'
import * as firebase from "firebase";
import 'firebase/firestore';
// import Stars from 'react-native-stars';
import StarRating from 'react-native-star-rating';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 
export default class HelperSignUp extends Component {
    
    static navigationOptions = {
        title: 'Helper Sign Up',
    }
    
    constructor(props) {
        super(props)
        this.state = { 
            stars : 0,
            text : '',
        };
    }

    update = (val) =>{
        alert(val)
        this.setState({stars: val})
    }
    TextUP = (val) =>{
        alert(val)
        this.setState({text: val})
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
            <View style = {{justifyContent: "center"}} >
            <Text style={styles.HMStyle2}>How was your experience?</Text>
                  
            <View style={{alignItems:'center'}}>
            <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={this.state.stars}
                selectedStar={(rating) => this.update(rating)}
                fullStarColor={'red'}
            />

            </View>
            <Text style={styles.HMStyle2}>Any comments?</Text>
            <TextInput
            style={{height: 200, backgroundColor: "white"}}
            onChangeText={(text) => this.setState({text})}/>
            
            
            <TouchableOpacity 
            style = {styles.button}
            onPress={() => this.TextUP(this.state.text)} >
            <Text style={styles.buttontext}>Submit</Text>
            </TouchableOpacity>
        
            </View>
                  
            
           
            </ScrollView>
        );
    }
}

styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#244882",
    padding: 10,
    alignSelf: "center",
    width: Dimensions.get("window").width / 2.5,
    borderRadius: 20
  },
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    // textShadowOffset: {width: 1, height: 1},
    // textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
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
    fontFamily: "Poppins-Medium",
    fontSize: 30,
    color: "#158ec1",
    // alignItems: "center",

  },
  
  HMStyle2: {
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    color: "#158ec1",
    // alignItems: "center",

  },

  HeaderStyle: {
    flex: 0.1,
    flexDirection: "column",
    justifyContent: "space-between"
    // backgroundColor: "purple"
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