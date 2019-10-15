import React, { Component } from 'react'
import { View } from 'react-native'

import SenderosGeoJSON from './senderos-pn-tdf.json'
import MapboxGL from "@react-native-mapbox-gl/maps";

import styles from './Styles/MapScreenStyles'

MapboxGL.setAccessToken("pk.eyJ1IjoiZGFtaS1sb3Blejk1IiwiYSI6ImNrMWNtb2M1czB1cnYzZG9ibmo1azg4YnUifQ.pWXJKBT6mu_dRmAF2n9SWw");

export default class MapScreen extends Component {

    async componentDidMount() {
        MapboxGL.setTelemetryEnabled(false);
        
        progressListener = (offlineRegion, status) => console.log(offlineRegion, status);
        
        await MapboxGL.offlineManager.createPack({
          name: 'ParqueTDF',
          styleURL: 'mapbox://styles/dami-lopez95/ck1cq13s113cw1co4bncw4eqt',
          minZoom: 14,
          maxZoom: 20,
          bounds: [[-68.435974, -54.795375], [-68.620916, -54.916526]]
        }, progressListener, null)
      }

    render() {
      return (
        <View style={styles.map_container}>
          <MapboxGL.MapView
            style={styles.map}
            styleURL={'mapbox://styles/dami-lopez95/ck1cq13s113cw1co4bncw4eqt'}
          >
            <MapboxGL.Camera
              //zoom coincidente con mapa offline
              minZoomLevel={14}
              maxZoomLevel={20}
              zoomLevel={14}
              //longitud, latitud
              centerCoordinate={[-68.500416, -54.841684]}
              maxBounds={{ne: [-68.435974, -54.795375], sw: [-68.620916, -54.916526]}}
            />
            <MapboxGL.ShapeSource id="senderosSource" shape={SenderosGeoJSON}>
              <MapboxGL.LineLayer
                id="senderos-pn-tdf"
                style={{ lineColor: 'red', lineWidth: 7, visibility: 'visible' }}
              />
            </MapboxGL.ShapeSource>
          </MapboxGL.MapView>
        </View>
      );
    }
}
