import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Profile.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../constant';

const ProfileScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.wrapperHead}>
        <Text style={styles.texthead}>Tài khoản</Text>
      </View>
      <View style={styles.wrapperImage}>
        <Text>Image</Text>
      </View>
      <View style={styles.wrapperName}>
        <Text style={styles.name}>Nguyễn Thị Bích Phượng</Text>
      </View>
      <View style={[styles.wrapperEdit, styles.wrapperFuntion]}>
        <Icon name={'person-circle'} size={25} color={Colors.BLACK} />
        <Text style={styles.text}>Chỉnh sửa thông tin</Text>
        <View style={styles.wrapperIcon}>
          <Icon
            name={'chevron-forward-outline'}
            size={30}
            color={Colors.BLACK}
          />
        </View>
      </View>
      <View style={[styles.wrapperSetting, styles.wrapperFuntion]}>
        <Icon name={'settings'} size={25} color={Colors.BLACK} />
        <Text style={styles.text}>Cài đặt</Text>
        <View style={styles.wrapperIcon}>
          <Icon
            name={'chevron-forward-outline'}
            size={30}
            color={Colors.BLACK}
          />
        </View>
      </View>
      <View style={[styles.wrapperLogOut, styles.wrapperFuntion]}>
        <Icon name={'log-out'} size={25} color={Colors.BLACK} />
        <Text style={styles.text}>Đăng xuất</Text>
        <View style={styles.wrapperIcon}>
          <Icon
            name={'chevron-forward-outline'}
            size={30}
            color={Colors.BLACK}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
