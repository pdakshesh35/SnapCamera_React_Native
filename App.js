/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict';
 import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
    Button
} from 'react-native'
 import Camera from 'react-native-camera';
import cam from './src/component/CameraView';




export default class App extends Component<{}> {


    render() {

        return (
            <View>
              <cam/>
            </View>
        );


    }
}
