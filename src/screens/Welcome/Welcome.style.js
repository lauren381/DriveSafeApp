import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../constant';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: 'relative',
  },
  imagebg: {
    flex: 1,
    justifyContent: 'center',
  },
  texthead: {
    position: 'absolute',
    left: 135,
    top: 160,
    fontFamily: Fonts.MA_SEMIBOLD,
    fontSize: 30,
    color: Colors.YELLOW,
  },
  wrapperbtn: {
    position: 'absolute',
    height: 150,
    top: 400,
    left: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
