import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView
} from 'react-native';
import RF from "react-native-responsive-fontsize";
import { Header, Icon, Body, Title, Left } from 'native-base'
import { Divider } from "react-native-elements";

export default class Awareness extends Component {

    static navigationOptions = {
        title: 'Home',
    }

    render() {
        return (
          <ScrollView style={styles.viewstyle}>
            <Header style={{ backgroundColor: "#1a2942" }}>
              <Left style={{ flex: 0.1 }}>
                <Icon
                  name="menu"
                  style={{ color: "white" }}
                  onPress={() => this.props.navigation.openDrawer()}
                />
              </Left>
              <Body style={{ alignItems: "flex-start" }}>
                <Title>Home</Title>
              </Body>
            </Header>

            <View style={styles.HeaderStyle}>
              <View style={styles.logostyle}>
                <Text style={styles.textstyle}>Talk It Out</Text>
              </View>
              <View style={styles.Headermessage}>
                <Text style={styles.HMStyle}>How to use</Text>
              </View>
            </View>

            <ScrollView style={{marginLeft: 5, marginRight: 5}}>
                {/* Disclaimer Section */}
                <Text style={styles.heading}>
                    Disclaimer
                </Text>
                <Text style={styles.info}>
                    1.  Please note this application is not a substitute for counselling, if you have a mental health issue, it is best to seek out a counsellor.
                </Text>
                <Text style={styles.info}>
                    2.  The purpose of this application is to provide an outlet to talk about your problems with someone willing to listen to you, it is best not to take any advise from a helper too strongly as they are not professionals 
                </Text>

                <View style={{ padding: 5 }}></View>
                <Divider style={{ backgroundColor: 'white', height: 5 }} />

                {/* Navigation Section */}
                <Text style={styles.heading}>
                    Navigation
                </Text>
                <Text style={styles.info}>
                    To move around in the application, you can tap the menu icon on the top left of the screen or swipe right from the left corner of the screen to open the menu. You can use this menu to navigate around the application
                </Text>

                <View style={{ padding: 5 }}></View>
                <Divider style={{ backgroundColor: 'white', height: 5 }} />

                {/* Chat Section */}
                <Text style={styles.heading}>
                    Chatting
                </Text>
                <Text style={styles.info}>
                    1.  To navigate to the chat interface open, the navigation menu and select chat
                </Text>
                <Text style={styles.info}>
                    2.  Seekers can tap on the "connect to helper" option and provide preferences to send a request for a helper. A helper will be connected to the seeker within 13 hours of the request generation
                </Text>
                <Text style={styles.info}>
                    3.  Helpers can tap on the "pending requests" option to accept a help request from a seeker 
                </Text>
                <Text style={styles.info}>
                    4.  Seekers can long press on the chat head (Helper 1 etc.) to view options regarding the helper.
                </Text>
                <Text style={styles.info}>
                    5. Please wait for about 3-5 seconds on the "Pending requests" and "Currently Connected" screens for the options to render
                </Text>

            </ScrollView>

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
        alignSelf: "stretch",
        borderRadius: 10,
        height: Dimensions.get("window").height / 15
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
        justifyContent: 'flex-start'
    },

    Headermessage: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    HMStyle: {
        fontFamily: "Poppins",
        fontSize: RF(4.5),
        color: "#158ec1"
    },

    HeaderStyle: {
        flexDirection: "column",
        justifyContent: "space-between"
    },

    viewstyle: {
        backgroundColor: "#1a2942"
    },

    heading : {
        fontSize: RF(3.2), 
        fontFamily: 'Poppins-SemiBold', 
        color: '#158ec1', 
        textDecorationLine: 'underline',
        paddingTop: 5
    },

    info : {
        fontSize: RF(2.4), 
        color: '#a5c7ff', 
        paddingBottom: 3, 
        fontFamily: 'Poppins-LightItalic'
    }
});

AppRegistry.registerComponent("Awareness", () => Awareness)