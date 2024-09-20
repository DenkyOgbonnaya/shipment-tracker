import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StyleSheet, Text, View} from 'react-native';

import {BoxesIcon, ProfileIcon, ScanIcon, WalletIcon} from 'assets';
import {theme} from 'styles/theme';
import {
  PROFILE_STACK_SCREEN,
  SCAN_STACK_SCREEN,
  SHIPMENTS_STACK_SCREEN,
  WALLET_STACK_SCREEN,
} from './constants/authStack.constants';
import ShipmentStack from './shipmentStack';
import ScanStack from './scanStack';
import WalletStack from './walletStack';
import ProfileStack from './profileStack';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  const {colors} = theme;
  return (
    <Tab.Navigator
      initialRouteName={SHIPMENTS_STACK_SCREEN}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabStyle,
      }}>
      <Tab.Screen
        name={SHIPMENTS_STACK_SCREEN}
        component={ShipmentStack}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.tabBarLabel,
                {color: focused ? colors.primary : colors.placeholder},
              ]}>
              Shipments
            </Text>
          ),
          tabBarIcon: ({focused}) => {
            return (
              <View style={[styles.tab]}>
                <BoxesIcon
                  color={focused ? colors.primary : colors.placeholder}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={SCAN_STACK_SCREEN}
        component={ScanStack}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.tabBarLabel,
                {color: focused ? colors.primary : colors.placeholder},
              ]}>
              Scan
            </Text>
          ),
          tabBarIcon: ({focused}) => {
            return (
              <View style={[styles.tab]}>
                <ScanIcon
                  color={focused ? colors.primary : colors.placeholder}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={WALLET_STACK_SCREEN}
        component={WalletStack}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.tabBarLabel,
                {color: focused ? colors.primary : colors.placeholder},
              ]}>
              Wallet
            </Text>
          ),
          tabBarIcon: ({focused}) => {
            return (
              <View style={[styles.tab]}>
                <WalletIcon
                  color={focused ? colors.primary : colors.placeholder}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name={PROFILE_STACK_SCREEN}
        component={ProfileStack}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.tabBarLabel,
                {color: focused ? colors.primary : colors.placeholder},
              ]}>
              Profile
            </Text>
          ),
          tabBarIcon: ({focused}) => {
            return (
              <View style={[styles.tab]}>
                <ProfileIcon
                  color={focused ? colors.primary : colors.placeholder}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarLabel: {
    textAlign: 'center',
    fontSize: theme.size.sm - 1,
    fontFamily: theme.fontFamily.heading.regular,
    fontWeight: theme.font.regular,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabStyle: {
    backgroundColor: theme.colors.background,
    zIndex: 10,
    minHeight: 75,
    borderTopWidth: 1,
    borderColor: '#EAE7F2',
    paddingBottom: 10,
    paddingTop: 10,
  },
});
