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
} from "react-native";
import DatePicker from "react-native-datepicker";


export default class HelperSignUp extends Component {
    
    constructor(props) {
        super(props)
        this.state = { date: "2016-05-15" }
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
                <View style={styles.inputlayout}>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        returnKeyType="done"
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholderTextColor='rgba(255,255,255,0.2)'/>
                </View>
                <View style={styles.inputlayout}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        returnKeyType="done"
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholderTextColor='rgba(255,255,255,0.2)' />
                </View>
                    <View style={styles.inputlayout}>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        returnKeyType="done"
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholderTextColor='rgba(255,255,255,0.2)' />
                </View>
                <View style={styles.inputlayout}>
                    <TextInput
                        style={styles.input}
                        placeholder="Full name"
                        returnKeyType="done"
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholderTextColor='rgba(255,255,255,0.2)' />
                </View>
                <DatePicker
                    style={{ width: Dimensions.get('window').width/1.5 }}
                    date={this.state.date}
                    mode="date"
                    placeholder="Date of Birth"
                    format="YYYY-MM-DD"
                    minDate="1990-01-01"
                    maxDate="2018-12-31"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        placeholderText: {
                            backgroundColor: 'white'
                        },
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => { this.setState({ date: date }) }}
                />
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
        fontSize: 30,
        color: "#158ec1"
    },

    HeaderStyle: {
        flex: 0.1,
        flexDirection: "column",
        justifyContent: "space-between",
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
        flexDirection: 'column',
        justifyContent: "space-evenly",
        // backgroundColor: 'red'
    },

    inputlayout: {
        justifyContent: 'center',
        padding: 20
    },

    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: 'white',
        paddingHorizontal: 10
    },
});

AppRegistry.registerComponent("HelperEmail", () => HelperEmail);