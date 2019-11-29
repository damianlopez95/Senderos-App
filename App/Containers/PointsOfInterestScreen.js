import React, { Component } from 'react'
import FastImage from 'react-native-fast-image'
import { Text, View, ScrollView, Button, Image, FlatList } from 'react-native'
import { Divider } from 'react-native-elements'

import styles from './Styles/PointsOfInterestStyles'

import { connect } from 'react-redux'

class PointsOfInterestScreen extends Component {

  // componentDidMount() {
  //   // this.props.requestAPI()
  //   console.log(this.props.interestPoints)
  // }

  render () {
    console.log(this.props.point)
    const point = this.props.point.properties
    return (
      <View style={styles.main}>
        <View >
         <FastImage
            style={styles.image}

            source={{
              priority: FastImage.priority.high},
              point.photo}
          />
      </View>
      <View>
        <Text style={styles.title}>
          {point.Name}
        </Text>

        <Divider style={styles.divider} />

        <Text style={styles.content}>
          {point.description}
        </Text>
      </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    point: state.interestPoints.data.features[state.interestPoints.selectedInterestPoint],
  }
}

export default connect(mapStateToProps)(PointsOfInterestScreen)
