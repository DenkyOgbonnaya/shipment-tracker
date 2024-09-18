import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from 'screens/splash';
import {SPLASH_SCREEN} from './constants/authStack.constants';
import {theme} from 'styles/theme';
import {AuthStackParamList} from './types/authStack.types';

export const Navigations = () => {
  const Stack = createNativeStackNavigator<AuthStackParamList>();
  const Navigator = Stack.Navigator;
  const Screen = Stack.Screen;
  const {colors} = theme;

  return (
    <Navigator
      initialRouteName={SPLASH_SCREEN}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
      }}>
      <Screen
        name={SPLASH_SCREEN}
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default Navigations;
