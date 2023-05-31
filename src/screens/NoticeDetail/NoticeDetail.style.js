import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../constant';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.LIGHT_YELLOW,
  },
  wrapperHead: {
    top: 20,
    left: 20,
    width: '100%',
    height: 50,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  back: {
    width: 50,
    height: 50,
    backgroundColor: Colors.WHITE,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texthead: {
    color: Colors.BLACK,
    fontFamily: Fonts.MA_MEDIUM,
    fontSize: 32,
    marginLeft: 45,
  },
});
