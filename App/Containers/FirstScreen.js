import React, { Component } from 'react'
import { Text, View, ScrollView, Button, Image, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import WeatherActions from '../Redux/WeatherRedux'

import { Divider } from 'react-native-elements'
import FastImage from 'react-native-fast-image'

import weatherIcons from '../Images/Icons/WeatherIcons'
import styles from './Styles/FirstScreenStyles'

class FirstScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentDayTime: '',
    };
  }

  componentDidMount() {
    
    //Llamado a fn dispatch. No debería llamarse más de una vez al día.
    //Si se descomenta la linea se podrán visualizar los datos actualizados.
    //Una vez obtenidos los datos comentar nuevamente y obtener datos de store.
    //Para ver la screen sin desperdiciar llamadas a API -hay límite hasta 50/mes-, 
    //se puede utilizar la screen 'oldFirstScreen.js' que recupera datos desde .json local y se visualiza idénticamente.

    //this.props.requestAPI()

    //Precargar iconos
    const uris = []
    for (var key in weatherIcons) {
      uris.push({
        uri: Image.resolveAssetSource(weatherIcons[key]).uri
      })
    }
    FastImage.preload(uris);

    //'Day' y 'Night' son dos valores necesarios para acceder a los datos.
    //En este caso decidí arbitrariamente que el día es desde 06AM hasta 21PM
    if ((new Date().getHours() >= 6) && (new Date().getHours() < 21)) {
      this.setState({
        currentDayTime: 'Day'
      })
    } else {
      this.setState({
        currentDayTime: 'Night'
      })
    }
  }

  render () {
    const { nextDays, currentDay } = this.props

    if ((Object.keys(currentDay).length == 0) && (nextDays.length == 0)) {
      return (
        <View style={{flex: 1, paddingTop: 50}}>
          <ActivityIndicator />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View style={{ padding: 10 }}>
              <View style={styles.actualDay}>
                <View style={{ padding: 10 }}>
                  <Text style={styles.titulo}>Ushuaia, TDF</Text>
                  <Divider style={{ backgroundColor: 'black', height: 2 }} />
                  <Text style={{ alignSelf: 'center', paddingVertical: 10 }}>Today</Text>
                  <View style={styles.tempValuesContainer}>
                    <Text style={[styles.tempValues, {color: '#0074D9'}]}>{Math.round((((currentDay.Temperature.Minimum.Value)-32)*(5/9))*10)/10}℃</Text>
                    <Text style={[styles.tempValues, {color: 'black'}]}>    -    </Text>
                    <Text style={[styles.tempValues, { color: '#FF4136' }]}>{Math.round((((currentDay.Temperature.Maximum.Value)-32)*(5/9))*10)/10}℃</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <FastImage style={{ width: 75, height: 75 }} 
                            source={{priority: FastImage.priority.high},
                            weatherIcons[currentDay[this.state.currentDayTime].Icon]}/>
                  </View>
                  <Text style={{ alignSelf: 'center', fontStyle: 'italic', paddingBottom: 10 }}>{currentDay.Night.ShortPhrase}</Text>
                  <View style={styles.rowContainer}>
                    <Text>Wind:</Text>
                    <Text>{currentDay.Night.Wind.Speed.Value}mi/h {currentDay.Night.Wind.Direction.English}</Text>
                  </View>
                  <Divider style={{ backgroundColor: 'black', marginBottom: 6}} />
                  <View style={styles.rowContainer}>
                    <Text>Rain Probability:</Text>
                    <Text>{currentDay.Night.RainProbability}%</Text>
                  </View>
                  <Divider style={{ backgroundColor: 'black', marginBottom: 6}} />
                  <View style={styles.rowContainer}>
                    <Text>Snow Probability:</Text>
                    <Text>{currentDay.Night.SnowProbability}%</Text>
                  </View>
                  <Divider style={{ backgroundColor: 'black', marginBottom: 6}} />
                  <View style={styles.rowContainer}>
                    <Text>Ice Probability:</Text>
                    <Text>{currentDay.Night.IceProbability}%</Text>
                  </View>
                <Divider style={{ backgroundColor: 'black', marginBottom: 6}} />
                  <View style={styles.rowContainer}>
                    <Text>Real Feel Temp:</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{color: '#0074D9'}}>{Math.round((((currentDay.RealFeelTemperature.Minimum.Value)-32)*(5/9))*10)/10}℃</Text>
                      <Text style={{color: 'black'}}>  -  </Text>
                      <Text style={{color: '#FF4136'}}>{Math.round((((currentDay.RealFeelTemperature.Maximum.Value)-32)*(5/9))*10)/10}℃</Text>
                    </View>
                  </View>
                </View>
              </View>
              {
                nextDays.map((item) =>{
                  return(
                  <View key={item.Date} style={styles.nextDays}>
                    <View style={styles.rowContainer}>
                      <FastImage style={{width: 30, height: 30, marginTop: 10}} 
                                source={{priority: FastImage.priority.high},
                                weatherIcons[item.Day.Icon]}
                      />
                      <Text style={{marginLeft: 7, marginTop: 14, fontWeight: 'bold'}}>{item.Date.substring(5,7)}/{item.Date.substring(8,10)}</Text>
                    </View>
                    <View style={styles.rowNextDay}>
                      <Text style={{color: '#0074D9'}}>{Math.round((((item.Temperature.Minimum.Value)-32)*(5/9))*10)/10}℃</Text>
                      <Text style={{color: 'black'}}>  -  </Text>
                      <Text style={{color: '#FF4136'}}>{Math.round((((item.Temperature.Maximum.Value)-32)*(5/9))*10)/10}℃</Text>
                    </View>
                  </View>
                  );
                })
              }
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
}

const mapStateToProps = (state) => {
  return {
    nextDays: state.weather.nextDays,
    currentDay: state.weather.currentDay,
  }
}

//Se utiliza para pedir de la API la info y almacenarla en store.
const mapDispatchToProps = (dispatch) => {
  return {
    requestAPI: () => { dispatch(WeatherActions.weatherRequest(null))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen)

