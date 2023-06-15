import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Welcome.style';
import {Images, Colors} from '../../constant';
import Button from '../../components/Button';
const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={Images.WelcomeBG}
        resizeMode="cover"
        style={styles.imagebg}>
        <Text style={styles.texthead}>Welcome</Text>
        <View style={styles.wrapperbtn}>
          <Button
            primary
            title={'Login'}
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            primary
            title={'Create Account'}
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
