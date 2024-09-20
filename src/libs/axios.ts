import axios from 'axios';
import {BASE_URL} from 'constants/environment.constant';

// axios library config for making HTTP network request

const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': true,
    crossorigin: true,
  },
});

export default httpClient;
