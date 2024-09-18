import {StatusBar, Text, View} from 'react-native';
import styles from './splash.style';

export default function Splash() {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Text>Splash screen</Text>
    </View>
  );
}
