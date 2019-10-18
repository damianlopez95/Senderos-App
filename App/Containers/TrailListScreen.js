import React from 'react'
import { View, ListView, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
//import trails from 'API'

export default class TrailListScreen extends React.Component {

    constructor(props) {
        super(props);
        this.setState({
          //isLoading = true,
        });
    }

    componentDidMount () {
      //extraer lista de la API
      this.setState({
        isLoading: false,
        //asignar lista a variable de state 'trails'
        trails: null,
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

      if (this.state.isLoading) {
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
      );
    } 
}
