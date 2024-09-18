import React, {FC} from 'react';
import {
  ViewStyle,
  Pressable,
  Text,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import styles from './button.style';
import {theme} from '../../styles/theme';

export type ButtonVariant = 'primary' | 'secondary';
type Props = React.ComponentPropsWithRef<typeof Pressable> & {
  children: string | React.ReactNode;
  buttonStyle?: ViewStyle;
  labelStyle?: TextStyle;
  disabled?: boolean;
  isLoading?: boolean;
  variant?: ButtonVariant;
};
const Button: FC<Props> = ({
  children,
  buttonStyle = {},
  labelStyle = {},
  disabled,
  isLoading,
  variant = 'primary',
  ...rest
}) => {
  // default variant is primary
  let btnStyle = disabled ? styles[`${variant}Disabled`] : styles[variant];
  let btnStylePressed = styles[`${variant}Pressed`];

  let textStyle = disabled
    ? styles[`${variant}TextDisabled`]
    : styles[`${variant}Text`];

  const loadingColor =
    variant === 'primary' ? theme.colors.onPrimary : theme.colors.primary;

  // render a defualt Text given a sting as children
  const buttonContent =
    typeof children === 'string' ? (
      <Text style={[textStyle, labelStyle]}>{children}</Text>
    ) : (
      children
    );

  return (
    <Pressable
      style={({pressed}) => [pressed ? btnStylePressed : btnStyle, buttonStyle]}
      disabled={disabled}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator size="large" color={loadingColor} />
      ) : (
        buttonContent
      )}
    </Pressable>
  );
};
export default Button;
