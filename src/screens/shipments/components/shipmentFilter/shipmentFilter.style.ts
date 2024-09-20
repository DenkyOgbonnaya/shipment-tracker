import {StyleSheet} from 'react-native';
import {theme} from 'styles/theme';

const {colors, font, fontFamily, size} = theme;
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    gap: 24,
    paddingBottom: 50,
  },
  status: {
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
  },
  statuslist: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },
  statusText: {
    fontSize: size.base,
    fontFamily: fontFamily.body.regular,
    fontWeight: font.regular,
    color: colors.inputLable,
    textTransform: 'capitalize',
  },
  titleText: {
    fontSize: size.base + 2,
    fontFamily: fontFamily.heading.bold,
    fontWeight: font.bold,
    color: colors.title,
  },
  labelText: {
    fontSize: size.md - 1,
    fontFamily: fontFamily.body.medium,
    fontWeight: font.medium,
    color: colors.inputLable,
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
    gap: 24,
    paddingHorizontal: 16,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: theme.colors.border,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  action: {
    marginVertical: 66,
  },
  hstack: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
