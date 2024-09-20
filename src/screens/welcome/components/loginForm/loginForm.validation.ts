import {object, string} from 'yup';

export const LoginValidationSchema = object({
  usr: string().required('Enter user name or email'),
  pwd: string().required('Enter your password'),
});
