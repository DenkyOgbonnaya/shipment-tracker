import {SafeAreaView, StatusBar, View} from 'react-native';
import {Modalize} from 'react-native-modalize';

import styles from './welcome.style';
import Button from 'components/button';
import {Logo} from 'assets';
import {useRef} from 'react';
import ModalHeader from 'components/modalHeader';
import LoginForm from './components/loginForm';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from 'navigations/types/authStack.types';
import {DASHBOARD_SCREEN} from 'navigations/constants/authStack.constants';

export default function Welcome() {
  const loginRef = useRef<Modalize | null>(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList, 'Welcome'>>();

  const handleOpenLoginModal = () => {
    loginRef.current?.open();
  };

  const handleCloseLoginModal = () => {
    loginRef.current?.close();
  };

  const handleLoginSuccess = () => {
    handleCloseLoginModal();
    navigation.navigate(DASHBOARD_SCREEN);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent />

      <View style={styles.logoWrap}>
        <Logo />
      </View>

      <View style={styles.action}>
        <Button variant="secondary" onPress={handleOpenLoginModal}>
          Login
        </Button>
      </View>

      <Modalize
        ref={loginRef}
        HeaderComponent={<ModalHeader />}
        withHandle={false}>
        <LoginForm
          onCancel={handleCloseLoginModal}
          onLogin={handleLoginSuccess}
        />
      </Modalize>
    </SafeAreaView>
  );
}
