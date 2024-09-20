import {AnyObject, ObjectSchema} from 'yup';

const validationHandler = async <T extends AnyObject>(
  data: T,
  formSchema: ObjectSchema<T, AnyObject, any>,
): Promise<{validationErrors: T; isValid: boolean}> => {
  const isValid = await formSchema.isValid(data, {abortEarly: false});
  const errors = await formSchema
    .validate(data, {abortEarly: false})
    .catch(err => {
      return err.inner.reduce(
        (acc: any, error: any) => ({...acc, [error.path]: error.message}),
        {},
      );
    });
  const validationErrors = errors;
  return {validationErrors, isValid};
};

export default validationHandler;
