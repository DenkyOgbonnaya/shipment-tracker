import Form from 'components/form/Form';
import styles from './login.style';
import {Text, TouchableOpacity, View} from 'react-native';
import UrlField from 'components/urlField';
import TextField from 'components/textField';
import Button from 'components/button';
import {ChevronLeft} from 'assets';

interface Props {
  onCancel: () => void;
  onLogin: () => void;
}
export default function LoginForm({onCancel, onLogin}: Props) {
  const handleLogin = () => {
    onLogin();
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
            placeholder="Username / Email"
            keyboardType="email-address"
          />
          <TextField placeholder="Password" secureTextEntry />
        </View>

        <View style={styles.action}>
          <Button onPress={handleLogin}>Login</Button>
        </View>
      </View>
    </Form>
  );
}
