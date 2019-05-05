import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';
import RF from 'react-native-responsive-fontsize'

export default class ConnectionSeeker extends Component {
    render() {
        return (
             <View style={styles.viewstyle}>
                <Text style={styles.textstyle}>Select Preferences for your helper and we'll try our best to find you a good match</Text>
                <Text style={{ fontFamily: 'normal' }}>  normal </Text>
                <Text style={{ fontFamily: 'notoserif' }}>  notoserif </Text>
                <Text style={{ fontFamily: 'sans-serif' }}>  sans-serif </Text>
                <Text style={{ fontFamily: 'sans-serif-light' }}>  sans-serif-light </Text>
                <Text style={{ fontFamily: 'sans-serif-thin' }}>  sans-serif-thin </Text>
                <Text style={{ fontFamily: 'sans-serif-condensed' }}>  sans-serif-condensed </Text>
                <Text style={{ fontFamily: 'sans-serif-medium' }}>  sans-serif-medium </Text>
                <Text style={{ fontFamily: 'serif' }}>  serif </Text>
                <Text style={{ fontFamily: 'Roboto' }}>  Roboto </Text>
                <Text style={{ fontFamily: 'monospace' }}>  monospace </Text> 
             </View>
        );
    }
}

const styles = StyleSheet.create({
   viewstyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#1a2942"
   },

   textstyle: {
    fontFamily: 'Metropolis'
   }
    
})

AppRegistry.registerComponent("ConnectionSeeker", () => ConnectionSeeker)