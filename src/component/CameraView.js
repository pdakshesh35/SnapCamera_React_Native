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




export default class CameraView extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            datapath : "",
            status : false
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    captureTarget={Camera.constants.CaptureTarget.disk}
                    captureMode={Camera.constants.CaptureMode.still}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                    {this.state.status === true ? <Image source={{uri:  this.state.datapath}} style={styles.cp} />: null}
                </Camera>




            </View>
        );
    }

    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options})
            .then((data) =>this.setState({ datapath : data.path, status : true}))
            .catch(err => console.error(err));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    welcome: {
        color : "white"
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    },
    cp: {
        position : "absolute",
        top :0,
        bottom : 0,
        left : 0,
        right : 0

    }
});
