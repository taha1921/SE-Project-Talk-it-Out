import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Linking, TouchableOpacity } from 'react-native';
import RF from "react-native-responsive-fontsize"
import { Header, Icon, Body, Title, Left } from "native-base";
import {Divider} from "react-native-elements";

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Online Services',
    }
    
    openurl = (link) => {
        Linking.openURL(link).catch(err =>
            alert("An error occurred", err)
        );
    }
    
    render() {

        const list = [{key:'Talkspace', prof:'Start therapy now with a licensed therapist that understands how you live your life today.', link:'https://www.talkspace.com/'},
                      {key:'Breakthrough', prof:'Feel Better - Mental Health Therapy From Your Couch', link: 'https://breakthrough.com/'},
                     {key:'Mental Health Online', prof:'You have free access to our 12-week evidence-based treatment programs. You can do these at your own pace, in your own time.', link: 'https://www.mentalhealthonline.org.au/'},
                     {key:'BetterHealth Channel', prof:'Talking to someone who will understand your situation is usually the best place to start. ', link:'https://www.betterhealth.vic.gov.au/health/servicesandsupport/counselling-online-and-phone-support-for-mental-illness'}];
        return (
          <View style={styles.viewstyle2}>
                
                <Header style={{ backgroundColor: '#1a2942' }}>
                    <Left style={{ flex: 0.1, }}>
                        <Icon name="menu" style={{ color: 'white' }} onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                    <Body style={{ alignItems: 'flex-start' }}>
                        <Title>Online Services</Title>
                    </Body>
                </Header>
          
                <View style={{ flex: 0.1, backgroundColor: '#1a2942', height: Dimensions.get('window').height / 2, alignItems: 'center' }}>
                    <Text
                        adjustsFontSizeToFit={true}
                        style={styles.textstyle}
                    >
                        Online Services
                    </Text>
                </View>
            
            <View style={styles.container}>
            
            { list.length > 0 ? 
                <FlatList data={list}
                    renderItem={({item})=> (
                <View style={{borderBottomColor:'#999', padding:10}}>
                    
                    <Text style={{fontSize:RF(3.2), fontFamily:'Poppins-SemiBold', color:'#158ec1', textDecorationLine: 'underline'}}>{item.key}</Text>

                    <Text style={{ fontSize: RF(2.4), color: '#a5c7ff', paddingBottom: 5, fontFamily: 'Poppins-LightItalic' }}>{item.prof}</Text>

                    <TouchableOpacity activeOpacity={0.4} onPress={()=>{this.openurl(item.link)}}>
                            <Text style={{ fontSize: RF(2.2), color: '#e9e1ea', fontFamily:'Poppins-Light' }}>{item.link}</Text>
                    </TouchableOpacity>

                    <View style={{padding: 10}}></View>
                    
                    <Divider style={{ backgroundColor: 'white', height: 5}} />
                </View>
                    
            )} />
            
            :
                <Text style={{fontSize: 48, color:'red'}}>
                    Sorry. No Characters Available.
                </Text>
            }
            </View>
            </View>
        );
        
    }
}


const styles = StyleSheet.create({
  container: {
      backgroundColor: '#1a2942',
      flex:0.92,
      paddingTop:5,
      paddingBottom: 30
  },
    listitem: {
        fontSize:48, 
        color:'white',
        borderBottomWidth: 10,
        borderBottomColor: '#999'
    },
    viewstyle2: {
      flex:1,
      flexDirection: "column",
      justifyContent: "space-evenly",
      backgroundColor: "#1a2942",
      justifyContent: 'flex-end',
    },

    textstyle: {
      fontFamily: "Poppins-Bold",
      fontSize: RF(4),
      color: "#158ec1",
      marginHorizontal:10,
      marginVertical: 10
    }
});