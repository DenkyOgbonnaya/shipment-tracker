import {ModalCloseIcon} from 'assets';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function ModalHeader() {
  return (
    <View style={styles.container}>
      <ModalCloseIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 15,
  },
});
