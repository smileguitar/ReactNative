import React, {Component} from 'react';
import { YellowBox } from 'react-native';
import { createAppContainer } from 'react-navigation';

import AppNavigator from './src/navigations/AppNavigator';
import NavigationService from './src/navigations/NavigationService'
YellowBox.ignoreWarnings([
  'NetInfo','Async Storage'
]);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer 
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
