export interface ShipmentStatusInput {
  doctype: string;
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
