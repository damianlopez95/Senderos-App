import React from 'react'
import { View, ListView, Text, Button, ActivityIndicator } from 'react-native'
import trailsAPI from '../Services/SenderoApi'

import styles from './Styles/TrailListScreenStyles'

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class TrailListScreen extends React.Component {

    constructor(props) {
        super(props);
        this.service = trailsAPI.create();
        global.trail = null;
        this.state = {
          isLoading: true,
          trails: ds,
        };
    }

    componentDidMount () {
      this.service.getList()
      .then((result) => {
        return result.data
      })
      .then((trails) => {
        this.setState({ 
          trails: ds.cloneWithRows(trails)
         }),
         this.setState({
          isLoading: false,
        })
        //prueba salida de datos
        //console.warn(this.state.trails)
      })
    }

    goToPage(rowData) {
      global.trail = rowData;
      this.props.navigation.navigate('NavScreen4');
    }

    renderRow(rowData) {
      return (
        <View>
          <Text>ID: {rowData.id}  -  Nombre: {rowData.nombre} {"\n"}</Text>
          <View>
            <Button
              title="Ver sendero"
              onPress={() => this.goToPage(rowData)}
            />
          </View>
          <Text>{"\n"}</Text>
        </View>
      );
    }

    render() {

      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 30}}>
            <ActivityIndicator />
          </View>
        );
      }

      return (
        <View style={styles.container}>
          <Text>{"\n"}</Text>
          <ListView
            style={styles.container}
            dataSource={this.state.trails}
            renderRow={this.renderRow.bind(this)}
          />
        </View>
      );
    } 
}
