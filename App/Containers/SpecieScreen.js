import React, { Component } from 'react'
import FastImage from 'react-native-fast-image'
import { Text, View, ScrollView, Button, Image, FlatList } from 'react-native'
import { Divider } from 'react-native-elements'

import styles from './Styles/SpecieStyles'

import { connect } from 'react-redux'

class SpecieScreen extends Component {

  // componentDidMount() {
  //   // this.props.requestAPI()
  //   console.log(this.props.interestPoints)
  // }

  render () {
    console.log(this.props.specie)
    const specie = this.props.specie
    return (
      <View style={styles.main}>
        <View >
         <FastImage
            style={styles.image}

            source={{
              priority: FastImage.priority.high},
              specie.photo}
          />
      </View>
      <View>
        <Text style={styles.title}>
          {specie.name}
        </Text>

        <Divider style={styles.divider} />

        <Text style={styles.content}>
          {specie.description}
        </Text>
      </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    specie: state.species.wildlifeSPA[1]
  }
}

export default connect(mapStateToProps)(SpecieScreen)
