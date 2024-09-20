import {
  StatusBar,
  View,
  Animated,
  useWindowDimensions,
  Easing,
} from 'react-native';
import styles from './splash.style';
import {LaunchIcon} from 'assets';
import {useEffect, useRef} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from 'navigations/types/authStack.types';
import {useNavigation} from '@react-navigation/native';
import {WELCOME_SCREEN} from 'navigations/constants/authStack.constants';

export default function Splash() {
  const {height, width} = useWindowDimensions();
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(0)).current;
  const circleLargestAnim = useRef(new Animated.Value(0)).current;

  const yOuputVal = height;
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList, 'Splash'>>();

  const sacleAnimation = Animated.timing(scaleAnim, {
    toValue: 3,
    duration: 1000,
    delay: 1000,
    useNativeDriver: true,
  });

  const rotateAnimation = Animated.timing(rotateAnim, {
    toValue: 1,
    duration: 1000,
    delay: 700,
    useNativeDriver: true,
  });

  const translateAnimation = Animated.timing(translateAnim, {
    toValue: 1,
    duration: 600,
    useNativeDriver: true,
  });

  const screenSplashAnimation = Animated.timing(circleLargestAnim, {
    toValue: width,
    duration: 1000,
    delay: 300,
    easing: Easing.linear,
    useNativeDriver: true,
  });

  // play the animations in sequence
  useEffect(() => {
    Animated.sequence([
      sacleAnimation,
      rotateAnimation,

      Animated.parallel([translateAnimation, screenSplashAnimation]),
    ]).start(({finished}) => {
      navigation.navigate(WELCOME_SCREEN);
    });
  }, []);

  const translateY = translateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -yOuputVal],
    extrapolate: 'clamp',
  });

  const scale = scaleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 4],
    extrapolate: 'clamp',
  });
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-20deg'],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.container]}>
      <StatusBar translucent backgroundColor="transparent" />

      <Animated.View
        style={[
          {
            transform: [{translateY}, {scale}, {rotateX: rotate}],
          },
        ]}>
        <LaunchIcon />
      </Animated.View>
      <View>
        <Animated.View
          style={[
            styles.circlelarge,
            {
              transform: [{scale: circleLargestAnim}],
              opacity: circleLargestAnim,
            },
          ]}
        />
      </View>
    </Animated.View>
  );
}
