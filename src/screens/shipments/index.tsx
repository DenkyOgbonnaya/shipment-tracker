import HeaderBar from 'components/headerBar';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './shipment.style';
import SearchField from 'components/searchField';
import {FilterIcon, ScannerIcon} from 'assets';
import Shipment from './components/shipment';
import Checkbox from 'components/checkbox';
import {useRef} from 'react';
import {Modalize} from 'react-native-modalize';
import ModalHeader from 'components/modalHeader';
import ShipmentFilter from './components/shipmentFilter';

export default function Shipments() {
  const filterRef = useRef<Modalize | null>(null);

  const handleSelection = () => {};
  const renderShipments = (info: ListRenderItemInfo<number>) => {
    return <Shipment isSelected={true} onSelect={handleSelection} />;
  };

  const handleOpenFilter = () => {
    filterRef.current?.open();
  };
  const handleCloseFilter = () => {
    filterRef.current?.close();
  };

  const handleFilter = (selections: string[]) => {
    handleCloseFilter();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.innerContainer}>
        <HeaderBar />
        <View style={styles.toView}>
          <Text style={styles.greetText}>Hello,</Text>
          <Text style={styles.userText}>Ibrahim Shaker</Text>
          <SearchField
            placeholder="Search"
            testID="search-field"
            aria-label="search"
          />

          <View style={styles.shipmentActions}>
            <TouchableOpacity
              style={styles.filterBtn}
              testID="filter"
              accessibilityHint="Open shipments filter modal"
              onPress={handleOpenFilter}>
              <View style={styles.hstack}>
                <FilterIcon />
                <Text style={styles.filterText}>Filter</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scanBtn}>
              <View style={styles.hstack}>
                <ScannerIcon />
                <Text style={styles.scanText}>Add Scan</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.shipmentContainer}>
          <View style={styles.row}>
            <Text style={styles.titleText}>Shipments</Text>
            <View style={styles.hstack}>
              <Checkbox />
              <Text style={styles.markText}>Mark All</Text>
            </View>
          </View>

          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={renderShipments}
            keyExtractor={item => item.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.listSeperator} />}
          />
        </View>
      </View>
      <Modalize
        ref={filterRef}
        HeaderComponent={<ModalHeader />}
        adjustToContentHeight={true}
        withHandle={false}>
        <ShipmentFilter onCancel={handleCloseFilter} onDone={handleFilter} />
      </Modalize>
    </SafeAreaView>
  );
}
