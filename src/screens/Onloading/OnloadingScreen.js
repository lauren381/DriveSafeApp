import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './Onloading.styles';
import {Images} from '../../constant';
import {useEffect} from 'react';
function OnloadingScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 5000);
  }, []);
  return (
    <View style={styles.main}>
      <Image
        source={Images.Onloading}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
}
export default OnloadingScreen;
