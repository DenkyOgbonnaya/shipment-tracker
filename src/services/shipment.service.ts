import {handleHttpPostRequest} from 'network/http.network';
import {ShipmentStatus, ShipmentStatusInput} from 'types/shipment.type';

export const getShipmentStatus = async (input: ShipmentStatusInput) => {
  return handleHttpPostRequest<
    ShipmentStatusInput,
    {message: ShipmentStatus[]}
  >('/api/method/frappe.client.get_list', input);
};
