import React from 'react';
import {Text, View} from 'react-native';
import styles from './tag.style';

export type TagVaraiant =
  | 'error'
  | 'delivered'
  | 'cancelled'
  | 'hold'
  | 'recieved';
type Props = React.ComponentPropsWithRef<typeof View> & {
  variant: TagVaraiant | string;
};
export default function Tag({variant, ...rest}: Props) {
  // @ts-ignore
  let tagStyle = styles[variant] || styles.default;
  // @ts-ignore
  let labelStyle = styles[`${variant}Text`] || styles.defaultText;

  return (
    <View style={tagStyle} {...rest}>
      <Text style={labelStyle}>{variant.toUpperCase()}</Text>
    </View>
  );
}
