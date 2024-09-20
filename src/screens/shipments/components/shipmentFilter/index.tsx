import styles from './shipmentFilter.style';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

import {useState} from 'react';
import {theme} from 'styles/theme';
import useShipmentStatus from 'hooks/useShipmentStatus';

interface Props {
  onCancel: () => void;
  onDone: (selections: string[]) => void;
  selected: string;
}
export default function ShipmentFilter({onCancel, onDone, selected}: Props) {
  // Fetch a list of shipments status from the network
  const {data, isLoading} = useShipmentStatus({
    doctype: 'AWB Status',
    fields: ['*'],
  });

  const [selections, setSelections] = useState<string[]>(() => {
    return selected ? selected.split(',') : [];
  });

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
      // add new selection
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

        {isLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator color={theme.colors.primary} />
          </View>
        ) : (
          <View style={styles.statuslist}>
            {data?.message?.map(status => (
              <TouchableOpacity
                key={status.status}
                aria-selected={selections.includes(status.status)}
                aria-label="shipment-status"
                style={[
                  styles.status,
                  {
                    borderColor: selections.includes(status.status)
                      ? theme.colors.borderHiglight
                      : theme.colors.surface,
                  },
                ]}
                onPress={() => onSelect(status.status)}>
                <Text
                  style={[
                    styles.statusText,
                    {
                      color: selections.includes(status.status)
                        ? theme.colors.primary
                        : theme.colors.inputLable,
                    },
                  ]}>
                  {status.status}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}
