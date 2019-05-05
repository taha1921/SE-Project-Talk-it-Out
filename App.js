import React, { Component } from 'react';
import {
  AppRegistry, View,
  Text, TouchableOpacity,
  AsyncStorage, SafeAreaView,
  ScrollView, Image
} from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator, DrawerItems } from "react-navigation";
import OpeningScreen from './components/OpeningScreen.js';
import SignUpAs from './components/SignUpAs.js';
import HelperSignUp from './components/HelperSignUp.js';
import SeekerSignUp from './components/SeekerSignUp.js';
import LoginAs from "./components/LoginAs.js";
import LoginHelper from "./components/LoginHelper.js";
import LoginSeeker from "./components/LoginSeeker";
import LoginModerator from "./components/LoginModerator.js";
import RF from "react-native-responsive-fontsize";
import AuthLoadingScreen from "./components/AuthLoadingScreen.js";
import Chat from "./components/Chat.js";
import Awareness from "./components/Awareness.js";
import Therapist from "./components/CandT";
import OnlineServices from "./components/onlineservices.js";
import GenAware from "./components/generalawareness.js";
import SuicideHotlines from "./components/suicidehelplines.js";
import ConnectionSeeker from "./components/ConnectionSeeker.js";


const AuthStack = createStackNavigator(
  {
    Opening: {
      screen: OpeningScreen
    },

    SignUpOptions: {
      screen: SignUpAs
    },

    Helpersignup: {
      screen: HelperSignUp
    },

    Seekersignup: {
      screen: SeekerSignUp
    },

    LoginScreen: {
      screen: LoginAs
    },

    HelperLogin: {
      screen: LoginHelper
    },

    SeekerLogin: {
      screen: LoginSeeker
    },

    ModeratorLogin: {
      screen: LoginModerator
    },

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

const CustomDrawer = (props) => (
  <SafeAreaView style = {{flex: 1, backgroundColor: '#3e4b60'}}>
    <View style = {{height: 150, backgroundColor: '#3e4b60', alignItems: 'center', justifyContent: 'center'}}>
      <Image source = {require('./logo.png')} style = {{height: 120, width: 120, borderRadius: 60}} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppStack = createDrawerNavigator(
  {
    Home: {
      screen: Awareness
    },
    Therapist: {
      screen: Therapist
    },
    OnlineServices: {
      screen: OnlineServices
    },
    GenAware: {
      screen: GenAware
    },
    SuicideHotlines: {
      screen: SuicideHotlines
    },
    Chat: {
      screen: ConnectionSeeker
    }
  },

  {
    contentComponent: CustomDrawer,
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#1a2942"
      },
      headerTintColor: "#929eb2",
      headerTitleStyle: {
        fontWeight: "normal"
        // fontSize: RF(2.1)
      }
    }
  }
);
// const AppContainer = createAppContainer(AuthStack);

// export default class myapp extends Component{

//   render() {
//     return (
//         <Chat/>
//     );
//   }
// }

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

AppRegistry.registerComponent("myapp", () => myapp)