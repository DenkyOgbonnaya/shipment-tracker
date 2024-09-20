import {BellIcon, DefualtUser, LogoBlue} from 'assets';
import {Image, View} from 'react-native';
import styles from './headerBar.style';

export default function HeaderBar() {
  return (
    <View style={styles.container}>
      <Image source={DefualtUser} style={styles.img} resizeMode="contain" />
      <LogoBlue />
      <View style={styles.bell}>
        <BellIcon />
      </View>
    </View>
  );
}
