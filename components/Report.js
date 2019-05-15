import React, { Component } from 'react'
import {
    View, 
    AppRegistry,
    StyleSheet,
    Dimensions,
    ScrollView,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native'
import "firebase/firestore";
import StarRating from "react-native-star-rating";
import RF from 'react-native-responsive-fontsize'

export default class Report extends Component{
    static navigationOptions = {
        title: 'Feedback',
    }

    constructor(props) {
        super(props)
        this.state = {
            stars: 0,
            text: '',
        };
    }

    update = (val) => {
        this.setState({ stars: val })
    }
    TextUP = (val) => {
        this.setState({ text: val })
    }
    
    render() {
        return (
            <ScrollView contentContainerStyle={styles.viewstyle}>

                    <View style={styles.Headermessage}>
                        <Text style={styles.HMStyle}>Feedback</Text>
                    </View>

                <View style={{ justifyContent: "center", paddingTop: 50 }} >
                    <Text style={styles.HMStyle2}>How was your experience?</Text>

                    <View style={{ alignItems: 'center', paddingBottom: 100, paddingTop: 20}}>
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
                        style={{backgroundColor: "white"}}
                        autoGrow={true}
                        multiline={true}
                        maxHeight={Dimensions.get('window').height/2}
                        onChangeText={(text) => this.setState({ text })} />

                    <View style={{padding:50}}></View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.TextUP(this.state.text)} >
                        <Text style={styles.buttontext}>Submit</Text>
                    </TouchableOpacity>
                    <View style={{padding:90}}></View>

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

    Headermessage: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 10
    },

    HMStyle: {
        fontFamily: "Poppins-Bold",
        fontSize: RF(4.5),
        color: "#158ec1",
        // alignItems: "center",

    },

    HMStyle2: {
        fontFamily: "Poppins-Regular",
        fontSize: RF(2.5),
        color: "#158ec1",
        alignSelf: 'center',
        paddingBottom: 20
    },

    viewstyle: {
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

AppRegistry.registerComponent("Report", () => Report)