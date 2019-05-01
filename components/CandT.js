<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, {Component} from 'react';
>>>>>>> b5aa7095dd79c26d2702a7141c92e19077f31aa3
import { StyleSheet, Text, View, FlatList } from 'react-native';
import RF from "react-native-responsive-fontsize"

export default class App extends React.Component {
<<<<<<< HEAD

    render() {
        const data = {
            characters: [
                { id: 123, name: 'Lahore Mind Helpline', profession: '042-35761999' },
                { id: 234, name: 'Leonard', profession: 'Experimental Physicist' },
                { id: 345, name: 'Howard', profession: 'Mechanical Engineer' },
                { id: 456, name: 'Raj', profession: 'Astro-Physicist' },
                { id: 567, name: 'Amy', profession: 'Neurobiologist' },
                { id: 678, name: 'Bernadette', profession: 'Microbiologist' },
            ]
        };
        const list = [{ key: 'Dr Shazib Shamim', prof: '0332-7807080', address: '556 Street 17, Sector D Phase 5 D.H.A, Lahore, Punjab' },
        { key: 'Mind Professionals - Therapy Centre', prof: '0311-1704181', address: '109-CCA،، DHA،، Sector DD Phase IV، Dha Phase 4, Lahore, Punjab' },
        { key: 'Dr Shazib Shamim', prof: '0321-1166675', address: '556 Street 17, Sector D Phase 5 D.H.A, Lahore, Punjab' },
        { key: 'Therapy Works', prof: '0800-22444', address: 'H# 211 Street 5, Cavalry Ground, Lahore, Punjab' },
        { key: 'Visual Therapy by Asna & Eva', prof: '0333-5574334', address: 'Plot 33, Block C H.B.F.C Society, Lahore, Punjab' },
        { key: 'The Parklane Clinic', prof: '042-35874685', address: '31 Street L, Block L Gulberg 2, Lahore, Punjab' }];
        return (
            <View style={styles.viewstyle2}>
                <View style={{ flex: 0.14, backgroundColor: 'grey', height: 100 }}>
                    <Text
                        adjustsFontSizeToFit={false}
                        style={styles.textstyle}
                    >
                        Counselors and Therapists
                </Text>
                </View>

                <View style={styles.container}>

                    {list.length > 0 ?
                        <FlatList data={list}
                            renderItem={({ item }) => (
                                <View style={{ borderBottomColor: '#999', padding: 10 }}>
                                    <Text style={{ fontSize: 25, color: 'white', flex: 0.5 }}>
                                        {item.key}
                                    </Text>
                                    <Text style={{ fontSize: 20, color: '#999' }}>
                                        {item.prof}
                                    </Text>
                                    <Text style={{ fontSize: 20, color: '#999' }}>
                                        {item.address}
                                    </Text>
                                </View>

                            )} />

                        :
                        <Text style={{ fontSize: 48, color: 'red' }}>
                            Sorry. No Characters Available.
                </Text>
                    }
                </View>
            </View>
        );

=======
    
    render() {
        const data = {characters: [
            {id:123, name:'Lahore Mind Helpline', profession:'042-35761999'},
            {id:234, name:'Leonard', profession:'Experimental Physicist'},
            {id:345, name:'Howard', profession:'Mechanical Engineer'},
            {id:456, name:'Raj', profession:'Astro-Physicist'},
            {id:567, name:'Amy', profession:'Neurobiologist'},
            {id:678, name:'Bernadette', profession:'Microbiologist'},
        ]};
        const list = [{key:'Dr Shazib Shamim', prof:'0332-7807080', address:'556 Street 17, Sector D Phase 5 D.H.A, Lahore, Punjab'},
                      {key:'Mind Professionals - Therapy Centre', prof:'0311-1704181', address: '109-CCA،، DHA،، Sector DD Phase IV، Dha Phase 4, Lahore, Punjab'},
                      {key:'Dr Shazib Shamim', prof:'0321-1166675', address: '556 Street 17, Sector D Phase 5 D.H.A, Lahore, Punjab'},
                     {key:'Therapy Works', prof:'0800-22444', address: 'H# 211 Street 5, Cavalry Ground, Lahore, Punjab'},
                     {key:'Visual Therapy by Asna & Eva', prof:'0333-5574334', address:'Plot 33, Block C H.B.F.C Society, Lahore, Punjab'},
                     {key:'The Parklane Clinic', prof:'042-35874685', address: '31 Street L, Block L Gulberg 2, Lahore, Punjab'}];
        return (
          <View style={styles.viewstyle2}>
          <View style={{flex: 0.14, backgroundColor:'grey', height:100}}>
                <Text
                    adjustsFontSizeToFit={false}
                    style={styles.textstyle}
                >
                Counselors and Therapists
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
            <Text style={{fontSize:20, color:'#999'}}>
                {item.address}
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
        
>>>>>>> b5aa7095dd79c26d2702a7141c92e19077f31aa3
    }
}

const Character = (props) => {
    return (
<<<<<<< HEAD
        <View style={{ borderBottomColor: 'red', padding: 10 }}>
            <Text style={{ fontSize: 60, color: 'white' }}>
                {props.nm}
            </Text>
            <Text style={{ fontSize: 36, color: 'white' }}>
=======
        <View style={{borderBottomColor:'red', padding:10}}>
            <Text style={{fontSize:60, color:'white'}}>
                {props.nm}
            </Text>
            <Text style={{fontSize:36, color:'white'}}>
>>>>>>> b5aa7095dd79c26d2702a7141c92e19077f31aa3
                {props.prof}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
    container: {
        backgroundColor: '#1a2942',
        flex: 0.84,
        paddingTop: 5,
        paddingBottom: 30
    },
    listitem: {
        fontSize: 48,
        //fontWeight:'bold', 
        color: 'white',
=======
  container: {
      backgroundColor: '#1a2942',
      flex:0.84,
      paddingTop:5,
      paddingBottom: 30
  },
    listitem: {
        fontSize:48, 
        //fontWeight:'bold', 
        color:'white',
>>>>>>> b5aa7095dd79c26d2702a7141c92e19077f31aa3
        borderBottomWidth: 10,
        borderBottomColor: '#999'
    },
    viewstyle2: {
<<<<<<< HEAD
        flex: 1,
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
        marginHorizontal: 10,
        marginVertical: 10
=======
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
>>>>>>> b5aa7095dd79c26d2702a7141c92e19077f31aa3
    }
});