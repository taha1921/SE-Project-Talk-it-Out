import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import RF from "react-native-responsive-fontsize"

export default class App extends React.Component {
    
    render() {
        const data = {characters: [
            {id:123, name:'Lahore Mind Helpline', profession:'042-35761999'},
            {id:234, name:'Leonard', profession:'Experimental Physicist'},
            {id:345, name:'Howard', profession:'Mechanical Engineer'},
            {id:456, name:'Raj', profession:'Astro-Physicist'},
            {id:567, name:'Amy', profession:'Neurobiologist'},
            {id:678, name:'Bernadette', profession:'Microbiologist'},
        ]};
        const list = [{key:'Depression', prof:'Explains depression, including possible causes and how you can access treatment and support. Includes tips for helping yourself, and guidance for friends and family.', link:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/depression/about-depression/?o=9109'},
                      {key:'Seasonal affective disorder (SAD)', prof:'Explains seasonal affective disorder, including possible causes and how you can access treatment and support. Includes tips for helping yourself, and guidance for friends and family.', link: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/depression/about-depression/?o=9109'},
                     {key:'Postnatal depression and perinatal mental health', prof:'Explains postnatal depression and other perinatal mental health issues, including possible causes, sources of treatment and support. Also gives advice for friends and family.', link: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/postnatal-depression-and-perinatal-mental-health/about-maternal-mental-health-problems/?o=9113'},
                     {key:'Anger Management', prof:'Explains what anger is, and how to deal with it in a constructive and healthy way.', link:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/anger/about-anger/?o=6271'},
                     {key:'Anxiety and panic attacks', prof:'Explains anxiety and panic attacks, including possible causes and how you can access treatment and support. Includes tips for helping yourself, and guidance for friends and family.', link:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/anxiety-and-panic-attacks/about-anxiety/?o=6272'},
                     {key:'Bipolar disorder', prof:'Explains what bipolar disorder is, what kinds of treatment are available, and how you can help yourself cope. Also provides guidance on what friends and family can do to help.', link:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/bipolar-disorder/about-bipolar-disorder/?o=1142'},
                     {key:'Body dysmorphic disorder (BDD)', prof:'Explains body dysmorphic disorder, including possible causes and how you can access treatment and support. Includes tips for helping yourself, and guidance for friends and family.', link: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/body-dysmorphic-disorder-bdd/about-bdd/?o=6259'},
                    {key:'PObsessive-compulsive disorder (OCD)', prof:'Explains obsessive-compulsive disorder (OCD), including possible causes and how you can access treatment and support. Includes tips for helping yourself, and guidance for friends and family.', link: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/obsessive-compulsive-disorder-ocd/about-ocd/?o=6290'},
                    {key:'Paranoia', prof:'Explains paranoia, including possible causes and how you can access treatment and support. Includes tips for helping yourself, and guidance for friends and family.', link:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/paranoia/about-paranoia/?o=6292'},
                    {key:'Anxiety and panic attacks', prof:'Explains personality disorders, including possible causes and how you can access treatment and support.', link:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/personality-disorders/about-personality-disorder/?o=10125'}];
          
        return(
          <View style={styles.viewstyle2}>
          <View style={{flex: 0.12, backgroundColor:'grey', height:100}}>
                <Text
                    adjustsFontSizeToFit={true}
                    style={styles.textstyle}
                >
               General Awareness
                </Text>
            </View>

            {/* <View style={{backgroundColor: '#008080', height:100, justifyContent:'space-between'}}>
                <Text
                    adjustsFontSizeToFit={true}
                    
                    style={{fontSize:18, fontWeight: 'bold', color:"#DCDCDC", marginRight:50, marginLeft:50, marginTop:5}}
                >
                If you’ve been diagnosed with a mental health problem you might be looking for information on your diagnosis, treatment options and where to go for support. Here are some information pages that will help you learn more.
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


