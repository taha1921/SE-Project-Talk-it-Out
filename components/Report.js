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
import * as firebase from "firebase";


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

    get uid() {
        return this.props.navigation.state.params.uid
    }

    TextUP = (val) => {
        this.setState({ text: val })
        var ref = firebase.database().ref('/Reports/'+this.uid)
        const rep = {
            Average:this.state.stars,
            Count:1,
        }
        var temp = this
        var ratingRef = firebase.database().ref('/Reports/'+this.uid+'/Rating/')
        ref.once('value', function (snapshot) {
            if (!snapshot.hasChild("Rating")) {
                ratingRef.set(rep)
            }
            else{
                var value = snapshot.val()
                var count = value.Rating.Count
                var average = value.Rating.Average
                var total = count*average
                total = total +temp.state.stars
                count = count + 1
                average = total/count
                var newrep = {
                    Average: average,
                    Count: count
                }
                ratingRef.set(newrep)
            }
        });

        var report = {
            "Rating": this.state.stars,
            "Report":this.state.text
        }
        ref.push(report)
        
        
    }
    
    render() {
        return (
            <ScrollView contentContainerStyle={styles.viewstyle}>

                    <View style={styles.Header}>
                        <Text style={styles.HM}>Feedback</Text>
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
        fontSize: RF(4.5),
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
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#1a2942"
    },

});

AppRegistry.registerComponent("Report", () => Report)