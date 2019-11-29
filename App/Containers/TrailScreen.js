import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import { Card, ListItem } from 'react-native-elements'

import styles from './Styles/TrailScreenStyles'

class TrailScreen extends Component {

    constructor(props) {
      super(props);
      this.state = {
        trail: global.trail,
        points: this.props.interestPoints.data
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
        <View>
            <Card title={trail.nombre}>
            <Text style={styles.titulo}>ID: {trail.id}</Text>
            <Text style={styles.titulo}>Dificultad: {trail.dificultad}</Text>
            <Text style={styles.titulo}>Descripción</Text>
            <Text style={styles.descripcion}>{trail.descripcion}</Text>
          </Card>

          <Card containerStyle={{padding: 0}} >
          {
            points.map((u, i) => {
              return (
                <ListItem
                  key={i}
                  roundAvatar
                  title={u.properties.Name}
                  avatar={u.properties.photo}
                />
              );
            })
          }
          </Card>
        </View>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    interestPoints: state.interestPoints
  }
}

export default connect(mapStateToProps)(TrailScreen)