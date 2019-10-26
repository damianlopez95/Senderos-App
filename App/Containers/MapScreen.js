import React, { Component } from 'react'
import { PermissionsAndroid, View, Text } from 'react-native'
import { Card, Button, ButtonGroup } from 'react-native-elements'

import Icon from '../Images/Icons/baseline_star_black_36dp.png';

import SenderosGeoJSON from './senderos-pn-tdf.json'
import PuntosInteresGeoJSON from './puntos_interes-pn-tdf'
import MapboxGL from "@react-native-mapbox-gl/maps";

import styles from './Styles/MapScreenStyles'

MapboxGL.setAccessToken("pk.eyJ1IjoiZGFtaS1sb3Blejk1IiwiYSI6ImNrMWNtb2M1czB1cnYzZG9ibmo1azg4YnUifQ.pWXJKBT6mu_dRmAF2n9SWw");

export default class MapScreen extends Component {

    constructor(props){
      super(props);
      this.onMapPress = this.onMapPress.bind(this);
      this.onSourceLayerPress = this.onSourceLayerPress.bind(this);
      this.updateIndex = this.updateIndex.bind(this);
      this.state ={
        showTrails: true,
        showInterestPoints: true,
        showCard: false,
        cardData: null,
        selectedIndex: 2,
      }
    }

    async componentDidMount() {

      //Bloque para pedir acceso GPS. Falta verificarlo.
      /* PermissionsAndroid.requestMultiple(
        [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION],
        {
          title: 'Give Location Permission',
          message: 'App needs permission to find and show your position.'
      })
      .then(granted => {
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
          minZoom: 14,
          maxZoom: 20,
          bounds: [[-68.435974, -54.795375], [-68.620916, -54.916526]]
        }, progressListener, null)
      }
    }

    updateIndex (selectedIndex) {
      switch(selectedIndex) {
        case 0:
          this.setState({
            showTrails: true,
            showInterestPoints: false,
            selectedIndex})
          break;
        case 1:
          this.setState({
            showTrails: false,
            showInterestPoints: true,
            selectedIndex})
          break;
        case 2:
          this.setState({
            showTrails: true,
            showInterestPoints: true,
            selectedIndex})
        break;
      }
    }

    onMapPress() {
      this.setState({
        showCard: false
      })
    }

    onSourceLayerPress(e) {
      const feature = e.nativeEvent.payload;
      //console.warn('info sendero: ', feature);
      this.setState({
        cardData: feature,
        showCard: true
      })
    }

    renderCard() {
      if (this.state.showCard)
        return (
            <Card containerStyle={styles.card}
              title={this.state.cardData.properties.Name}
            >
              <Text>{"\n"}</Text>
              <Button 
                title="+ INFO"
                //todavía sin funcionalidad
              />
            </Card>
        );
      
      return null;
    }

    render() {

      //const buttons = ['Trails', 'Points of Interest', 'All']
      const buttons = ['Senderos', 'Puntos de Interes', 'Todo']
      const { selectedIndex } = this.state

      return (
        <View style={styles.container}>
          <MapboxGL.MapView
            style={styles.map}
            styleURL={'mapbox://styles/dami-lopez95/ck1cq13s113cw1co4bncw4eqt'}
            onPress={this.onMapPress}
          >
            {/* <MapboxGL.UserLocation 
              visible={true}
            /> */}
            <MapboxGL.Camera
              //zoom coincidente con mapa offline
              minZoomLevel={14}
              maxZoomLevel={20}
              zoomLevel={14}

              //followUserLocation={true}

              //longitud, latitud
              centerCoordinate={[-68.500416, -54.841684]}
              maxBounds={{ne: [-68.435974, -54.795375], sw: [-68.620916, -54.916526]}}
            />
            <MapboxGL.ShapeSource 
              id="senderosSource"
              shape={SenderosGeoJSON}
              onPress={this.onSourceLayerPress}
            >
              <MapboxGL.LineLayer
                id="senderos-pn-tdf"
                style={{ lineColor: 'red', lineWidth: 7, visibility: 'visible' }}
                filter={this.state.showTrails ? ['all'] : ['==', 'Name', 'NoName']}
              />
            </MapboxGL.ShapeSource>

            <MapboxGL.ShapeSource 
              id="PuntosInteresSource"
              shape={PuntosInteresGeoJSON}
              onPress={this.onSourceLayerPress}
            >
              <MapboxGL.SymbolLayer
                id="puntos_interes-pn-tdf"
                style={{iconImage: Icon, iconSize: 0.7, iconAllowOverlap: true,
                }}
                filter={this.state.showInterestPoints ? ['all'] : ['==', 'Name', 'NoName']}
              />
            </MapboxGL.ShapeSource>
          </MapboxGL.MapView>

          {this.renderCard()}

          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={styles.buttonGroup}
          />
         
        </View>
      );
    }
}
