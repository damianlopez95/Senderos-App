import React, { Component } from 'react'
import FastImage from 'react-native-fast-image'
import { Text, View, ScrollView, Button, Image, FlatList } from 'react-native'
import { Divider } from 'react-native-elements'

import styles from './Styles/WildlifeStyles'

import { connect } from 'react-redux'

const idioma = 'es'

class WildlifeScreen extends Component {

  // componentDidMount() {
  //   // this.props.requestAPI()
  //   console.log(this.props.interestPoints)
  // }

  render () {
    console.log(this.props.wildlife)
    const wildlife = this.props.wildlife
    return (
      <View style={styles.main}>
        <View >
         <FastImage
            style={styles.image}

            source={{
              priority: FastImage.priority.high},
              wildlife.photo}
          />
      </View>
      <View>
        <Text style={styles.title}>
          {wildlife.name}
        </Text>

        <Divider style={styles.divider} />

        <Text style={styles.content}>
          {wildlife.description}
        </Text>
      </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wildlife: idioma=='es' ? state.species.wildlifeSPA[1] : state.specie.wildlifeENG[1]
  }
}

export default connect(mapStateToProps)(WildlifeScreen)
