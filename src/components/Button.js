import React from 'react';
import {Colors, Fonts} from '../constant';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({
  title,
  primary = false,
  text = false,
  icon = false,
  textAlign,
  textColor,
  textSize,
  backgroundColor,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        primary && styles.primary,
        text && styles.text,
        icon && styles.icon,
        backgroundColor && {backgroundColor: backgroundColor},
      ]}
      {...otherProps}>
      <Text
        style={[
          styles.textStyle,
          primary && styles.titlePrimary,
          text && styles.titleText,
          textColor && {color: textColor},
          textSize && {textSize: textSize},
          textAlign && {textAlign: textAlign},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  button: {},
  textStyle: {
    fontFamily: Fonts.MA_SEMIBOLD,
    fontSize: 20,
    textAlign: 'center',
  },
  disable: {
    backgroundColor: Colors.BLACK,
  },
  primary: {
    width: 367,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlePrimary: {
    fontFamily: Fonts.MA_SEMIBOLD,
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: 20,
  },

  text: {
    textAlign: 'center',
  },
  titleText: {
    fontFamily: Fonts.MA_SEMIBOLD,
    color: Colors.YELLOW,
    fontSize: 20,
    textAlign: 'center',
  },

  icon: {
    padding: 8,
    marginHorizontal: 10,
    backgroundColor: Colors.LIGHT_GREEN,
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: Colors.GREEN,
    borderWidth: 1,
  },
});
