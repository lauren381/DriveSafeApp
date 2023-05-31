import {View, Text, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {Images, Colors} from '../../constant';
import {styles} from './Login.style';
import Icon from 'react-native-vector-icons/Ionicons';
import MyTextInput from '../../components/MyTextInput';
import Button from '../../components/Button';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  return (
    <View style={styles.main}>
      <ImageBackground
        source={Images.WelcomeBG}
        resizeMode="cover"
        style={styles.imagebg}>
        <View style={styles.back}>
          <Icon name="ios-arrow-back" size={30} color={Colors.BLACK} />
        </View>
        <Text style={styles.texthead}>Đăng nhập</Text>
        <View style={styles.form}>
          <MyTextInput
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            onChangeText={text => handleCheckEmail(text)}
          />
          {checkValidEmail ? (
            <Text style={styles.textFailed}>Wrong format email</Text>
          ) : (
            <Text style={styles.textFailed}> </Text>
          )}
          <View style={styles.wrapperInput}>
            <MyTextInput
              placeholder="Mật khẩu"
              value={password}
              secureTextEntry={seePassword}
              onChangeText={text => setPassword(text)}
            />
            <View style={styles.wrapperIcon}>
              <Button
                title={
                  <Icon
                    name={seePassword ? 'eye' : 'eye-off'}
                    size={28}
                    color={Colors.YELLOW}
                  />
                }
                onPress={() => setSeePassword(!seePassword)}
              />
            </View>
          </View>
        </View>
        <View style={styles.wrapperBtn}>
          <Button primary title={'Đăng nhập'} />
          <Button text title={'Quên mật khẩu'} />
        </View>
        <View style={styles.newAcc}>
          <Button text title={'Bạn chưa có tài khoản?'} />
        </View>
      </ImageBackground>
    </View>
  );
}
