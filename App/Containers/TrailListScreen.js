import React from 'react'
import { View, ListView, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import trailsAPI from '../Services/SenderoApi'

export default class TrailListScreen extends React.Component {

    constructor(props) {
        super(props);
        this.service = trailsAPI.create();
        this.state = {
          isLoading: true,
        };
    }

    componentDidMount () {
      this.setState({
        isLoading: false,
        //asignar lista a variable de state 'trails'
      })
    } 

    renderRow(rowData) {
      return (
        <View>
          <Text>{rowData.id} - {rowData.name}</Text>
          <TouchableOpacity>
           onPress={() => this.props.navigation.navigate('NavScreen4', { trail: rowData })}
           <Text>Ver sendero</Text>
          </TouchableOpacity>
        </View>
      );
    }

    render() {
      this.service.getList()
      .then(res => console.warn(res.data));
      return (null)
      /* if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }

      return (
        <View>
          <Text>Lista de Senderos:</Text>
          <ListView
            dataSource={this.state.trails}
            renderRow={this.renderRow.bind(this)}
          />
        </View>
      ); */
    } 
}
