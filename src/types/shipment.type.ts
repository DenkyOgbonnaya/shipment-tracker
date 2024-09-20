export interface ShipmentStatusInput {
  doctype: 'AWB Status';
  fields: string[];
}

export interface ShipmentStatus {
  name: string;
  creation: string;
  modified: string;
  modified_by: string;
  owner: string;
  docstatus: number;
  idx: number;
  status: string;
  color: string;
  _user_tags: null;
  _comments: null;
  _assign: null;
  _liked_by: null;
}

export interface ShipmentListInput {
  doctype: 'AWB';
  fields: string[];
  filters?: Record<keyof Partial<Shipment>, string[]>;
}

export interface ShipmentListQuery {
  search?: string;
  status?: string;
}

export interface Shipment {
  name: string;
  creation: string;
  modified: string;
  modified_by: string;
  owner: string;
  docstatus: number;
  idx: number;
  sender: string;
  origin_area: string;
  origin_city: string;
  sender_phone: null;
  sender_name: string;
  origin_adress_line_1: string;
  origin_country: string;
  sender_address: string;
  origin_address_line2: string;
  origin_state: string;
  consignee: string;
  destination_area: string;
  destination_city: string;
  consignee_phone: string;
  consignee_name: string;
  destination_address_line_1: unknown;
  destination_country: string;
  consignee_address: unknown;
  destination_address_line_2: unknown;
  destination_state: string;
  origin_zone: string;
  destination_zone: string;
  service: unknown;
  total_weight: number;
  status: string;
  movable_units: unknown;
  amended_from: unknown;
  company: string;
  cod: number;
  total_cod: number;
  barcode: string;
  branch: unknown;
  currency: string;
  pieces: number;
  not_available: number;
  percentage: number;
  total_fees: number;
  awb_terms_template: unknown;
  awb_terms_and_conditions: unknown;
  sales_invoice_created: number;
  _user_tags: unknown;
  _comments: unknown;
  _assign: unknown;
  _liked_by: unknown;
  geolocation_evkp: null;
  shipping_service: string;
  delivery_time: null;
  from_client_side: number;
  destination_branch: null;
  origin_branch: null;
  delivery_due_date: unknown;
  company_currency: string;
  exchange_rate: number;
  overdue: number;
  posting_date: string;
  posting_time: string;
  is_returned: number;
  custodian: unknown;
  assignee: unknown;
  closed: number;
  custodian_commission: number;
  awb_date: string;
  type: unknown;
  origin_address_line_1: string;
  service_type: string;
  adjusted_cod: number;
}
