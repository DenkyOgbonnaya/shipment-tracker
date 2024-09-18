import {StyleSheet} from 'react-native';
import {theme} from 'styles/theme';

const {colors} = theme;

const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default splashStyles;
