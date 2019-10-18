import React from 'react'
import { View, Text } from 'react-native'

export default class TrailScreen extends React.Component {

    constructor(props) {
      super(props);
      this.setState({
        trail: this.props.navigation.state.params.trail,
      });
    } 

    render() {
      return (
        <View>
          <Text>Sendero: {trail.name}</Text>
          <Text>ID: {trail.id}</Text>
        </View>
      );
    }
      
}
