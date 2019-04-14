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


export default class HelperCode extends Component {

    render() {
        return (
            <KeyboardAvoidingView behavior="height" style={styles.viewstyle}>
                
                {/*Header Portion*/}
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
                    
                    <View style={styles.TitlePosition}>
                        <Text style={styles.TitleStyle}>Verification Code</Text>
                    </View>
                    
                    <View style={styles.info}>
                        <Text style={styles.message}>Please enter the code we sent to your email</Text>
                    </View>
                    
                    <View style={styles.inputlayout}>
                        <TextInput
                            style={styles.input}
                            placeholder="Verification code"
                            returnKeyType="done"
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholderTextColor='rgba(255,255,255,0.2)' />
                    </View>
                    
                    <View style={styles.submitbutton}>
                        <TouchableOpacity 
                        style={styles.button}
                        activeOpacity={0.5}
                        onPress={() => this.props.navigation.navigate('Helpersignup')}>
                            <Text style={styles.buttontext}>Verify</Text>
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
        fontSize: RF(2.5),
        color: "#158ec1"
    },

    Title: {
        flex: 0.9,
        flexDirection: 'column'
    },

    TitlePosition: {
        flex: 0.3,
        justifyContent: 'center'
    },

    TitleStyle: {
        fontFamily: "Poppins",
        fontSize: RF(4.5),
        color: "#158ec1",
        alignSelf: 'center'
    },

    info: {
        flex: 0.20,
        alignSelf: 'center',
        marginLeft: 15,
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

    submitbutton: {
        flex: 0.15,
    }

});

AppRegistry.registerComponent("HelperCode", () => HelperCode)