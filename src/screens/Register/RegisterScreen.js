import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import MyTextInput from '../../components/MyTextInput';
import Button from '../../components/Button';
import {styles} from './Register.style';
import {Images, Colors} from '../../constant';
import Icon from 'react-native-vector-icons/Ionicons';

const RegisterScreen = () => {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={Images.WelcomeBG}
        resizeMode="cover"
        style={styles.imagebg}>
        <View style={styles.back}>
          <Icon name="ios-arrow-back" size={30} color={Colors.BLACK} />
        </View>
        <Text style={styles.texthead}>Đăng ký</Text>
        <View style={styles.form}>
          <MyTextInput placeholder="Họ và tên" />
          <MyTextInput placeholder="Email" />
          <MyTextInput placeholder="Số điện thoại" />
          <View style={styles.wrapperInput}>
            <MyTextInput placeholder="Mật khẩu" />
            <View style={styles.wrapperIcon}>
              <Button
                title={
                  <Icon name="eye-off-sharp" size={28} color={Colors.YELLOW} />
                }
              />
            </View>
          </View>
          <View style={styles.wrapperInput}>
            <MyTextInput placeholder="Nhập lại mật khẩu" />
            <View style={styles.wrapperIcon}>
              <Button
                title={
                  <Icon name="eye-off-sharp" size={28} color={Colors.YELLOW} />
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.wrapperBtn}>
          <Button primary title={'Đăng ký'} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegisterScreen;
