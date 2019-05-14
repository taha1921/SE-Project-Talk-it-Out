import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, Linking } from 'react-native';
import RF from "react-native-responsive-fontsize"
import { Header, Icon, Body, Title, Left } from "native-base";
import { Divider } from "react-native-elements";

export default class App extends React.Component {
    
    static navigationOptions = {
        title: 'General Awareness',
    }

    openurl = (link) => {
        Linking.openURL(link).catch(err =>
          alert("An error occurred", err)
        );
    }


    render() {

        const list = [{key:'Depression', prof:'Explains depression, including possible causes and how you can access treatment and support. Includes tips for helping yourself, and guidance for friends and family.', link:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/depression/about-depression/?o=9109'},
                      {key:'Seasonal affective disorder (SAD)', prof:'Explains seasonal affective disorder, including possible causes and how you can access treatment and support. Includes tips for helping yourself, and guidance for friends and family.', link: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/depression/about-depression/?o=9109'},
                     {key:'Postnatal depression and perinatal mental health', prof:'Explains postnatal depression and other perinatal mental health issues, including possible causes, sources of treatment and support. Also gives advice for friends and family.', link: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/postnatal-depression-and-perinatal-mental-health/about-maternal-mental-health-problems/?o=9113'},
                     {key:'Anger Management', prof:'Explains what anger is, and how to deal with it in a constructive and healthy way.', link:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/anger/about-anger/?o=6271'},
                     {key:'Anxiety and panic attacks', prof:'Explains anxiety and panic attacks, including possible causes and how you can access treatment and support. Includes tips for helping yourself, and guidance for friends and family.', link:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/anxiety-and-panic-attacks/about-anxiety/?o=6272'},
                     {key:'Bipolar disorder', prof:'Explains what bipolar disorder is, what kinds of treatment are available, and how you can help yourself cope. Also provides guidance on what friends and family can do to help.', link:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/bipolar-disorder/about-bipolar-disorder/?o=1142'},
                     {key:'Body dysmorphic disorder (BDD)', prof:'Explains body dysmorphic disorder, including possible causes and how you can access treatment and support. Includes tips for helping yourself, and guidance for friends and family.', link: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/body-dysmorphic-disorder-bdd/about-bdd/?o=6259'},
                    {key:'Obsessive-compulsive disorder (OCD)', prof:'Explains obsessive-compulsive disorder (OCD), including possible causes and how you can access treatment and support. Includes tips for helping yourself, and guidance for friends and family.', link: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/obsessive-compulsive-disorder-ocd/about-ocd/?o=6290'},
                    {key:'Paranoia', prof:'Explains paranoia, including possible causes and how you can access treatment and support. Includes tips for helping yourself, and guidance for friends and family.', link:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/paranoia/about-paranoia/?o=6292'},
                    {key:'Personality Disorders', prof:'Explains personality disorders, including possible causes and how you can access treatment and support.', link:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/personality-disorders/about-personality-disorder/?o=10125'}];
          
        return(
          <View style={styles.viewstyle2}>
                
                <Header style={{ backgroundColor: '#1a2942' }}>
                    <Left style={{ flex: 0.1, }}>
                        <Icon name="menu" style={{ color: 'white' }} onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                    <Body style={{ alignItems: 'flex-start' }}>
                        <Title>Counsellors and Therapists</Title>
                    </Body>
                </Header>
                
                <View style={{ flex: 0.1, backgroundColor:'#1a2942', height:Dimensions.get('window').height/2, alignItems: 'center'}}>
                    <Text
                        adjustsFontSizeToFit={true}
                        style={styles.textstyle}
                    >
                   General Awareness
                    </Text>
                </View>
            
            <View style={styles.container}>
            { list.length > 0 ? 
                <FlatList data={list}
                    renderItem={({item})=> (
                <View style={{borderBottomColor:'#999', padding:10}}>
                    
                    <Text style={{fontSize:RF(3.2), fontFamily:'Poppins-SemiBold', color:'#158ec1', textDecorationLine: 'underline'}}>{item.key}</Text>
            
                    <Text style={{fontSize:RF(2.4), color:'#a5c7ff', paddingBottom:5, fontFamily: 'Poppins-LightItalic'}}>{item.prof}</Text>
                    
                    <TouchableOpacity activeOpacity={0.4} onPress={() =>{this.openurl(item.link)}}>
                        <Text style={{ fontSize: RF(2), color: '#e9e1ea', fontFamily:'Poppins-Light' }}>{item.link}</Text>
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


