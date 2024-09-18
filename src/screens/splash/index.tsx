import {
  StatusBar,
  Text,
  View,
  Animated,
  useWindowDimensions,
} from 'react-native';
import styles from './splash.style';
import {LaunchIcon} from 'assets';
import {useEffect, useRef} from 'react';

export default function Splash() {
  const {height, width} = useWindowDimensions();
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(0)).current;
  const xOuputVal = width / 2 - 150;
  const yOuputVal = height;
  //   const navigation = useNavigation();

  const sacleAnimation = Animated.timing(scaleAnim, {
    toValue: 1,
    duration: 2000,
    delay: 1000, //1 sec delay
    useNativeDriver: true,
  });

  const rotateAnimation = Animated.timing(rotateAnim, {
    toValue: 1,
    duration: 1000,
    delay: 2000, // 2sec delay
    useNativeDriver: true,
  });

  const translateAnimation = Animated.timing(translateAnim, {
    toValue: 1,
    duration: 500,
    delay: 800, // 800ms delay
    useNativeDriver: true,
  });

  // play the animations in sequence
  useEffect(() => {
    Animated.sequence([
      sacleAnimation,
      rotateAnimation,
      translateAnimation,
    ]).start();

    return () => {
      sacleAnimation.stop();
    };
  }, []);

  const translateY = translateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -yOuputVal],
    extrapolate: 'clamp',
  });
  const translateX = translateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, xOuputVal],
    extrapolate: 'clamp',
  });

  const scale = scaleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 4],
    extrapolate: 'clamp',
  });
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <Animated.View
        style={[
          {
            transform: [{translateY}, {translateX}, {scale}, {rotateZ: rotate}],
          },
        ]}>
        <LaunchIcon />
      </Animated.View>
    </View>
  );
}
