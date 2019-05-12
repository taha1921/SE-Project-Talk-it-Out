import React, {Component} from 'react'
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    FlatList
} from 'react-native'

export default class SeekerConn extends Component{
    static navigationOptions ={
        title: 'Currently Connected',

    }
    
    constructor(props){
        super(props)
        this.state = {
            connected:[]
        }
    }
    
    render() {
        return (
             <View style={styles.viewstyle}>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('request')}>
                    <Text style={styles.buttontext}>Connect to a Helper</Text>
                </TouchableOpacity>

                <View style={{ padding: 20 }}></View>

                <View>
                    {
                        this.state.connected.length > 0 ?
                            <FlatList data={this.state.connected}
                                contentContainerStyle={styles.container}

                                renderItem={({item}) => (
                                    <View>
                                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Chatting", { uid: item.key })}>
                                            <Text style={styles.buttontext}> {item.key} </Text>
                                        </TouchableOpacity>
                                    </View>


                                )}
                            />
                            :
                            <View>
                                <Text>No helper connected yet</Text>
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
    }
});

AppRegistry.registerComponent("SeekerConn", () => SeekerConn);