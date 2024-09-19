import {SafeAreaView, StatusBar, View} from 'react-native';
import {Modalize} from 'react-native-modalize';

import styles from './welcome.style';
import Button from 'components/button';
import {Logo} from 'assets';
import {useRef} from 'react';
import ModalHeader from 'components/modalHeader';
import LoginForm from './components/loginForm';

export default function Welcome() {
  const loginRef = useRef<Modalize | null>(null);

  const handleOpenLoginModal = () => {
    loginRef.current?.open();
  };

  const handleCloseLoginModal = () => {
    loginRef.current?.close();
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
        <LoginForm onCancel={handleCloseLoginModal} />
      </Modalize>
    </SafeAreaView>
  );
}
