import {StatusBar, View, Animated, useWindowDimensions} from 'react-native';
import styles from './splash.style';
import {LaunchIcon} from 'assets';
import {useEffect, useRef, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from 'navigations/types/authStack.types';
import {useNavigation} from '@react-navigation/native';
import {WELCOME_SCREEN} from 'navigations/constants/authStack.constants';
import {theme} from 'styles/theme';

export default function Splash() {
  const {height, width} = useWindowDimensions();
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(0)).current;
  const [splashFinished, setSplashFinished] = useState(false);

  const xOuputVal = width / 2 - 150;
  const yOuputVal = height;
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList, 'Splash'>>();

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
    ]).start(({finished}) => {
      setSplashFinished(true);

      // delay spalsh for some secs before
      // routing to welcome screen
      setTimeout(() => {
        navigation.navigate(WELCOME_SCREEN);
      }, 3000);
    });

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
    <View
      style={[
        styles.container,
        {
          backgroundColor: splashFinished
            ? theme.colors.primary
            : theme.colors.background,
        },
      ]}>
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
