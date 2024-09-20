import {StyleSheet} from 'react-native';
import {theme} from 'styles/theme';

const {colors, size, font, fontFamily} = theme;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    gap: 12,
  },
  innerContainer: {
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  toView: {
    marginTop: 12,
  },
  greetText: {
    fontSize: size.md,
    fontFamily: fontFamily.body.medium,
    fontWeight: font.medium,
  },
  userText: {
    fontSize: size.xxl,
    fontFamily: fontFamily.heading.bold,
    fontWeight: font.bold,
    color: colors.title,
    marginBottom: 24,
  },
  hstack: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  shipmentActions: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginTop: 54,
  },
  filterBtn: {
    backgroundColor: colors.surface,
    minHeight: 44,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  filterText: {
    fontSize: size.base,
    fontWeight: font.regular,
    fontFamily: fontFamily.heading.regular,

    color: colors.inputLable,
  },
  scanBtn: {
    backgroundColor: colors.primary,
    minHeight: 44,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  scanText: {
    fontSize: size.base,
    fontWeight: font.regular,
    fontFamily: fontFamily.heading.regular,

    color: colors.onPrimary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: size.xl + 2,
    fontFamily: fontFamily.heading.bold,
    fontWeight: font.bold,
    color: colors.title,
  },
  markText: {
    fontSize: size.base + 2,
    fontFamily: fontFamily.body.regular,
    fontWeight: font.regular,
    color: colors.link,
  },
  shipmentContainer: {
    marginTop: 64,
    gap: 16,
    paddingBottom: 550,
  },
  listSeperator: {
    marginBottom: 8,
  },
});

export default styles;
