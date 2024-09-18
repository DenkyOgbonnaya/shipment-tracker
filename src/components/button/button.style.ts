import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {theme} from '../../styles/theme';

const {colors, size, font, fontFamily} = theme;

const button: ViewStyle = {
  backgroundColor: colors.primary,
  minHeight: 56,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 6,
  paddingHorizontal: 14,
  borderRadius: 10,
};

const btnText: TextStyle = {
  fontSize: size.base + 1,
  lineHeight: 22,
  fontWeight: font.bold,
  fontFamily: fontFamily.heading.bold,
  letterSpacing: 0.41,
  color: colors.onPrimary,
};

const buttonStyles = StyleSheet.create({
  primary: {
    ...button,
    backgroundColor: colors.primary,
  },
  secondary: {
    ...button,
    backgroundColor: colors.card,
  },
  primaryDisabled: {
    ...button,
    backgroundColor: colors.disabled,
  },
  secondaryDisabled: {
    ...button,
    backgroundColor: colors.border,
  },
  primaryPressed: {
    ...button,
    backgroundColor: '$4169E1',
    opacity: 0.9,
  },
  secondaryPressed: {
    ...button,
    backgroundColor: '#D9E6FD',
    opacity: 0.9,
  },

  primaryText: btnText,
  secondaryText: {
    ...btnText,
    color: colors.onSecondary,
  },
  primaryTextDisabled: {
    ...btnText,
    color: colors.onDisabled,
  },
  secondaryTextDisabled: {
    ...btnText,
    color: colors.disabledText,
  },
  disabledText: {
    ...btnText,
    color: colors.disabledText,
  },
});

export default buttonStyles;
