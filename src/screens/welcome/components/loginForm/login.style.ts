import {StyleSheet} from 'react-native';
import {theme} from 'styles/theme';

const {colors, font, fontFamily, size} = theme;
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: 16,
    gap: 38,
  },
  titleText: {
    fontSize: size.xxxl,
    fontFamily: fontFamily.heading.bold,
    fontWeight: font.bold,
    color: colors.title,
  },
  subText: {
    fontSize: size.base + 1,
    fontFamily: fontFamily.heading.regular,
    fontWeight: font.regular,
    color: colors.text,
    lineHeight: 24,
    letterSpacing: 0.4,
  },
  cancelText: {
    fontSize: size.base + 1,
    fontFamily: fontFamily.heading.semiBold,
    fontWeight: font.semibold,
    color: colors.link,
    lineHeight: 22,
    letterSpacing: 0,
  },
  inputs: {
    gap: 31,
  },
  headerView: {
    gap: 16,
    marginTop: 13,
  },
  action: {
    // flex: 1,
    // justifyContent: 'flex-end',
    marginVertical: 66,
  },
  hstack: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});

export default styles;
