import React, { Component } from 'react'
import { PermissionsAndroid, View, Text, ScrollView, TouchableOpacity, Picker } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Button, CheckBox, Divider } from 'react-native-elements'
import { connect } from 'react-redux'
import InterestPointsActions from '../Redux/InterestPointsRedux'
import FastImage from 'react-native-fast-image'
//turf
import { point } from '@turf/helpers'
import buffer from '@turf/buffer'
import booleanPointInPolygon from '@turf/boolean-point-in-polygon'
//mapbox
import SenderosGeoJSON from './senderos-pn-tdf.json'
import SenderosEmergenciaGeoJSON from './senderos-emergencia-pn-tdf.json'
import PuntosInteresGeoJSON from './puntos_interes-pn-tdf'
import MapboxGL from "@react-native-mapbox-gl/maps"

import BlueLocationICON from '../Images/Icons/icons8-marker-blue.png'
import RedLocationICON from '../Images/Icons/icons8-marker-red.png'
import OptionIcon from 'react-native-vector-icons/Ionicons'
import styles from './Styles/MapScreenStyles'

MapboxGL.setAccessToken("pk.eyJ1IjoiZGFtaS1sb3Blejk1IiwiYSI6ImNrMWNtb2M1czB1cnYzZG9ibmo1azg4YnUifQ.pWXJKBT6mu_dRmAF2n9SWw");

var updateLocation = 0

class MapScreen extends Component {

    constructor(props){
      super(props);
      this.onMapPress = this.onMapPress.bind(this);
      this.onSourceLayerPress = this.onSourceLayerPress.bind(this);
      this.onFiltersBtnPress = this.onFiltersBtnPress.bind(this);
      this.updateLayers = this.updateLayers.bind(this);
      this.onUserLocationUpdate = this.onUserLocationUpdate.bind(this);
      this.state ={
        showTrails: true,
        showEmergencyTrails: false,
        showInterestPoints: true,
        showCard: false,
        cardData: null,
        showFilters: false,
        trail: 'Todos',
        layer: 'Todas',
      }
    }

    async componentDidMount() {
      
      //Bloque para pedir acceso GPS.
      PermissionsAndroid.requestMultiple(
        [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION],
        {
          title: 'Give Location Permission',
          message: 'App needs permission to find and show your position.'
      })
      /* .then(granted => {
          //console.warn(granted);
          resolve();
      }).catch(error => {
          //console.warn(error);
          //reject();
      }); */

      MapboxGL.setTelemetryEnabled(false);

      progressListener = (offlineRegion, status) => console.log(offlineRegion, status);

      offlinePack = await MapboxGL.offlineManager.getPack('ParqueTDF');
      
      if (offlinePack == undefined) {
        await MapboxGL.offlineManager.createPack({
          name: 'ParqueTDF',
          styleURL: 'mapbox://styles/dami-lopez95/ck1cq13s113cw1co4bncw4eqt',
          minZoom: 10,
          maxZoom: 17,
          bounds: [[-68.435974, -54.795375], [-68.620916, -54.916526]]
        }, progressListener, null)
      }
    }

    onUserLocationUpdate(location) { //el t de actualización no es exactamente de 1s, a veces es mayor
      if (updateLocation == 15) { 
        copy = JSON.parse(JSON.stringify(this.props.interestPoints))
        posActual = [location.coords.longitude, location.coords.latitude]
        var bufferPos = buffer(point(posActual), 0.04); //valor en km por defecto [Ahora son 40mts]
        for (var i = copy.features.length - 1; i >= 0; i--) {
          let p = point([copy.features[i].geometry.coordinates[0], copy.features[i].geometry.coordinates[1]])
          if (booleanPointInPolygon(p, bufferPos)) {
            if (copy.features[i].properties.State == 'oculto') {
              copy.features[i].properties.State = 'visitado'
              this.props.updateInterestPoints(copy)
            }
          }
        }
        updateLocation = 0
      }
      updateLocation = updateLocation + 1
    }

    updateLayers (selectedValue) {
      switch(selectedValue) {
        case 'Todas':
          this.setState({
            showTrails: true,
            showInterestPoints: true,
            layer: selectedValue})
          break;
        case 'Senderos':
          this.setState({
            showTrails: true,
            showInterestPoints: false,
            layer: selectedValue})
          break;
        case 'Puntos de Interes':
          this.setState({
            showTrails: false,
            showInterestPoints: true,
            layer: selectedValue})
        break;
      }
    }

