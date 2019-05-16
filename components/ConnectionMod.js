<<<<<<< HEAD
import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    FlatList,
    AsyncStorage,
} from 'react-native';
import * as firebase from "firebase";
import 'firebase/firestore';
import Fire from '../Fire.js';
import RF from "react-native-responsive-fontsize"


export default class ConnectionMod extends Component {

    static navigationOptions = {
        title: 'Currently Connected',
    }

    constructor(props) {
        super(props)
        this.state = {
            uidlist: []
        }
    }

    refresh = async (key) => {
        var getuid = this.state.uidlist
        getuid = this.state.uidlist.concat(key);
        await this.setState({
            uidlist: getuid,
        });
    }

    SearchConnections = uid => {
        uid = Fire.shared.uid

        var ref1 = firebase.database().ref(Fire.shared.uid + '/ToBeDeleted/');
        ref1.once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {

                var value = childSnapshot.val();
                AsyncStorage.removeItem("messages/" + value.uid);
                var key1 = childSnapshot.key
                ref1.child(key1).remove()

            });
        });

        var ref = firebase.database().ref(uid + '/CurrentlyConnectedSeeker/');
        const temp = this
        ref.on('value', function (snapshot) {
            try {

                // alert(uid)

                snapshot.forEach(function (childSnapshot) {

                    var value = childSnapshot.val();
                    console.log(value)
                    if (value.uid) {
                        var present = false

                        temp.state.uidlist.forEach(element => {
                            if (element.key == value.uid) {
                                present = true
                            }
                        })

                        if (!present) {
                            var joined = temp.state.uidlist.concat({ key: value.uid });
                            // alert(key)
                            temp.setState({
                                uidlist: joined,
                            });
                        }


                    }
                    else {
                        alert("lol")
                    }

                });
            } catch (error) {
                alert(error)
            }
        });
    }

    componentDidMount() {
        var uid = Fire.shared.uid
        var temp = this
        if (!uid) {
            setTimeout(function () { temp.SearchConnections(uid) }, 2000)
        } else {
            this.SearchConnections(uid)
        }
    }

    componentWillUnmount() {
        var uid = Fire.shared.uid

        var ref = firebase.database().ref(uid + '/CurrentlyConnectedSeeker/');

        ref.off();
    }


    render() {
        return (
            <View style={styles.viewstyle}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('seekermod')}>
                    <Text style={styles.buttontext}>See Pending Requests</Text>
                </TouchableOpacity>
                <View style={{ padding: 20 }}></View>
                <View>
                    {
                        this.state.uidlist.length > 0 ?
                            <FlatList data={this.state.uidlist}
                                contentContainerStyle={styles.container}

                                renderItem={({ item, index }) => (
                                    <View style={{ padding: 10 }}>
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => this.props.navigation.navigate("chat", { uid: item.key })}
                                        >
                                            <Text style={styles.buttontext}> Seeker {index + 1} </Text>
                                        </TouchableOpacity>
                                    </View>


                                )}
                            />
                            :
                            <View>
                                <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'white', fontFamily: 'Poppins-Medium', fontSize: RF(4) }}>No seeker connected yet</Text>
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
        fontFamily: "Poppins-Medium",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        alignSelf: "stretch",
        height: Dimensions.get("window").height / 15
    },

    buttontext: {
        fontFamily: "Poppins-Medium",
        fontSize: 20,
        color: "black"
    },

    container: {
        justifyContent: "space-evenly",
        // flex: 0.8,
    }
})

AppRegistry.registerComponent("ConnectionMod", () => ConnectionMod);
=======
import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  AsyncStorage
} from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import Fire from "../Fire.js";
import RF from "react-native-responsive-fontsize";

export default class ConnectionMod extends Component {
  static navigationOptions = {
    title: "Currently Connected"
  };

  constructor(props) {
    super(props);
    this.state = {
      uidlist: []
    };
  }

  refresh = async key => {
    var getuid = this.state.uidlist;
    getuid = this.state.uidlist.concat(key);
    await this.setState({
      uidlist: getuid
    });
  };

  SearchConnections = uid => {
    uid = Fire.shared.uid;

    var ref1 = firebase.database().ref(Fire.shared.uid + "/ToBeDeleted/");
    ref1.once("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var value = childSnapshot.val();
        AsyncStorage.removeItem("messages/" + value.uid);
        var key1 = childSnapshot.key;
        ref1.child(key1).remove();
      });
    });

    var ref = firebase.database().ref(uid + "/CurrentlyConnectedSeeker/");
    const temp = this;
    ref.on("value", function(snapshot) {
      try {
        // alert(uid)

        snapshot.forEach(function(childSnapshot) {
          var value = childSnapshot.val();
          console.log(value);
          if (value.uid) {
            var present = false;

            temp.state.uidlist.forEach(element => {
              if (element.key == value.uid) {
                present = true;
              }
            });

            if (!present) {
              var joined = temp.state.uidlist.concat({ key: value.uid });
              // alert(key)
              temp.setState({
                uidlist: joined
              });
            }
          } else {
            alert("lol");
          }
        });
      } catch (error) {
        alert(error);
      }
    });
  };

  componentDidMount() {
    var uid = Fire.shared.uid;
    var temp = this;
    if (!uid) {
      setTimeout(function() {
        temp.SearchConnections(uid);
      }, 2000);
    } else {
      this.SearchConnections(uid);
    }
  }

  componentWillUnmount() {
    var uid = Fire.shared.uid;

    var ref = firebase.database().ref(uid + "/CurrentlyConnectedSeeker/");

    ref.off();
  }

  render() {
    return (
      <View style={styles.viewstyle}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("seekermod")}
        >
          <Text style={styles.buttontext}>See Pending Requests</Text>
        </TouchableOpacity>
        <View style={{ padding: 20 }} />
        <View>
          {this.state.uidlist.length > 0 ? (
            <FlatList
              data={this.state.uidlist}
              contentContainerStyle={styles.container}
              renderItem={({ item, index }) => (
                <View style={{ padding: 10 }}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                      this.props.navigation.navigate("chat", { uid: item.key })
                    }
                  >
                    <Text style={styles.buttontext}> Seeker {index + 1} </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          ) : (
            <View>
              <Text
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  color: "white",
                  fontFamily: "Poppins-Medium",
                  fontSize: RF(4)
                }}
              >
                No seeker connected yet
              </Text>
            </View>
          )}
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
    fontFamily: "Poppins-Medium",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    alignSelf: "stretch",
    height: Dimensions.get("window").height / 15
  },

  buttontext: {
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    color: "black"
  },

  container: {
    justifyContent: "space-evenly"
    // flex: 0.8,
  }
});

AppRegistry.registerComponent("ConnectionMod", () => ConnectionMod);
>>>>>>> c6c8618b80797c175578778a7caa499133510da4
