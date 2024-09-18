/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigations from './src/navigations';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Navigations />
    </NavigationContainer>
  );
}

export default App;
