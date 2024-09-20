import {useQuery} from '@tanstack/react-query';
import {getShipmentList} from 'services/shipment.service';
import {ShipmentListInput, ShipmentListQuery} from 'types/shipment.type';

// re-usable hook to get list of shipments over the http network

export default function useShipmentList(
  input: ShipmentListInput,
  query: ShipmentListQuery,
) {
  const {search, status} = query;

  return useQuery({
    queryKey: ['shipment-list', search, status],
    queryFn: async () => getShipmentList(input, query),
  });
}
