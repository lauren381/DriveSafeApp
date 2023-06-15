import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './NoticeDetail.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {Images, Colors} from '../../constant';

const NoticeDetailScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.wrapperHead}>
        <View style={styles.back}>
          <Icon name="ios-arrow-back" size={30} color={Colors.BLACK} />
        </View>
        <Text style={styles.texthead}>Chi tiết thông báo</Text>
      </View>
      <View style={styles.wrapperCamera}>
        <Text style={styles.textNotice}>Camera</Text>
      </View>
      <View style={styles.wrapperNotify}>
        <Text style={styles.textNotice}>Notice</Text>
        <Text style={styles.textNotice}>Notice</Text>
      </View>
    </View>
  );
};

export default NoticeDetailScreen;
