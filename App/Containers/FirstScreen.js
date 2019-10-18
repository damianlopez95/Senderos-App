import React, { Component } from 'react'
import { Text, View, ScrollView, Button, Image } from 'react-native'

import styles from './Styles/FirstScreenStyles'

export default class FirstScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.titulo}>
            SenderosApp
          </Text>
          <View style={styles.image_container}>
              <Image
                style={styles.image}
                source={{uri: 'https://gremialesdelsur.com.ar/data/img_cont/img_imagenes/4952.jpg'}}
              />
          </View>
        </ScrollView>
        <View style={styles.btnSenderos}>
          <Button 
            title="Ver senderos"
            onPress={() => this.props.navigation.navigate('NavScreen2')}
          />
        </View>
      </View>
    )
  }
}
