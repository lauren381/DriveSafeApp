import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../constant';
const Notice = () => {
  return (
    <View style={styles.wrapperNotify}>
      <Text>Notice</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperNotify: {
    backgroundColor: Colors.WHITE,
    marginTop: 30,
    height: 100,
    width: 380,
    marginHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.BLACK,
  },
});
export default Notice;
