import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    AsyncStorage
} from 'react-native';
import RF from "react-native-responsive-fontsize";

export default class Awareness extends Component {

    static navigationOptions = {
        title: 'Login',
    }
    logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <View style={styles.viewstyle}>

                <View style={styles.HeaderStyle}>
                    <View style={styles.logostyle}>
                        <Text style={styles.textstyle}>Talk It Out</Text>
                    </View>
                    <View style={styles.Headermessage}>
                        <Text style={styles.HMStyle}>Awareness</Text>
                    </View>
                </View>

                <View style={{ flex: 0.75, justifyContent: "space-evenly" }}>

                    <View>
                        <TouchableOpacity style={styles.button}
                            onPress={() => this.props.navigation.navigate('GenAware')}>
                            <Text style={styles.buttontext}>General Awareness</Text>

                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.button}
                            onPress={() => this.props.navigation.navigate('SuicideHotlines')}
                        >
                            <Text style={styles.buttontext}>Suicide Hotlines</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.button}
                            onPress={() => this.props.navigation.navigate('Therapist')}>
                            <Text style={styles.buttontext}>Therapists and Counsellors</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.button}
                            onPress={() => this.props.navigation.navigate('OnlineServices')}>
                            <Text style={styles.buttontext}>Online Services</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button}
                            onPress={this.logout}>
                            <Text style={styles.buttontext}>Log Out</Text>
                        </TouchableOpacity>
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
        fontFamily: "Poppins",
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

AppRegistry.registerComponent("Awareness", () => Awareness)