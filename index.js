/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as firebase from "firebase"

var config = {
    apiKey: "AIzaSyC8S1ImpMV_LohWmUiOAN6JctQPWw2KMZg",
    authDomain: "talkitout-123.firebaseapp.com",
    databaseURL: "https://talkitout-123.firebaseio.com",
    projectId: "talkitout-123",
    storageBucket: "talkitout-123.appspot.com",
    messagingSenderId: "1096506240955"
};
firebase.initializeApp(config);

AppRegistry.registerComponent(appName, () => App);
