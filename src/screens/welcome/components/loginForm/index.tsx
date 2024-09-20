import Form from 'components/form/Form';
import styles from './login.style';
import {Text, TouchableOpacity, View} from 'react-native';
import UrlField from 'components/urlField';
import TextField from 'components/textField';
import Button from 'components/button';
import {ChevronLeft} from 'assets';
import useInputChange from 'hooks/useInputChange';
import {LoginError, LoginInput, LoginRes} from './loginForm.type';
import {useState} from 'react';
import validationHandler from 'utills/validationHandler';
import {LoginValidationSchema} from './loginForm.validation';
import {useMutation} from '@tanstack/react-query';
import {handleUserLogin} from './loginForm.srvice';
import useAuth from 'hooks/useAuth';
import {object} from 'yup';

interface Props {
  onCancel: () => void;
  onLogin: () => void;
}
export default function LoginForm({onCancel, onLogin}: Props) {
  const {setUser} = useAuth();
  const {input, onChange} = useInputChange<LoginInput>({
    usr: '',
    pwd: '',
  });

  const [errors, setErrors] = useState<LoginInput>({
    usr: '',
    pwd: '',
  });

  const isInputsNotField = Object.values(input).some(field => field === '');

  //login mutation processor
  const {isPending, mutate, error} = useMutation<
    LoginRes,
    LoginError,
    LoginInput
  >({
    mutationFn: async (input: LoginInput) => await handleUserLogin(input),
    onSuccess: data => {
      setUser({full_name: data.full_name});
      onLogin();
    },
  });

  // handle user submit action
  const submitHandler = async () => {
    setErrors({
      usr: '',
      pwd: '',
    });

    // validate login iputs
    const {isValid, validationErrors} = await validationHandler<LoginInput>(
      {...input, usr: input.usr.trim()},
      LoginValidationSchema,
    );

    if (isValid) {
      mutate({...input, usr: input.usr.trim()});
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <Form>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={onCancel}>
            <View style={styles.hstack}>
              <ChevronLeft />
              <Text style={styles.cancelText}>Cancel</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleText}>Login</Text>
          <Text style={styles.subText}>
            Please enter your First, Last and your phone number in order to
            register
          </Text>
        </View>
        <View style={styles.inputs}>
          <UrlField placeholder="URL" keyboardType="url" />
          <TextField
            value={input.usr}
            onChangeText={value => onChange('usr', value)}
            errorMessage={errors.usr}
            placeholder="Username / Email"
            keyboardType="email-address"
          />
          <TextField
            value={input.pwd}
            onChangeText={value => onChange('pwd', value)}
            errorMessage={errors.pwd}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        {error && (
          <Text style={styles.errorText}>{error.response.data.message}</Text>
        )}

        <View style={styles.action}>
          <Button
            isLoading={isPending}
            disabled={isInputsNotField}
            onPress={submitHandler}>
            Login
          </Button>
        </View>
      </View>
    </Form>
  );
}
