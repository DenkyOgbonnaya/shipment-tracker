import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';

import {SHIPMENTS_SCREEN} from 'navigations/constants/shipmentStack.constants';
import Shipments from 'screens/shipments';
import {ShipmentStackParamList} from 'navigations/types/shipmentStack.types';
import {theme} from 'styles/theme';

export const ShipmentStack = () => {
  const Stack = createNativeStackNavigator<ShipmentStackParamList>();
  const Navigator = Stack.Navigator;
  const Screen = Stack.Screen;
  const {colors} = theme;

  const screenOptions = {
    headerShown: false,
    headerStyle: styles.headerStyle,
    title: '',
    headerBackTitleVisible: true,
    headerTintColor: colors.text,
  };

  return (
    <Navigator
      initialRouteName={SHIPMENTS_SCREEN}
      screenOptions={{
        animation: 'fade',
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
      }}>
      <Screen
        name={SHIPMENTS_SCREEN}
        component={Shipments}
        options={{
          ...screenOptions,
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: theme.colors.background,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
});

export default ShipmentStack;
