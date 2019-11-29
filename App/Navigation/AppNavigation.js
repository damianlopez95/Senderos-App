import React, { Component } from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  Dimensions,
   } from 'react-native'
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation'

import FirstScreen from '../Containers/FirstScreen'
import MapScreen from '../Containers/MapScreen'
import TrailListScreen from '../Containers/TrailListScreen'
import TrailScreen from '../Containers/TrailScreen'
import PointsOfInterestListScreen from '../Containers/PointsOfInterestListScreen'
import PointsOfInterestScreen from '../Containers/PointsOfInterestScreen'
// import LaunchScreen from '../Containers/LaunchScreen'

import Icon from 'react-native-vector-icons/MaterialIcons';
import SideMenu from './SideMenu'

//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Text style={{ paddingHorizontal: 8 }}><Icon name="menu" style={{ fontSize: 30 }} /></Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: FirstScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Inicio',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#2ECC40',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//Stack Navigator for the Second Option of Navigation Drawer
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Second: {
    screen: MapScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Mapa',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#2ECC40',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Stack Navigator for the Third Option of Navigation Drawer
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Third: {
    screen: TrailListScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Lista de Senderos',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#2ECC40',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Stack Navigator for the Third Option of Navigation Drawer
const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Fourth: {
    screen: TrailScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Sendero',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#2ECC40',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen5_StackNavigator = createStackNavigator({
  Fifth: {
    screen: PointsOfInterestListScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Lista Puntos de interes',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#2ECC40',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen6_StackNavigator = createStackNavigator({
  Fifth: {
    screen: PointsOfInterestScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Punto de interes',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#2ECC40',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Drawer Navigator for the Navigation Drawer / Sidebar
const Drawer = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavScreen1: { screen: FirstActivity_StackNavigator },
    NavScreen2: { screen: Screen2_StackNavigator },
    NavScreen3: { screen: Screen3_StackNavigator },
    NavScreen4: { screen: Screen4_StackNavigator },
    NavScreen5: { screen: Screen5_StackNavigator },
    NavScreen6: { screen: Screen6_StackNavigator },
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120, 
  },
);
export default createAppContainer(Drawer);
