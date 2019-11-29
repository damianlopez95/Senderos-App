import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

import styles from './Styles/SideMenuStyles'
 
class SideMenu extends Component {
  constructor() {
    super();
    /*Array of the sidebar navigation option with 
    Heading, Subheading and screen to navigate.*/
    //Sreen to navigate can be any screen defined in Drawer Navigator in App.js
    this.options = [
      {
        mainHeading: 'Inicio',
        subOptions: [
          { secondaryHeading: 'Página principal', navigationPath: 'First' },
        ],
      },
      {
        mainHeading: 'Contenidos',
        subOptions: [
          { secondaryHeading: 'Mapa con Senderos', navigationPath: 'Second' },
          { secondaryHeading: 'Lista de Senderos', navigationPath: 'Third' },
          { secondaryHeading: 'Sendero', navigationPath: 'Fourth' },
          { secondaryHeading: 'Lista Puntos de Interes', navigationPath: 'Fifth' },
        ],
      },
    ];
  }
 
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };
 
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            {this.options.map((option) => (
              <View key={option.mainHeading}>
                <Text style={styles.mainHeading}>{option.mainHeading}</Text>
                {option.subOptions.map((item, key) => (
                  <View style={styles.secondaryHeading} key={key}>
                    <Text onPress={this.navigateToScreen(item.navigationPath)}>
                      {item.secondaryHeading}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>SenderosApp v0.01</Text>
        </View>
      </View>
    );
  }
}

export default SideMenu;
