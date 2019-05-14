import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, Linking, Platform } from 'react-native';
import RF from "react-native-responsive-fontsize"
import { Header, Icon, Body, Title, Left } from "native-base";
import { Divider } from "react-native-elements";

export default class App extends React.Component {

    static navigationOptions = {
        title: 'Counsellors and Therapists',
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

        const list = [{ key: 'Dr Shazib Shamim', prof: '0332-7807080', address: '556 Street 17, Sector D Phase 5 D.H.A, Lahore, Punjab' },
        { key: 'Mind Professionals - Therapy Centre', prof: '0311-1704181', address: '109-CCA،، DHA،، Sector DD Phase IV، Dha Phase 4, Lahore, Punjab' },
        { key: 'Therapy Works', prof: '0800-22444', address: 'H# 211 Street 5, Cavalry Ground, Lahore, Punjab' },
        { key: 'Visual Therapy by Asna & Eva', prof: '0333-5574334', address: 'Plot 33, Block C H.B.F.C Society, Lahore, Punjab' },
        { key: 'The Parklane Clinic', prof: '042-35874685', address: '31 Street L, Block L Gulberg 2, Lahore, Punjab' }];

        return (
            <View style={styles.viewstyle2}>

                <Header style={{ backgroundColor: '#1a2942' }}>
                    <Left style={{ flex: 0.1, }}>
                        <Icon name="menu" style={{ color: 'white' }} onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                    <Body style={{ alignItems: 'flex-start' }}>
                        <Title>Counsellors and Therapists</Title>
                    </Body>
                </Header>

                <View style={{ flex: 0.1, backgroundColor: '#1a2942', height: Dimensions.get('window').height / 2, alignItems: 'center' }}>
                    <Text
                        adjustsFontSizeToFit={true}
                        style={styles.textstyle}
                    >
                        Counsellors and Therapists
                    </Text>
                </View>

                <View style={styles.container}>
                    {list.length > 0 ?
                        <FlatList data={list}
                            renderItem={({ item }) => (
                                <View style={{ borderBottomColor: '#999', padding: 10 }}>

                                    <Text style={{ fontSize: RF(3.2), fontFamily: 'Poppins-SemiBold', color: '#158ec1', textDecorationLine: 'underline' }}>{item.key}</Text>

                                    <TouchableOpacity activeOpacity={0.4} onPress={() => {this.dialcall(item.prof)}}>
                                        <Text style={{ fontSize: RF(2.5), color: '#e9e1ea', fontFamily: 'Poppins-Light' }}>{item.prof}</Text>
                                    </TouchableOpacity>

                                    <Text style={{ fontSize: RF(2.4), color: '#a5c7ff', paddingBottom: 5, fontFamily: 'Poppins-LightItalic' }}>{item.address}</Text>

                                    <View style={{ padding: 10 }}></View>
                                    <Divider style={{ backgroundColor: 'white', height: 5 }} />
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

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1a2942',
        flex: 0.92,
        paddingTop: 5,
        paddingBottom: 30
    },
    listitem: {
        fontSize: 48,
        color: 'white',
        borderBottomWidth: 10,
        borderBottomColor: '#999'
    },
    viewstyle2: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor: "#1a2942",
        justifyContent: 'flex-end',
    },

    textstyle: {
        fontFamily: "Poppins-Bold",
        fontSize: RF(4),
        color: "#158ec1",
        marginHorizontal: 10,
        marginVertical: 10
    }
});