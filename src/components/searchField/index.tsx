import * as React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {theme} from 'styles/theme';
import styles from './searhField.style';
import {CloseIcon, SearchIcon} from 'assets';

type Props = React.ComponentPropsWithRef<typeof TextInput> & {
  label?: string;
  info?: string;
  multiline?: boolean;
  errorMessage?: string;
};
const SearchField: React.FC<Props> = ({
  errorMessage,
  label,
  multiline,
  value,
  onChangeText,
  ...rest
}) => {
  const {colors} = theme;
  const [state, setState] = React.useState(value || '');
  const [isFocused, setIsFocused] = React.useState(false);

  const handleTextChange = (text: string) => {
    setState(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  const resetSearch = () => {
    setState('');
    if (onChangeText) onChangeText('');
  };

  return (
    <>
      <View>
        <View
          style={[
            styles.wrap,
            {borderColor: isFocused ? colors.borderHiglight : 'transparent'},
          ]}>
          <View>
            <SearchIcon
              color={state ? colors.borderHiglight : colors.placeholder}
            />
          </View>
          <TextInput
            style={[styles.container]}
            placeholderTextColor={colors.placeholder}
            underlineColorAndroid="transparent"
            value={state}
            onChangeText={handleTextChange}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            {...rest}
          />
          {state && (
            <TouchableOpacity onPress={resetSearch}>
              <CloseIcon />
            </TouchableOpacity>
          )}
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

export default SearchField;
