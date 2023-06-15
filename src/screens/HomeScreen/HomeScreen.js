import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../constant';
import {styles} from './HomeScreen.style';
import Button from '../../components/Button';

const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.wrapperHead}>
        <Text style={styles.texthead}>YOUR CAMERA</Text>
      </View>
      <View style={styles.wrapperCamera}>
        <View style={styles.camera}>
          <Text style={styles.textNotice}>Camera</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
