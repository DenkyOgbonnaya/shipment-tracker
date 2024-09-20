import {useQuery} from '@tanstack/react-query';
import {getShipmentStatus} from 'services/shipment.service';
import {ShipmentStatusInput} from 'types/shipment.type';

export default function useShipmentStatus(input: ShipmentStatusInput) {
  const formData = new FormData();

  formData.append('doctype', input.doctype);
  formData.append('fields', input.fields);

  return useQuery({
    queryKey: ['shipment-status'],
    queryFn: async () => getShipmentStatus(input),
  });
}
