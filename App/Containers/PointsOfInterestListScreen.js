import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'
import { Card, Button } from 'react-native-elements'
import FastImage from 'react-native-fast-image'

import { connect } from 'react-redux'
import InterestPointsActions from '../Redux/InterestPointsRedux'

// import styles from './Styles/PointsOfInterestStyles'

class PointsOfInterestListScreen extends Component {

  // componentDidMount() {
  //   // this.props.requestAPI()
  //   console.log(this.props.interestPoints)
  // }

  render () {
    console.log(this.props.interestPoints)
    return (
      <View >       
        <FlatList 
          data = {this.props.interestPoints}
          keyExtractor={(item, index) => index.toString()}
          renderItem = {({item, index}) => <Card title={item.properties.Name}>
              <View>
                <FastImage style={{width: 350, height: 300}} 
                    source={{priority: FastImage.priority.high},
                    item.properties.photo}
                />
              </View>
              <Button
                title="Más Detalles"
                type="outline"
                disabled={item.properties.State == 'visitado' ? false : true}
                onPress={() => {this.props.setSelectedIp(index),
                  console.warn('Es el ID?',index),
                  this.props.navigation.navigate('NavScreen6')}
                }
              />
            </Card>  
          }
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    interestPoints: state.interestPoints.data.features
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedIp: (id) => {dispatch(InterestPointsActions.updateSelectedInterestPoint(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PointsOfInterestListScreen)
