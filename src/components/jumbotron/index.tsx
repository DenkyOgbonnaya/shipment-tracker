import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
interface IProps {
  message: string;
}
const Jumbotron: FC<IProps> = ({message}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.alertText]}> {message} </Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'transparent',
    padding: 20,
    marginBottom: 20,
    borderRadius: 5,
    marginTop: 5,
    justifyContent: 'center',
    height: 80,
  },
  alertText: {
    fontSize: 12,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
export default Jumbotron;
