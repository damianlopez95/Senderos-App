import React, { Component } from 'react'
import { PermissionsAndroid, View, Text, Dimensions } from 'react-native'
import { Card, Overlay, Button } from 'react-native-elements'

import SenderosGeoJSON from './senderos-pn-tdf.json'
import MapboxGL from "@react-native-mapbox-gl/maps";

import styles from './Styles/MapScreenStyles'

const windowWidth= Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

MapboxGL.setAccessToken("pk.eyJ1IjoiZGFtaS1sb3Blejk1IiwiYSI6ImNrMWNtb2M1czB1cnYzZG9ibmo1azg4YnUifQ.pWXJKBT6mu_dRmAF2n9SWw");

export default class MapScreen extends Component {

    constructor(props){
      super(props);
      this.state ={
        showCard: false,
        cardData: null
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
          <Overlay
            isVisible={true}
            onBackdropPress={this.onMapPress.bind(this)}
            windowBackgroundColor="rgba(0, 0, 0, .1)"
            overlayBackgroundColor="rgba(0, 0, 0, .2)"
            width={windowWidth}
            height={windowHeight*0.3}
            overlayStyle={styles.overlay}
          >
            <Card 
              title={this.state.cardData.properties.Name}
            >
              <Button 
                title="+ INFO"
                //todavía sin funcionalidad
              />
            </Card>
          </Overlay>
        );
      
      return null;
    }

    render() {
      return (
        <View style={styles.map_container}>
          <MapboxGL.MapView
            style={styles.map}
            styleURL={'mapbox://styles/dami-lopez95/ck1cq13s113cw1co4bncw4eqt'}
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
              onPress={this.onSourceLayerPress.bind(this)}
            >
              <MapboxGL.LineLayer
                id="senderos-pn-tdf"
                style={{ lineColor: 'red', lineWidth: 7, visibility: 'visible' }}
              />
            </MapboxGL.ShapeSource>
          </MapboxGL.MapView>

          {this.renderCard()}

        </View>
      );
    }
}
