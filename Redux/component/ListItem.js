import React, {Component} from 'react';
import * as actions from '../actions';
import {View,Text, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';

class ListItem extends Component {


    render() {
        const {id, title} = this.props.library;
        console.log(this.props);
        return (

            <TouchableWithoutFeedback
                onPress={()=> this.props.selectLibraryId(id)}>
                <View>
                <Text>{title} </Text>
                </View>
            </TouchableWithoutFeedback>

        );
    }
}

export default connect(null,actions)(ListItem);