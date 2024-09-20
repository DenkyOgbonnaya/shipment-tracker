import {handleHttpPostRequest} from 'network/http.network';
import {
  Shipment,
  ShipmentListInput,
  ShipmentListQuery,
  ShipmentStatus,
  ShipmentStatusInput,
} from 'types/shipment.type';

// handles http network request for get shipments related data

// get list of shipments status
export const getShipmentStatus = async (input: ShipmentStatusInput) => {
  return handleHttpPostRequest<
    ShipmentStatusInput,
    {message: ShipmentStatus[]}
  >('/api/method/frappe.client.get_list', input);
};

// get list of shipments
export const getShipmentList = async (
  input: ShipmentListInput,
  query: ShipmentListQuery,
) => {
  // construct filter fields from search and status
  const filters = constructShipmentFilterQuery(query);

  return handleHttpPostRequest<ShipmentListInput, {message: Shipment[]}>(
    '/api/method/frappe.client.get_list',
    {...input, filters},
  );
};

const constructShipmentFilterQuery = (query: ShipmentListQuery) => {
  const filterQuary: Record<keyof Shipment | string, string[]> = {};

  if (query.search) {
    // construct wide list of possible matches
    filterQuary.name = ['like', `%${query.search}%`];
    // filterQuary.origin_city = ['like', `%${query.search}%`];
    // ... other query fields can be added here
  }
  if (query.status) {
    // filter by given status
    filterQuary.status = ['like', query.status];
  }

  return filterQuary;
};
