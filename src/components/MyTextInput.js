import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Colors, Fonts} from '../constant';

const MyTextInput = ({...otherProps}) => {
  //   const [focused, setFocused] = useState(false);
  return (
    <TextInput
      //   onFocus={() => setFocused(true)}
      //   onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.YELLOW}
      //   style={[styles.input, focused && styles.focused]}
      style={styles.input}
      {...otherProps}
    />
  );
};

export default MyTextInput;
const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 60,
    borderWidth: 2,
    borderColor: Colors.YELLOW,
    borderRadius: 30,
    textAlignVertical: 'center',
    paddingHorizontal: 30,
    fontFamily: Fonts.MA_SEMIBOLD,
    fontSize: 20,
    color: Colors.WHITE,
  },
  //   focused: {
  //     borderWidth: 1,
  //     borderColor: Colors.GREEN,
  //     shadowOffset: {width: 4, height: 10},
  //     shadowOpacity: 0.2,
  //     shadowRadius: 2,
  //   },
});
