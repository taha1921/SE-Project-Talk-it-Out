import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
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

const AuthStack = createStackNavigator(
  {
    Opening: {
      screen: OpeningScreen
    },
    
    SignUpOptions: {
      screen: SignUpAs
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
    },

    SeekerLogin: {
      screen: LoginSeeker
    },

    ModeratorLogin: {
      screen: LoginModerator
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

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  onPress = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
  render() {
    return (
      <View>
        <Text>Main HomeScreen</Text>
        <TouchableOpacity onPress={this.onPress}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const AppStack = createStackNavigator({ Home: HomeScreen});
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