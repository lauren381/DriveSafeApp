import React from 'react';
import {View, TextInput, Text, StyleSheet, Image} from 'react-native';
import {styles} from './Onloading.styles';
import {Images} from '../../constant';
function OnloadingScreen() {
  return (
    <View style={styles.main}>
      <Image
        source={Images.Onloading}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
}
export default OnloadingScreen;
