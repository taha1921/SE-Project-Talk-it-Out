import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';

export default class OpeningScreen extends Component {
    
    render() {
        return (
          <View style={styles.viewstyle}>
            <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
                <Text
                    adjustsFontSizeToFit={true}
                    style={styles.textstyle}
                >
                Talk It Out
                </Text>
            </View>
            <View style= {{flex: 0.5, justifyContent: 'space-evenly', }}>
                <TouchableOpacity 
                activeOpacity={0.5} 
                style={styles.button}
                >
                    <Text style={styles.buttontext}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                activeOpacity={0.5} 
                style={styles.button}
                onPress={() => this.props.navigation.navigate('SignUpOptions')}>
                    <Text style={styles.buttontext}>Sign Up</Text>
                </TouchableOpacity>
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
    width: Dimensions.get("window").width/2,
    borderRadius: 20
  },

  buttontext: {
    fontFamily: "Poppins",
    fontSize: 30,
    color: "white"
  },

  textstyle: {
    fontFamily: "Poppins",
    fontSize: 30,
    color: "#158ec1"
  },

  viewstyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#1a2942"
  }
});

AppRegistry.registerComponent("OpeningScreen", () => OpeningScreen)