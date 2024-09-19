import React, {ComponentProps, FC} from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

// This is a wrapper for screens with text input elements
// It closes the keyboard on Text input blur
// Also prevents th keyboard from blocking the Text input

interface IProps extends ComponentProps<typeof TouchableWithoutFeedback> {
  children: React.ReactNode;
}
const Form: FC<IProps> = ({children, ...rest}) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard} {...rest}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Form;