    onMapPress() {
      this.setState({
        showCard: false,
        showFilters: false
      })
    }

    onSourceLayerPress(e) {
      const feature = e.nativeEvent.payload;
      this.setState({
        cardData: feature,
        showCard: true
      })
    }

    onFiltersBtnPress() {
      this.setState(prevState => ({
        showFilters: !prevState.showFilters
      }));
    }

    renderCard() {
      if (this.state.showCard) {
        if ("State" in this.state.cardData.properties) { 
          //es punto de interes
          return (
            <Animatable.View animation="fadeIn" style={styles.card} useNativeDriver>
              <View style={{padding: 5, flex: 1}}>
                <ScrollView>
                  <Text style={styles.titulo}>
                    {this.state.cardData.properties.Name}
                  </Text>
                  <Divider style={{ backgroundColor: 'black', marginVertical: 6}} />
                  <FastImage style={{height: 160}} 
                             source={{priority: FastImage.priority.high},
                             require('../Images/BahiaEnsenadaFoto.jpg')}
                  />
                </ScrollView>
                <Button 
                  title = "Details"
                  disabled = {this.state.cardData.properties.State == "visitado" ? false : true }
                  type="outline"
                  //todavía sin funcionalidad
                />
              </View>
            </Animatable.View>
          );
        }
        else { 
          //es sendero
          return (
            <Animatable.View animation="fadeIn" style={styles.card} useNativeDriver>
              <View style={{padding: 5, flex: 1}}>
                <ScrollView>
                  <Text style={styles.titulo}>
                    {this.state.cardData.properties.Name}
                  </Text>
                  <Divider style={{ backgroundColor: 'black', marginVertical: 6}} />
                  <FastImage style={{height: 160}} 
                             source={{priority: FastImage.priority.high},
                             require('../Images/BahiaEnsenadaFoto.jpg')}
                  />
                </ScrollView>
                <Button 
                  title = "Details"
                  type="outline"
                  //todavía sin funcionalidad
                />
              </View>
            </Animatable.View>
          );
        }
      }
      return null;
    }

    renderFilters() {
      if (this.state.showFilters)
        return (
            <Animatable.View animation="fadeIn" style={styles.filtersContainer} useNativeDriver>
              <TouchableOpacity
                style={styles.closeFiltersButton}
                hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
                onPress={this.onFiltersBtnPress}
              >
                <Text>X</Text>
              </TouchableOpacity>
              <View style={{margin: 10, flex: 1}}>
                <Text style={styles.titulo}>Filtros</Text>
                <ScrollView>
                  <Text style={{paddingTop: 30}}>Senderos:</Text>
                  <Picker
                    selectedValue={this.state.trail}
                    style={{height: 50, width: '90%'}}
                    onValueChange={(itemValue) =>
                      this.setState({trail: itemValue})
                    }>
                    <Picker.Item label="Todos" value="Todos"/>
                    {
                      SenderosGeoJSON.features.map((item) =>{
                        return(
                        <Picker.Item label={item.properties.Name} value={item.properties.Name} key={item.properties.id}/>
                        );
                      })
                    }
                  </Picker>
                  <Text style={{paddingTop: 30}}>Capas:</Text>
                  <Picker
                    selectedValue={this.state.layer}
                    style={{height: 50, width: '90%'}}
                    onValueChange={(itemValue) => this.updateLayers(itemValue)}>
                    <Picker.Item label="Todas" value="Todas"/>
                    <Picker.Item label="Senderos" value="Senderos"/>
                    <Picker.Item label="Puntos de Interes" value="Puntos de Interes"/>
                  </Picker>
                </ScrollView>
                <CheckBox
                    containerStyle={{marginLeft: 0, width: '100%'}}
                    title='Revelar senderos de emergencia'
                    checked={this.state.showEmergencyTrails}
                    onPress={() => this.setState({showEmergencyTrails: !this.state.showEmergencyTrails})}
                  />
              </View>
            </Animatable.View>
        );
      return null;
    }

