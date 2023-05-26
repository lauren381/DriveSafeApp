import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
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
          />
          <View style={styles.wrapperInput}>
            <MyTextInput
              placeholder="Mật khẩu"
              value={password}
              secureTextEntry={seePassword}
              onChangeText={e => setPassword(e)}
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
        <View>
          <Text style={styles.text}>Bạn chưa có tài khoản?</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
