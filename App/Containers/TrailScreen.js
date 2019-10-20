import React from 'react'
import { Text } from 'react-native'
import { Card } from 'react-native-elements'

import styles from './Styles/TrailScreenStyles'

export default class TrailScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        trail: global.trail,
      }
    } 

    componentDidMount() {
      const {navigation} = this.props;
      navigation.addListener ('willFocus', () =>
      this.setState({ 
        trail: global.trail
       })
      )
    }

    render() {
      return (
        <Card title={trail.nombre}>
          <Text style={styles.titulo}>ID: {trail.id}</Text>
          <Text style={styles.titulo}>Dificultad: {trail.dificultad}</Text>
          <Text style={styles.titulo}>Descripción</Text>
          <Text style={styles.descripcion}>{trail.descripcion}</Text>
        </Card>
      );
    }

}
