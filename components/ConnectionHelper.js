import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    FlatList
} from 'react-native';

export default class ConnectionHelper extends Component{

    static navigationOptions = {
        title: 'Currently Connected',
    }

    constructor(props){
        super(props)
        this.state={
            uidlist:[]
        }
    }

    refresh = async (key) =>{
        var getuid = this.state.uidlist
        getuid = this.state.uidlist.concat(key);
        await this.setState({
            uidlist: getuid,
          });
          alert(this.state.uidlist[0].key)
    }

    render()
    {
        return (
            <View style={styles.viewstyle}>
                <TouchableOpacity 
                style={styles.button}
                onPress={() => this.props.navigation.navigate('connection', {onGoBack: (key) => this.refresh(key),})}>
                  <Text style={styles.buttontext}>See Pending Requests</Text>
                </TouchableOpacity>
                <View style={{padding:20}}></View>
                <View>
                    {
                        this.state.uidlist.length > 0 ?
                        <FlatList data = {this.state.uidlist}
                        contentContainerStyle={styles.container}
                        
                            renderItem={({ item, index }) => (
                                <View>
                                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Chatting",{uid: item.key})}>
                                        <Text style={styles.buttontext}> Seeker {index+1} </Text>
                                    </TouchableOpacity>
                                </View>


                            )}
                        />  
                    :
                    <View>
                        <Text>No seekers connected yet</Text>
                    </View>
                    }
                
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    viewstyle: {
        flex: 1,
        backgroundColor: "#1a2942"
    },

    button: {
        fontFamily: "Poppins",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        alignSelf: "stretch",
        height: Dimensions.get("window").height / 15
    },

    buttontext: {
        fontFamily: "Poppins",
        fontSize: 20,
        color: "black"
    },

    container: {
        justifyContent: "space-evenly",
        // flex: 0.8,
    }
})

AppRegistry.registerComponent("ConnectionHelper", () => ConnectionHelper);