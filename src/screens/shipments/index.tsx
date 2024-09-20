import HeaderBar from 'components/headerBar';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './shipment.style';
import SearchField from 'components/searchField';
import {FilterIcon, ScannerIcon} from 'assets';
import ShipmentCard from './components/shipment';
import Checkbox from 'components/checkbox';
import {useRef, useState} from 'react';
import {Modalize} from 'react-native-modalize';
import ModalHeader from 'components/modalHeader';
import ShipmentFilter from './components/shipmentFilter';
import useAuth from 'hooks/useAuth';
import useShipmentList from 'hooks/useShipmentList';
import {Shipment} from 'types/shipment.type';
import Jumbotron from 'components/jumbotron';
import {theme} from 'styles/theme';
import useDebounce from 'hooks/useDebounce';

export default function Shipments() {
  const [search, setSearch] = useState('');
  const [selectedShipments, setSelectedShipments] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState('');

  const {user} = useAuth();
  const filterRef = useRef<Modalize | null>(null);

  // 3 seconds search debounce
  const debouncedSearch = useDebounce(search, 3000);

  const {data, isLoading, refetch, isRefetching} = useShipmentList(
    {doctype: 'AWB', fields: ['*']},
    {search: debouncedSearch, status: statusFilter},
  );

  // handle single shipment selection
  const handleSelection = (shipment: Shipment, value: boolean) => {
    if (!value) {
      const filteredShipments = selectedShipments.filter(
        barcode => barcode !== shipment.barcode,
      );
      setSelectedShipments(filteredShipments);
    } else {
      setSelectedShipments(selectedShipments.concat(shipment.barcode));
    }
  };

  const handleSelectAll = (value: boolean) => {
    if (value) {
      const barcodes = data?.message.map(shipment => shipment.barcode);
      setSelectedShipments(barcodes!);
    } else {
      // empty selections
      setSelectedShipments([]);
    }
  };

  // render shipments items
  const renderShipments = ({item}: ListRenderItemInfo<Shipment>) => {
    return (
      <ShipmentCard
        shipment={item}
        isSelected={selectedShipments.includes(item.barcode)}
        onSelect={value => handleSelection(item, value)}
      />
    );
  };

  const handleOpenFilter = () => {
    filterRef.current?.open();
  };
  const handleCloseFilter = () => {
    filterRef.current?.close();
  };

  const handleFilter = (selections: string[]) => {
    if (!selections.length) {
      handleCloseFilter();
      setStatusFilter('');
      return;
    }
    setStatusFilter(selections.toString());

    handleCloseFilter();
  };

  const handleSearch = (searchString: string) => {
    setSearch(searchString);
  };

  // refresh shipments
  const handleRefresh = async () => {
    await refetch();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.innerContainer}>
        <HeaderBar />
        <View style={styles.toView}>
          <Text style={styles.greetText}>Hello,</Text>
          <Text style={styles.userText}>{user?.full_name}</Text>
          <SearchField
            placeholder="Search"
            testID="search-field"
            aria-label="search"
            onChangeText={handleSearch}
          />

          <View style={styles.shipmentActions}>
            <TouchableOpacity
              style={[
                styles.filterBtn,
                {
                  borderColor: statusFilter
                    ? theme.colors.borderHiglight
                    : theme.colors.surface,
                },
              ]}
              testID="filter"
              accessibilityHint="Open shipments filter modal"
              onPress={handleOpenFilter}>
              <View style={styles.hstack}>
                <FilterIcon />
                <Text
                  style={[
                    styles.filterText,
                    {
                      color: statusFilter
                        ? theme.colors.primary
                        : theme.colors.inputLable,
                    },
                  ]}>
                  Filter
                </Text>
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
      </View>

      <View style={styles.shipmentContainer}>
        <View style={styles.row}>
          <Text style={styles.titleText}>Shipments</Text>
          <View style={styles.hstack}>
            <Checkbox onCheck={value => handleSelectAll(value)} />
            <Text style={styles.markText}>Mark All</Text>
          </View>
        </View>

        {isLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator color={theme.colors.primary} />
          </View>
        ) : (
          // <View style={styles.flatlist}>
          <FlatList
            data={data?.message || []}
            renderItem={renderShipments}
            keyExtractor={item => item.name.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.listSeperator} />}
            ListEmptyComponent={<Jumbotron message="No Shipments" />}
            refreshControl={
              <RefreshControl
                refreshing={isRefetching}
                onRefresh={handleRefresh}
              />
            }
            contentContainerStyle={{paddingBottom: 10}}
          />
        )}
      </View>
      <Modalize
        ref={filterRef}
        HeaderComponent={<ModalHeader />}
        adjustToContentHeight={true}
        withHandle={false}>
        <ShipmentFilter
          selected={statusFilter}
          onCancel={handleCloseFilter}
          onDone={handleFilter}
        />
      </Modalize>
    </SafeAreaView>
  );
}
