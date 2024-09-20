import {
  Box,
  ArrowRight,
  DirectArrow,
  ArrowRightLarge,
  CallIcon,
  WhatsappIcon,
} from 'assets';
import Checkbox from 'components/checkbox';
import Tag from 'components/tag';
import {useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Linking,
} from 'react-native';
import {theme} from 'styles/theme';
import {Shipment} from 'types/shipment.type';
import {truncateWords} from 'utills/helper';

interface Props {
  shipment: Shipment;
  isSelected?: boolean;
  onSelect: (value: boolean, shipment: Shipment) => void;
}
export default function ShipmentCard({isSelected, onSelect, shipment}: Props) {
  const fadeValue = useRef(new Animated.Value(0)).current;
  const [expanded, setExpanded] = useState(false);

  // makes the shipment details visible
  const handleStartFade = () => {
    return Animated.timing(fadeValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  // hides the shipment details
  const reverseFade = () => {
    return Animated.timing(fadeValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  // toggle visibility of the sipment details
  const toggleDetails = () => {
    if (expanded) {
      reverseFade();
    } else {
      handleStartFade();
    }

    setExpanded(expanded => !expanded);
  };

  const handleCall = () => {
    if (shipment.consignee_phone) {
      Linking.openURL(`tel:${shipment.consignee_phone}`);
    }
  };
  const handleWhatsapp = () => {
    if (shipment.consignee_phone) {
      Linking.openURL(`https://wa.me/${shipment.consignee_phone}`);
    }
  };

  const maxHight = fadeValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
    extrapolate: 'clamp',
  });
  const minHight = fadeValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 195],
    extrapolate: 'clamp',
  });

  return (
    <View
      key={`${isSelected}`}
      style={[
        styles.wrapper,
        {
          borderColor: isSelected
            ? theme.colors.borderHiglight
            : theme.colors.surface,
        },
      ]}>
      <View style={[styles.container]}>
        <View style={styles.col1}>
          <Checkbox
            value={isSelected}
            onCheck={value => onSelect(value, shipment)}
            aria-label="mark-shipment"
            testID="shipment-mark"
            aria-checked={isSelected}
          />
          <Image source={Box} />
          <View style={styles.vstack}>
            <Text style={styles.shipmentTag}>AWB</Text>
            <Text style={styles.shipmentNumber}>
              {truncateWords(shipment.name, 12)}
            </Text>
            <View style={styles.hstack}>
              <Text style={styles.shipmentLocation}>
                {truncateWords(shipment.origin_city, 10)}
              </Text>
              <ArrowRight />
              <Text style={styles.shipmentLocation}>
                {truncateWords(shipment.destination_city, 10)}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.col2}>
          <Tag
            variant={truncateWords(shipment.status.toLowerCase(), 8)}
            aria-label="status"
          />
          <TouchableOpacity
            onPress={toggleDetails}
            style={[
              styles.direction,
              {
                backgroundColor: expanded
                  ? theme.colors.primary
                  : theme.colors.card,
              },
            ]}
            aria-label="toggle-details"
            accessibilityHint="toggles the shipment detials visibility">
            <DirectArrow
              color={expanded ? theme.colors.onPrimary : theme.colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>

      {
        //  details
      }
      <Animated.View
        style={[
          styles.closeAbleView,
          {
            maxHeight: maxHight,
            minHeight: minHight,
            borderColor: isSelected ? theme.colors.primary : theme.colors.card,
          },
        ]}
        aria-label="shipment-details"
        aria-expanded={expanded}>
        <View style={styles.row}>
          <View>
            <Text style={styles.labelText}>Origin</Text>
            <Text style={styles.locationText}>
              {truncateWords(shipment.origin_city, 10)}
            </Text>
            <Text style={styles.addressText}>
              {truncateWords(shipment.origin_state, 10)},{' '}
              {truncateWords(shipment.origin_zone, 10)}
            </Text>
          </View>
          <ArrowRightLarge />

          <View>
            <Text style={styles.labelText}>Destination</Text>
            <Text style={styles.locationText}>
              {truncateWords(shipment.destination_city, 10)}
            </Text>
            <Text style={styles.addressText}>
              {truncateWords(shipment.destination_city, 10)},{' '}
              {truncateWords(shipment.destination_zone, 10)}
            </Text>
          </View>
        </View>

        <View style={styles.shipmentActions}>
          <TouchableOpacity
            onPress={handleCall}
            style={styles.callBtn}
            aria-label="call"
            testID="call-btn">
            <View style={styles.hstack}>
              <CallIcon />
              <Text style={styles.actionText}>Call</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleWhatsapp}
            style={styles.wahtsappBtn}
            aria-label="whatsapp"
            testID="whatsapp">
            <View style={styles.hstack}>
              <WhatsappIcon />
              <Text style={styles.actionText}>WhatsApp</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    backgroundColor: theme.colors.surface,
    borderWidth: 2,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.surface,
    paddingHorizontal: 12,
    paddingVertical: 12,
    height: 67,
  },
  vstack: {},
  hstack: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  col1: {
    flex: 0.8,
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
  },
  col2: {
    flex: 0.4,
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
  },
  direction: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    backgroundColor: theme.colors.card,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shipmentTag: {
    fontSize: theme.size.sm + 1,
    fontWeight: theme.font.regular,
    fontFamily: theme.fontFamily.body.regular,
    color: theme.colors.subText,
  },
  shipmentNumber: {
    fontSize: theme.size.base + 2,
    fontWeight: theme.font.semibold,
    fontFamily: theme.fontFamily.body.semiBold,
    color: theme.colors.title,
  },
  shipmentLocation: {
    fontSize: theme.size.sm + 1,
    fontWeight: theme.font.regular,
    fontFamily: theme.fontFamily.body.regular,
    color: theme.colors.text,
    textTransform: 'capitalize',
  },
  closeAbleView: {
    borderTopWidth: 2,
    borderStyle: 'dashed',
    borderColor: theme.colors.card,
    backgroundColor: theme.colors.surface,
    padding: 12,
    gap: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationText: {
    fontSize: theme.size.base,
    fontWeight: theme.font.regular,
    fontFamily: theme.fontFamily.body.regular,
    color: theme.colors.label,
    textTransform: 'capitalize',
  },
  labelText: {
    fontSize: theme.size.sm - 1,
    fontWeight: theme.font.regular,
    fontFamily: theme.fontFamily.body.regular,
    color: theme.colors.primary,
  },
  addressText: {
    fontSize: theme.size.sm + 1,
    fontWeight: theme.font.regular,
    fontFamily: theme.fontFamily.body.regular,
    color: theme.colors.inputLable,
    textTransform: 'capitalize',
  },

  shipmentActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 14,
  },
  callBtn: {
    backgroundColor: theme.colors.primaryLight,
    minHeight: 44,
    maxWidth: 150,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  actionText: {
    fontSize: theme.size.base,
    fontWeight: theme.font.regular,
    fontFamily: theme.fontFamily.body.regular,

    color: theme.colors.onPrimary,
  },
  wahtsappBtn: {
    backgroundColor: theme.colors.whatsapp,
    minHeight: 44,
    maxWidth: 150,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
});
