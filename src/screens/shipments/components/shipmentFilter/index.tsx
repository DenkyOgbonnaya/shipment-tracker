import styles from './shipmentFilter.style';
import {Text, TouchableOpacity, View} from 'react-native';

import {useState} from 'react';
import {theme} from 'styles/theme';

interface Props {
  onCancel: () => void;
  onDone: (selections: string[]) => void;
}
export default function ShipmentFilter({onCancel, onDone}: Props) {
  const [selections, setSelections] = useState<string[]>([]);
  const statuses = [
    'Recieved',
    'Putaway',
    'Delivered',
    'Canceled',
    'Rejected',
    'Lost',
    'On Hold',
  ];
  const handleDone = () => {
    onDone(selections);
  };

  const onSelect = (status: string) => {
    const itemExist = selections.includes(status);

    if (itemExist) {
      // remove the selected item
      const updatedSelections = selections.filter(item => item !== status);
      setSelections(updatedSelections);
    } else {
      setSelections(selections.concat(status));
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={onCancel}>
          <View style={styles.hstack}>
            <Text style={styles.cancelText}>Cancel</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.titleText}>Filters</Text>
        <TouchableOpacity onPress={handleDone}>
          <View style={styles.hstack}>
            <Text style={styles.cancelText}>Done</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.inputs}>
        <Text style={styles.labelText}>SHIPMENT STATUS</Text>

        <View style={styles.statuslist}>
          {statuses?.map(status => (
            <TouchableOpacity
              key={status}
              aria-selected={selections.includes(status)}
              aria-label="shipment-status"
              style={[
                styles.status,
                {
                  borderColor: selections.includes(status)
                    ? theme.colors.borderHiglight
                    : theme.colors.surface,
                },
              ]}
              onPress={() => onSelect(status)}>
              <Text
                style={[
                  styles.statusText,
                  {
                    color: selections.includes(status)
                      ? theme.colors.primary
                      : theme.colors.inputLable,
                  },
                ]}>
                {status}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
