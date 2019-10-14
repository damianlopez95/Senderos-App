import { createStackNavigator, createAppContainer } from 'react-navigation'
//import LaunchScreen from '../Containers/LaunchScreen'
import FirstScreen from '../Containers/FirstScreen'
import MapScreen from '../Containers/MapScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  
  //Pantalla inicial de la app
  FirstScreen: { screen: FirstScreen },
  MapScreen: { screen: MapScreen }
  //LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'FirstScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
