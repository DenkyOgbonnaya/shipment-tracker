import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {theme} from 'styles/theme';

const {colors, size, font, fontFamily} = theme;

const tag: ViewStyle = {
  minHeight: 23,
  borderRadius: 4,
  paddingHorizontal: 6,
  paddingVertical: 4,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: colors.card,
  borderWidth: 1,
};

const tagLabel: TextStyle = {
  fontSize: size.sm - 1,
  fontFamily: fontFamily.body.semiBold,
  fontWeight: font.semibold,
};

const tagStyles = StyleSheet.create({
  default: {
    ...tag,
  },
  recieved: {
    ...tag,
    backgroundColor: colors.recieved,
  },
  error: {
    ...tag,
    backgroundColor: colors.danger,
  },
  delivered: {
    ...tag,
    backgroundColor: colors.success,
  },
  cancelled: {
    ...tag,
    backgroundColor: colors.cancelled,
  },
  hold: {
    ...tag,
    backgroundColor: colors.hold,
  },
  defaultText: {
    ...tagLabel,
  },
  errorText: {
    ...tagLabel,
    color: colors.onDanger,
  },
  deliveredText: {
    ...tagLabel,
    color: colors.onSuccess,
  },
  cancelledText: {
    ...tagLabel,
    color: colors.onCancelled,
  },
  holdText: {
    ...tagLabel,
    color: colors.onHold,
  },

  recievedText: {
    ...tagLabel,
    color: colors.onReceved,
  },
});

export default tagStyles;
