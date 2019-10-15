import React, { Component } from 'react'
import { 
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
   } from 'react-native'
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation'

import FirstScreen from '../Containers/FirstScreen'
import MapScreen from '../Containers/MapScreen'

import styles from './Styles/NavigationStyles'
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
          {/*Donute Button Image */}
          <Text>Menu</Text>
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

//Drawer Navigator for the Navigation Drawer / Sidebar
const Drawer = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavScreen1: { screen: FirstActivity_StackNavigator },
    NavScreen2: { screen: Screen2_StackNavigator },
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,
  }
);
export default createAppContainer(Drawer);

