import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Linking, TouchableOpacity, Platform } from 'react-native';
import RF from "react-native-responsive-fontsize"
import { Header, Icon, Body, Title, Left } from "native-base";
import { Divider } from "react-native-elements";

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Suicide Hotlines',
    }
    
    dialcall = (phonenumber) => {

        // console.log(phonenumber)
        if (Platform.OS === 'android') {
            phoneNumber = `tel:${phonenumber}`;
        }
        else {
            phoneNumber = `telprompt:${phonenumber}`;
        }

        Linking.openURL(phoneNumber).catch(err =>
            alert("An error occurred", err)
        );
    };
    render() {
        
        const list = [{key:'Lahore Mind Helpline', prof:'042-35761999'},
        {key:'Hotline', prof:'115'},
                      {key:'Talk2me', prof:'0317-4290001'},
                     {key:'Rozan Counselling Sevice', prof:'0800-22444'},
                     {key:'Baatkaro', prof:'0333-5574334'},
                     {key:'Roohbaru', prof:'0800-9564852'},
                     {key:'Lifelines', prof:'0313-0000051'},
                     {key:'Lifelines Islamabad', prof:'051-2612469'},
                     {key:'Befrienders', prof:'051-4445691'},
                     {key:'Lifelines-2', prof:'0800-055555'}];
        return (
          <View style={styles.viewstyle2}>
                
                <Header style={{ backgroundColor: '#1a2942' }}>
                    <Left style={{ flex: 0.1, }}>
                        <Icon name="menu" style={{ color: 'white' }} onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                    <Body style={{ alignItems: 'flex-start' }}>
                        <Title>Suicide Hotlines</Title>
                    </Body>
                </Header>
          
                <View style={{ flex: 0.1, backgroundColor: '#1a2942', height: Dimensions.get('window').height / 2, alignItems: 'center' }}>
                    <Text
                        adjustsFontSizeToFit={true}
                        style={styles.textstyle}
                    >
                        Suicide Hotlines
                    </Text>
                </View>

            
            <View style={styles.container}>
            
            { list.length > 0 ? 
                <FlatList data={list}
                    renderItem={({item})=> (
                
                <View style={{borderBottomColor:'#999', padding:10}}>
            
                    <Text style={{fontSize:RF(3.2), fontFamily:'Poppins-SemiBold', color:'#158ec1', textDecorationLine: 'underline'}}>{item.key}</Text>
            
                    <TouchableOpacity activeOpacity={0.4} onPress={()=>{this.dialcall(item.prof)}}>
                        <Text style={{ fontSize: RF(2.6), color: '#e9e1ea', fontFamily:'Poppins-Light' }}>{item.prof}</Text>
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
      flex:0.9,
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
      backgroundColor: "#AFEEEE",
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