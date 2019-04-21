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
import LoginAs from "./components/LoginAs.js";
import LoginHelper from "./components/LoginHelper.js";
import RF from "react-native-responsive-fontsize";

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
    },

    LoginScreen: {
      screen: LoginAs
    },

    HelperLogin: {
      screen: LoginHelper
    }
  },
  {
    initialRouteName: "Opening",

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#1a2942"
      },
      headerTintColor: "#929eb2",
      headerTitleStyle: {
        fontWeight: "normal",
        fontSize: RF(2.1)
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