import {handleHttpPostRequest} from 'network/http.network';
import {LoginInput, LoginRes} from './loginForm.type';

// handles network request to log user in
export const handleUserLogin = (input: LoginInput) => {
  return handleHttpPostRequest<LoginInput, LoginRes>(
    '/api/method/login',
    input,
  );
};
