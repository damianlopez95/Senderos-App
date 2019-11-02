import React, { Component } from 'react'
import { PermissionsAndroid, View, Text, ScrollView, TouchableOpacity, Picker } from 'react-native'
import { Card, Button } from 'react-native-elements'

import SenderosGeoJSON from './senderos-pn-tdf.json'
import PuntosInteresGeoJSON from './puntos_interes-pn-tdf'
import MapboxGL from "@react-native-mapbox-gl/maps"

import IconStar from '../Images/Icons/baseline_star_black_36dp.png'
import OptionIcon from 'react-native-vector-icons/Ionicons'
import styles from './Styles/MapScreenStyles'

MapboxGL.setAccessToken("pk.eyJ1IjoiZGFtaS1sb3Blejk1IiwiYSI6ImNrMWNtb2M1czB1cnYzZG9ibmo1azg4YnUifQ.pWXJKBT6mu_dRmAF2n9SWw");

export default class MapScreen extends Component {

    constructor(props){
      super(props);
      this.onMapPress = this.onMapPress.bind(this);
      this.onSourceLayerPress = this.onSourceLayerPress.bind(this);
      this.onFiltersBtnPress = this.onFiltersBtnPress.bind(this);
      this.updateIndex = this.updateIndex.bind(this);
      this.state ={
        showTrails: true,
        showInterestPoints: true,
        showCard: false,
        cardData: null,
        showFilters: false,
        trail: 'Todos',
        layer: 'Todas'
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
        case 'Todas':
          this.setState({
            showTrails: true,
            showInterestPoints: true,
            layer: selectedIndex})
          break;
        case 'Senderos':
          this.setState({
            showTrails: true,
            showInterestPoints: false,
            layer: selectedIndex})
          break;
        case 'Puntos de Interes':
          this.setState({
            showTrails: false,
            showInterestPoints: true,
            layer: selectedIndex})
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

    onFiltersBtnPress() {
      this.setState(prevState => ({
        showFilters: !prevState.showFilters
      }));
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

    renderFilters() {
      if (this.state.showFilters)
        return (
            <View style={styles.filtersContainer}>
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
                      this.setState({showTrails: true, trail: itemValue, layer: 'Senderos', showInterestPoints: false})
                    }>
                    <Picker.Item label="Todos" value="Todos" />
                    {
                      SenderosGeoJSON.features.map((item) =>{
                        return(
                        <Picker.Item  label={item.properties.Name} value={item.properties.Name} key={null}/>
                        );
                      })
                    }
                  </Picker>
                  <Text style={{paddingTop: 30}}>Capas:</Text>
                  <Picker
                    selectedValue={this.state.layer}
                    style={{height: 50, width: '90%'}}
                    onValueChange={(itemValue) => this.updateIndex(itemValue)}>
                    <Picker.Item label="Todas" value="Todas"/>
                    <Picker.Item label="Senderos" value="Senderos"/>
                    <Picker.Item label="Puntos de Interes" value="Puntos de Interes"/>
                  </Picker>
                </ScrollView>
              </View>
            </View>
        );
      return null;
    }

    render() {
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
                filter={this.state.showTrails ? (this.state.trail == 'Todos' ? ['all'] : ['==', 'Name', this.state.trail]) : ['==', 'Name', 'NoName']}
              />
            </MapboxGL.ShapeSource>
            <MapboxGL.ShapeSource 
              id="PuntosInteresSource"
              shape={PuntosInteresGeoJSON}
              onPress={this.onSourceLayerPress}
            >
              <MapboxGL.SymbolLayer
                id="puntos_interes-pn-tdf"
                style={{iconImage: IconStar, iconSize: 0.7, iconAllowOverlap: true,
                }}
                filter={this.state.showInterestPoints ? ['all'] : ['==', 'Name', 'NoName']}
              />
            </MapboxGL.ShapeSource>
          </MapboxGL.MapView>

          {this.renderCard()}

          <TouchableOpacity 
            style={styles.optionsButton}
            onPress={this.onFiltersBtnPress}
          >
            <OptionIcon name="md-options" style={{ fontSize: 35 }}/>
          </TouchableOpacity>

          {this.renderFilters()}

        </View>
      );
    }
}
