import {View, Text, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import MyTextInput from '../../components/MyTextInput';
import Button from '../../components/Button';
import {styles} from './Register.style';
import {Images, Colors} from '../../constant';
import Icon from 'react-native-vector-icons/Ionicons';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [isPassShown, setIsPassShown] = useState(false);
  const [isRePassShown, setIsRePassShown] = useState(false);
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
        <Text style={styles.texthead}>Đăng ký</Text>
        <View style={styles.form}>
          <MyTextInput placeholder="Họ và tên" />
          <MyTextInput
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            onChangeText={text => handleCheckEmail(text)}
          />
          <MyTextInput placeholder="Số điện thoại" />
          <View style={styles.wrapperInput}>
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
          <View style={styles.wrapperInput}>
            <MyTextInput
              placeholder="Nhập lại mật khẩu"
              value={repassword}
              secureTextEntry={isRePassShown ? false : true}
              onChangeText={text => setRePassword(text)}
            />
            <View style={styles.wrapperIcon}>
              <Button
                title={
                  <Icon
                    name={isRePassShown ? 'eye' : 'eye-off'}
                    size={28}
                    color={Colors.YELLOW}
                  />
                }
                onPress={() => setIsRePassShown(!isRePassShown)}
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
