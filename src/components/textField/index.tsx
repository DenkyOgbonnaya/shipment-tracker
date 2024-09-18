import * as React from 'react';
import {View, Animated, TextInput, Text} from 'react-native';
import {theme} from 'styles/theme';
import styles from './textField.style';

type Props = React.ComponentPropsWithRef<typeof TextInput> & {
  label?: string;
  info?: string;
  multiline?: boolean;
  errorMessage?: string;
};
const TextField: React.FC<Props> = ({
  errorMessage,
  label,
  multiline,
  placeholder,
  value,
  onChangeText,
  ...rest
}) => {
  const {colors} = theme;
  const [state, setState] = React.useState(value || '');
  const [isFocused, setIsFocused] = React.useState(false);
  const moveText = React.useRef(new Animated.Value(0)).current;

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [2, -10],
  });
  const placeholderColor = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: ['#A7A3B3', '#58536E'],
  });

  const animStyle = {
    transform: [{translateY: yVal}],
  };

  React.useEffect(() => {
    if (state !== '') {
      moveTextTop();
    } else if (state === '') {
      moveTextBottom();
    }

    if (value) {
      moveTextTop();
      setState(value);
    }
  }, [value]);

  const handleTextChange = (text: string) => {
    setState(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  const onFocusHandler = () => {
    moveTextTop();
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    if (!state) {
      moveTextBottom();
    }
    setIsFocused(false);
  };

  return (
    <>
      <View>
        <Animated.Text
          style={[styles.animatedStyle, animStyle, {color: placeholderColor}]}>
          {placeholder}
        </Animated.Text>
        <View>
          <TextInput
            style={[
              [
                styles.container,
                {
                  borderColor: isFocused
                    ? colors.borderHiglight
                    : 'transparent',
                },
              ],
            ]}
            placeholderTextColor={colors.placeholder}
            underlineColorAndroid="transparent"
            value={state}
            onChangeText={handleTextChange}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            blurOnSubmit
            {...rest}
          />
        </View>

        {errorMessage && (
          <Text style={{color: colors.danger, marginTop: 8}}>
            {errorMessage}
          </Text>
        )}
      </View>
    </>
  );
};

export default TextField;
