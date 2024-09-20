import httpClient from 'libs/axios';

// Utility services to handle generic HTTP requests

// Generic http GET request handler
export const handleHttpGetRequest = async <T>(payload: string): Promise<T> => {
  const {data} = await httpClient.get(payload);
  return data;
};

// Generic http POST request handler
export const handleHttpPostRequest = async <T, R>(
  path: string,
  payload: T,
): Promise<R> => {
  const {data} = await httpClient.post(`${path}`, payload);
  return data;
};
// generic http  PUT request handler
export const handlePutRequest = async <T, R>(
  path: string,
  payload: T,
): Promise<R> => {
  const {data} = await httpClient.put(`${path}`, payload);
  return data;
};
// generic http  PATCH request handler
export const handlePatchRequest = async <T, G>(
  path: string,
  payload: T,
): Promise<G> => {
  const {data} = await httpClient.patch(`${path}`, payload);

  return data;
};

// generic http  DELETE request handler
export const handleDeleteRequest = async <T>(payload: string): Promise<T> => {
  const {data} = await httpClient.delete(`${payload}`);
  return data;
};
