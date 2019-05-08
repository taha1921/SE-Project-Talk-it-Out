import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import RF from "react-native-responsive-fontsize"
import { Header, Icon, Body, Title, Left } from "native-base";

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Suicide Hotlines',
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
          
          <View style={{flex: 0.1, backgroundColor:'grey', height:100}}>
                <Text
                    adjustsFontSizeToFit={true}
                    style={styles.textstyle}
                >
                 Suicide Helplines
                </Text>
            </View>
            
            <View style={styles.container}>
            
            { list.length > 0 ? 
                <FlatList data={list}
                    renderItem={({item})=> (
                <View style={{borderBottomColor:'#999', padding:10}}>
            <Text style={{fontSize:25, color:'white', flex:0.5}}>
                {item.key}
            </Text>
            <Text style={{fontSize:20, color:'#999'}}>
                {item.prof}
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
      flex:0.9,
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
      backgroundColor: "#AFEEEE",
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