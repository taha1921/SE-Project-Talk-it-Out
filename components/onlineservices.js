import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import RF from "react-native-responsive-fontsize"
import { Header, Icon, Body, Title, Left } from "native-base";


export default class App extends React.Component {
    static navigationOptions = {
        title: 'Online Services',
    }

    render() {
        const data = {characters: [
            {id:123, name:'Lahore Mind Helpline', profession:'042-35761999'},
            {id:234, name:'Leonard', profession:'Experimental Physicist'},
            {id:345, name:'Howard', profession:'Mechanical Engineer'},
            {id:456, name:'Raj', profession:'Astro-Physicist'},
            {id:567, name:'Amy', profession:'Neurobiologist'},
            {id:678, name:'Bernadette', profession:'Microbiologist'},
        ]};
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
          
          <View style={{flex: 0.12, backgroundColor:'grey', height:100}}>
                <Text
                    adjustsFontSizeToFit={false}
                    style={styles.textstyle}
                >
                Online Services
                </Text>
            </View>

            {/* <View style={{flex: 0.22, backgroundColor: '#008080', height:100, justifyContent:'space-between'}}>
                <Text
                    adjustsFontSizeToFit={true}
                    
                    style={{fontSize:18, fontWeight: 'bold', color:"#DCDCDC"}}
                >
                Mental Health Online's services are not intended to replace face-to-face therapy. If, at any time, you believe that Mental Health Online is not meeting or addressing your needs, or gives rise to other concerns about your health, please seek the services of an appropriate health care professional.
                </Text>
            </View> */}
            
            <View style={styles.container}>
            
            { list.length > 0 ? 
                <FlatList data={list}
                    renderItem={({item})=> (
                <View style={{borderBottomColor:'#999', padding:10}}>
            <Text style={{fontSize:25, color:'#DCDCDC', flex:0.5}}>
                {item.key}
            </Text>
            <Text style={{fontSize:20, color:'#999'}}>
                {item.prof}
            </Text>
            <Text style={{fontSize:20, color:'#696969'}}>
                {item.link}
            </Text>
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

const Character = (props) => {
    return (
        <View style={{borderBottomColor:'red', padding:10}}>
            <Text style={{fontSize:60, color:'white'}}>
                {props.nm}
            </Text>
            <Text style={{fontSize:36, color:'white'}}>
                {props.prof}
            </Text>
        </View>
    );
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
        //fontWeight:'bold', 
        color:'white',
        borderBottomWidth: 10,
        borderBottomColor: '#999'
    },
    viewstyle2: {
      flex:1,
      flexDirection: "column",
      justifyContent: "space-evenly",
      //alignItems: "center",
      backgroundColor: "#1a2942",
      justifyContent: 'flex-end',
    },

    textstyle: {
      fontFamily: "Poppins",
      fontSize: RF(4),
      color: "white",
      marginHorizontal:10,
      marginVertical: 10
    }
});