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
import { Header, Icon, Body, Title, Left } from 'native-base'

export default class Awareness extends Component {

    static navigationOptions = {
        title: 'Home',
    }

    logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    nav = async () => {
        const type = await AsyncStorage.getItem('usertype')

        if (type == 'Helper') {
            this.props.navigation.navigate('Helper')
        }

        else if (type == 'Seeker') {
            this.props.navigation.navigate('Seeker')
        }
    }

    render() {
        return (
            <View style={styles.viewstyle}>
                <Header style={{ backgroundColor: '#1a2942'}}>
                    <Left style = {{flex:0.1,}}>
                    <Icon name= "menu" style={{color: 'white'}} onPress={() => this.props.navigation.openDrawer()}/>
                    </Left>
                    <Body style = {{alignItems: 'flex-start'}}>
                        <Title>Home</Title>
                    </Body>
                </Header>
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
                            onPress={() => this.props.navigation.navigate('chat')}>
                            <Text style={styles.buttontext}>Chat</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button}
                            onPress={this.logout}>
                            <Text style={styles.buttontext}>Log Out</Text>
                        </TouchableOpacity>
                    </View>

                <TouchableOpacity onPress={async () => alert(await AsyncStorage.getItem('usertype'))}><Text style={{color: 'white'}}>Press</Text></TouchableOpacity>
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
        alignSelf: "stretch",
        // width: Dimensions.get("window").width / 2.5,
        borderRadius: 10,
        height: Dimensions.get("window").height/15

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
        // flexDirection: "column",
        // justifyContent: "flex-start",
        backgroundColor: "#1a2942"
    },


});

AppRegistry.registerComponent("Awareness", () => Awareness)
