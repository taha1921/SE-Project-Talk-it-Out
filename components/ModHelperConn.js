import React, { Component } from 'react';
import {
   
    View, 
    AppRegistry,
    StyleSheet,
    Dimensions,
    ScrollView,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import RF from "react-native-responsive-fontsize";

export default class ModHelperConn extends Component{
    static navigationOptions = {
        title: 'Moderator as Seeker',
    }

    constructor(props) {
        super(props)
        this.state = {
            text: '',
        };
    }
    TextUP = (val) => {
        alert(val)
        this.setState({ text: val })
        // CODE HERE
    }
 
    
    
    render() {
        return (
            <View style={styles.viewstyle}>

                    <View style={styles.Header}>
                        <Text style={styles.HM}>Connection with Helper</Text>
                    </View>

                <View style={{ justifyContent: "center", paddingTop: 50 }} >
                    <Text style={styles.HMStyle2}>Enter Helper ID</Text>

                   
                    <TextInput
                        style={{backgroundColor: "white"}}
                        maxHeight={Dimensions.get('window').height/2}
                        onChangeText={(text) => this.setState({ text })} />

                    <View style={{padding:25}}></View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.TextUP(this.state.text)} >
                        <Text style={styles.buttontext}>Submit</Text>
                    </TouchableOpacity>

                </View>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#244882",
        padding: 10,
        alignSelf: "center",
        width: Dimensions.get("window").width / 2.5,
        borderRadius: 20,
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
    },
    myEmptyStarStyle: {
        color: 'white',
    },

    buttontext: {
        fontFamily: "Poppins",
        fontSize: 20,
        color: "white"
    },

    Header: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 10
    },

    HM: {
        fontFamily: "Poppins-Bold",
        fontSize: RF(3),
        color: "#158ec1",
    },

    HMStyle2: {
        fontFamily: "Poppins-Regular",
        fontSize: RF(2.5),
        color: "#158ec1",
        alignSelf: 'center',
        paddingBottom: 20
    },

    viewstyle: {
        flex : 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#1a2942"
    },

});

AppRegistry.registerComponent("ModHelperConn", () => ModHelperConn)