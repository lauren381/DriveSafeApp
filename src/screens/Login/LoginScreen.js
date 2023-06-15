import {View, Text, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {Images, Colors} from '../../constant';
import {styles} from './Login.style';
import Icon from 'react-native-vector-icons/Ionicons';
import MyTextInput from '../../components/MyTextInput';
import Button from '../../components/Button';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPassShown, setIsPassShown] = useState(false);
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
          <Icon
            name="ios-arrow-back"
            size={30}
            color={Colors.BLACK}
            onPress={() => navigation.goBack()}
          />
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
          <View style={styles.GroupInput}>
            <MyTextInput
              placeholder="Mật khẩu"
              value={password}
              secureTextEntry={isPassShown ? false : true}
              onChangeText={text => setPassword(text)}
            />
            <View style={styles.wrapperIcon}>
              <Button
                title={
                  <Icon
                    name={isPassShown ? 'eye' : 'eye-off'}
                    size={28}
                    color={Colors.YELLOW}
                  />
                }
                onPress={() => setIsPassShown(!isPassShown)}
              />
            </View>
          </View>
        </View>
        <View style={styles.wrapperBtn}>
          <Button primary title={'Đăng nhập'} />
          <Button text title={'Quên mật khẩu'} />
        </View>
        <View style={styles.newAcc}>
          <Text style={styles.textbtn}>Bạn chưa có tài khoản?</Text>
          <Button
            text
            title={'Đăng ký'}
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
