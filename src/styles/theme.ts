import {Platform} from 'react-native';

export const theme = {
  colors: {
    background: '#FFFFFF',
    primary: '#2F50C1',
    onPrimary: '#FFFFFF',
    secondary: '#D9E6FD',
    onSecondary: '#2F50C1',
    surface: '#F4F2F8',
    disabled: '#EAE7F2',
    onDisabled: '#A7A3B3',
    card: '#FFFFFF',
    link: '#2F50C1',
    input: '#F4F2F8',
    onInput: '2#F50C1',
    placeholder: '#A7A3B3',
    inputLable: '#58536E',
    text: '#757281',
    heading: 'black',
    label: 'black',
    title: 'black',
    border: '#F4F2F8',
    borderHiglight: '#6E91EC',
    selection: '#2F50C1',
    active: '#5B4CCC',
    onSuccess: '#208D28',
    success: '#E3FAD6',
    danger: '#FEE3D4',
    onDanger: '#D12030',
    recieved: '#D12030',
    onReceved: '#2F50C1',
    cancelled: '#FFFFFF',
    onCancelled: '#58536E',
    hold: '#FFF3D5',
    onHold: '#DB7E21',
    disabledText: '#CDCAD9',
    inputBorder: '#757281',
  } as const,
  size: {
    xs: 10,
    sm: 12,
    md: 14,
    base: 16,
    lg: 18,
    xl: 20,
    xxl: 28,
    xxxl: 34,
  } as const,
  font: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  } as const,

  fontFamily: {
    body: {
      light: Platform.select({
        ios: 'Inter-Light',
        android: 'Inter-Light',
      }),
      regular: Platform.select({
        ios: 'Inter-Regular',
        android: 'Inter-Regular',
      }),
      medium: Platform.select({
        ios: 'Inter-Medium',
        android: 'Inter-Medium',
      }),
      semiBold: Platform.select({
        ios: 'Inter-SemiBold',
        android: 'Inter-SemiBold',
      }),
      bold: Platform.select({
        ios: 'Inter-Bold',
        android: 'Inter-Bold',
      }),
    } as const,
    heading: {
      thin: Platform.select({
        ios: 'WorkSans-Thin',
        android: 'WorkSans-Thin',
      }),
      light: Platform.select({
        ios: 'SFProDisplay-Light',
        android: 'SFProDisplay-Light',
      }),
      regular: Platform.select({
        ios: 'SFProDisplay-Regular',
        android: 'WorkSans-Regular',
      }),
      medium: Platform.select({
        ios: 'SFProDisplay-Medium',
        android: 'SFProDisplay-Medium',
      }),
      semiBold: Platform.select({
        ios: 'SFProDisplay-SemiBold',
        android: 'SFProDisplay-SemiBold',
      }),
      bold: Platform.select({
        ios: 'SFProDisplay-Bold',
        android: 'SFProDisplay-Bold',
      }),
    } as const,
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: theme.colors.background,
  },
};
