import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';

import {theme} from 'styles/theme';
import CommingSoon from 'screens/comingSoon';
import {ProfileStacktackParamList} from 'navigations/types/profileStack.types';
import {PROFILE_SCREEN} from 'navigations/constants/profileStack.constants';

export default function ProfileStack() {
  const Stack = createNativeStackNavigator<ProfileStacktackParamList>();
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
      initialRouteName={PROFILE_SCREEN}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
      }}>
      <Screen
        name={PROFILE_SCREEN}
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
