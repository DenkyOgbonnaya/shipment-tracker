/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import {Checkmark} from 'assets';
import React, {FC, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './checkbox.style';

type Props = React.ComponentPropsWithRef<typeof TouchableOpacity> & {
  value?: boolean;
  onCheck?: (value: boolean) => void;
};
const Checkbox: FC<Props> = ({value, onCheck, ...rest}) => {
  const [checked, setChecked] = useState(value ?? false);

  const handleChange = () => {
    setChecked(state => !state);

    if (onCheck) onCheck(!checked);
  };

  return (
    <TouchableOpacity
      onPress={handleChange}
      role="checkbox"
      aria-checked={checked}
      style={[checked ? styles.checked : styles.default]}
      {...rest}>
      {checked && <Checkmark testID="checbox-mark" />}
    </TouchableOpacity>
  );
};

export default Checkbox;
