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
  circlelarge: {
    // flexDirection: 'row',
    position: 'absolute',

    width: 140,
    height: 200,
    bottom: -300,
    // borderRadius: 140 / 2,
    backgroundColor: theme.colors.primary,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default splashStyles;
