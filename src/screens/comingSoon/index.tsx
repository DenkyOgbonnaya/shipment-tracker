import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function CommingSoon() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Comming Soon!!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
