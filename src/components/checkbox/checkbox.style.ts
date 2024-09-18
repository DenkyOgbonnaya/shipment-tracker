import {StyleSheet, ViewStyle} from 'react-native';
import {theme} from 'styles/theme';

const {colors} = theme;

const checkbox: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: colors.inputBorder,
  borderWidth: 1,
  height: 20,
  width: 20,
  borderRadius: 4,
  backgroundColor: colors.card,
};

const checkboxStyles = StyleSheet.create({
  default: {
    ...checkbox,
  },
  checked: {
    ...checkbox,
    backgroundColor: colors.secondary,
    borderColor: colors.primary,
  },
});

export default checkboxStyles;
