import {StyleSheet} from 'react-native';
import {theme} from 'styles/theme';

const {colors} = theme;

const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default splashStyles;
