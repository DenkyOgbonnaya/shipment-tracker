import {StyleSheet} from 'react-native';
import {theme} from 'styles/theme';

const {colors, font, size, fontFamily} = theme;

const searchFieldStyles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 56,
    fontSize: size.base,
    fontWeight: font.regular,
    fontFamily: fontFamily.body.regular,
    borderRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 5,
    paddingTop: -1,
    paddingBottom: 0,
    backgroundColor: colors.input,
    color: colors.primary,
    paddingLeft: 4,
  },
  label: {
    marginBottom: 8,
  },
  animatedStyle: {
    top: 19,
    left: 8,
    position: 'absolute',
    paddingHorizontal: 10,
    zIndex: 10,
    fontFamily: fontFamily.heading.regular,
    fontSize: size.base,
    fontWeight: font.regular,
  },
  wrap: {
    alignItems: 'center',
    overflow: 'hidden',
    paddingHorizontal: 14,
    flexDirection: 'row',
    backgroundColor: colors.input,
    borderRadius: 10,
    gap: 10,
    borderWidth: 1,
  },
  protocolText: {
    position: 'relative',
    top: 28,
    left: 14,
    color: colors.inputLable,
    fontFamily: fontFamily.heading.medium,
    fontSize: size.base,
    borderRightWidth: 0.2,
    borderRightColor: '#154876',
    paddingRight: 10,
    fontWeight: font.medium,
    maxHeight: 20,
  },
});

export default searchFieldStyles;
