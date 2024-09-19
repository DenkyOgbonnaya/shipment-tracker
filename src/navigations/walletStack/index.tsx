import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';

import {theme} from 'styles/theme';
import {WalletStackParamList} from 'navigations/types/walletStack.types';
import {WALLET_SCREEN} from 'navigations/constants/walletStack.constants';
import CommingSoon from 'screens/comingSoon';

export default function WalletStack() {
  const Stack = createNativeStackNavigator<WalletStackParamList>();
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
      initialRouteName={WALLET_SCREEN}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
      }}>
      <Screen
        name={WALLET_SCREEN}
        component={CommingSoon}
        options={{
          ...screenOptions,
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: theme.colors.background,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
});
