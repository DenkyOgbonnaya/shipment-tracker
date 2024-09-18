/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import {theme} from './src/styles/theme';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? theme.colors.background
      : theme.colors.background,
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={[styles.text, {color: theme.colors.text}]}>Hello World</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: theme.size.md,
    fontWeight: theme.font.medium,
    fontFamily: theme.fontFamily.heading.medium,
  },
});

export default App;
