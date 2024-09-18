import {StyleSheet} from 'react-native';
import {theme} from 'styles/theme';

const {colors, font, size, fontFamily} = theme;

const textInputStyles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    fontSize: size.base,
    fontWeight: font.regular,
    fontFamily: fontFamily.body.regular,
    borderRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingTop: 22,
    paddingBottom: 0,
    borderWidth: 1,
    backgroundColor: colors.input,
    color: colors.primary,
    paddingHorizontal: 14,
  },
  label: {
    marginBottom: 8,
  },
  animatedStyle: {
    top: 19,
    left: 5,
    position: 'absolute',
    paddingHorizontal: 10,
    zIndex: 10,
    fontFamily: fontFamily.heading.regular,
    fontSize: size.base,
    fontWeight: font.regular,
  },
  wrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default textInputStyles;
