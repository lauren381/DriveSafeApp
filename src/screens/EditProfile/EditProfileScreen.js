import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './EditProfile.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../constant';
import Button from '../../components/Button';

const EditProfileScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.HeadGroup}>
        <View style={styles.back}>
          <Icon name="ios-arrow-back" size={30} color={Colors.BLACK} />
        </View>
        <Text style={styles.texthead}>Chỉnh sửa thông tin</Text>
      </View>
      <View style={styles.InputGroup}>
        <Text style={styles.text}>Họ và tên</Text>
        <TextInput
          placeholder="Nguyễn Thị Bích Phượng"
          style={styles.textInput}
        />
      </View>
      <View style={styles.InputGroup1}>
        <Text style={styles.text}>Ngày sinh</Text>
        <TextInput placeholder="13/06/2001" style={styles.textInput} />
      </View>
      <View style={styles.InputGroup2}>
        <Text style={styles.text}>Số điện thoại</Text>
        <TextInput placeholder="0965417913" style={styles.textInput} />
      </View>
      <View style={styles.InputGroup3}>
        <Text style={styles.text}>Địa chỉ</Text>
        <TextInput placeholder="Đà Nẵng" style={styles.textInput} />
      </View>
      <View style={styles.InputGroup4}>
        <Text style={styles.text}>Email</Text>
        <TextInput placeholder="phuong@gmail.com" style={styles.textInput} />
      </View>
      <View style={styles.button}>
        <Button primary title={'Lưu'} backgroundColor={Colors.BLACK} />
      </View>
    </View>
  );
};

export default EditProfileScreen;