    render() {
      const { interestPoints } = this.props

      if (Object.keys(interestPoints).length == 0) {
        return (
          <View style={{flex: 1, paddingTop: 50}}>
            <ActivityIndicator />
          </View>
        )
      } else {
        return (
          <View style={styles.container}>
            <MapboxGL.MapView
              style={styles.map}
              styleURL={'mapbox://styles/dami-lopez95/ck1cq13s113cw1co4bncw4eqt'}
              onPress={this.onMapPress}
            >
              <MapboxGL.UserLocation 
                visible={true}
                onUpdate={this.onUserLocationUpdate}
              />
              <MapboxGL.Camera
                //zoom coincidente con mapa offline
                minZoomLevel={10}
                maxZoomLevel={17}
                zoomLevel={10}

                //followUserLocation={true}

                //longitud, latitud
                centerCoordinate={[-68.500416, -54.841684]}
                //maxBounds={{ne: [-68.435974, -54.795375], sw: [-68.620916, -54.916526]}}
              />
              <MapboxGL.ShapeSource 
                id="senderosSource"
                shape={SenderosGeoJSON}
                onPress={this.onSourceLayerPress}
              >
                <MapboxGL.LineLayer
                  id="senderos-pn-tdf"
                  style={{ lineColor: '#FF4136', lineWidth: 7, visibility: this.state.showTrails ? 'visible' : 'none' }}
                  filter={this.state.trail == 'Todos' ? ['all'] : ['==', 'Name', this.state.trail]}
                />
              </MapboxGL.ShapeSource>

              {/* Por ahora quedan los puntos del parque en este source */}
              {/* Cuando no haya que demostrar pruebas ya se obtiene a través del storage */}
              <MapboxGL.ShapeSource 
                id="PuntosInteresSource"
                shape={PuntosInteresGeoJSON}
                onPress={this.onSourceLayerPress}
              >
                <MapboxGL.SymbolLayer
                  id="puntos_interes-pn-tdf"
                  style={{iconImage: RedLocationICON, iconSize: 0.5, iconAllowOverlap: false, visibility: this.state.showInterestPoints ? 'visible' : 'none' }}
                />
              </MapboxGL.ShapeSource>
              <MapboxGL.ShapeSource 
                id="senderosEmergenciaSource"
                shape={SenderosEmergenciaGeoJSON}
              >
                <MapboxGL.LineLayer
                  id="senderos-emergencia-pn-tdf"
                  style={{ lineColor: '#0074D9', lineWidth: 7, visibility: this.state.showEmergencyTrails ? 'visible' : 'none' }}
                />
              </MapboxGL.ShapeSource>
              <MapboxGL.ShapeSource 
                id="PuntosInteresVisibles"
                shape={interestPoints}
                onPress={this.onSourceLayerPress}
              >
                <MapboxGL.SymbolLayer
                  id="puntos_interes-visibles"
                  style={{iconImage: BlueLocationICON, iconSize: 0.5, iconAllowOverlap: false, visibility: this.state.showInterestPoints ? 'visible' : 'none'}}
                  filter={['==', 'State', 'visitado']}
                />
              </MapboxGL.ShapeSource>
              <MapboxGL.ShapeSource 
                id="PuntosInteresOcultos"
                shape={interestPoints}
                onPress={this.onSourceLayerPress}
              >
                <MapboxGL.SymbolLayer
                  id="puntos_interes-ocultos"
                  style={{iconImage: RedLocationICON, iconSize: 0.5, iconAllowOverlap: false, visibility: this.state.showInterestPoints ? 'visible' : 'none'}}
                  filter={['==', 'State', 'oculto']}
                />
              </MapboxGL.ShapeSource>
            </MapboxGL.MapView>

            <TouchableOpacity 
              style={styles.optionsButton}
              onPress={this.onFiltersBtnPress}
            >
              <OptionIcon name="md-options" style={{ fontSize: 35 }}/>
            </TouchableOpacity>

            {this.renderCard()}

            {this.renderFilters()}

          </View>
        );
      }
    }
}

const mapStateToProps = (state) => {
  return {
    interestPoints: state.interestPoints.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateInterestPoints: (interestPoints) => dispatch(InterestPointsActions.updateData(interestPoints))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)
