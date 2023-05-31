import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Notification.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {Images, Colors} from '../../constant';
import Notice from '../../components/Notice';
const NotificationScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.wrapperHead}>
        <View style={styles.back}>
          <Icon name="ios-arrow-back" size={30} color={Colors.BLACK} />
        </View>
        <Text style={styles.texthead}>Notifications</Text>
      </View>
      <View style={styles.wrapperNotify}>
        <Text style={styles.textNotice}>Notice</Text>
        <Text style={styles.textNotice}>Notice</Text>
      </View>
    </View>
  );
};

export default NotificationScreen;
