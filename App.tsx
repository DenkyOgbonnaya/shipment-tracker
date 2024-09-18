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
import Button from './src/components/button';
import Checkbox from './src/components/checkbox';
import Tag from './src/components/tag';
import TextField from './src/components/textField';

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
      <Button variant="primary" onPress={() => {}}>
        Hi WOrld
      </Button>
      <Button variant="secondary">Hello Worldsss</Button>

      <Checkbox onCheck={() => {}} />

      <Tag variant="error" />
      <Tag variant="delivered" />
      <Tag variant="cancelled" />
      <Tag variant="hold" />
      <Tag variant="recieved" />
      <TextField placeholder="Password" secureTextEntry />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
  text: {
    fontSize: theme.size.md,
    fontWeight: theme.font.medium,
    fontFamily: theme.fontFamily.heading.medium,
  },
});

export default App;
