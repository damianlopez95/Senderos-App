import React, { Component } from 'react'
import FastImage from 'react-native-fast-image'
import { Text, View, ScrollView, Button, Image, FlatList } from 'react-native'
import { Divider } from 'react-native-elements'

import styles from './Styles/FloraStyles'

import { connect } from 'react-redux'

const idioma = 'es'

class FloraScreen extends Component {

  // componentDidMount() {
  //   // this.props.requestAPI()
  //   console.log(this.props.interestPoints)
  // }

  render () {
    console.log(this.props.flora)
    const flora = this.props.flora
    return (
      <View style={styles.main}>
        <View >
         <FastImage
            style={styles.image}

            source={{
              priority: FastImage.priority.high},
              flora.photo}
          />
      </View>
      <View>
        <Text style={styles.title}>
          {flora.name}
        </Text>

        <Divider style={styles.divider} />

        <Text style={styles.content}>
          {flora.description}
        </Text>
      </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    flora: idioma=='es' ? state.species.floraSPA[1] : state.specie.floraENG[1]
  }
}

export default connect(mapStateToProps)(FloraScreen)
