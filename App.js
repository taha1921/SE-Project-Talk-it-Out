import React, {Component} from 'react';
import {
  AppRegistry,
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import OpeningScreen from './components/OpeningScreen.js';
import SignUpAs from './components/SignUpAs.js';
import HelperEmail from './components/HelperEmail.js'
import HelperCode from "./components/HelperCode.js";
import HelperSignUp from './components/HelperSignUp.js';
import SeekerSignUp from './components/SeekerSignUp.js';

const RootStack = createStackNavigator(
  {
    Opening: {
      screen: OpeningScreen
    },
    SignUpOptions: {
      screen: SignUpAs
    },
    HelperEmailScreen: {
      screen: HelperEmail
    },
    HelperVerification : {
      screen: HelperCode
    },
    Helpersignup : {
      screen: HelperSignUp
    },
    
    Seekersignup : {
      screen: SeekerSignUp
    }
  },
  {
    initialRouteName: "Opening",

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#1a2942"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class myapp extends Component{

  render() {
    return (
        <AppContainer/>
    );
  }
}

AppRegistry.registerComponent("myapp", () => myapp)