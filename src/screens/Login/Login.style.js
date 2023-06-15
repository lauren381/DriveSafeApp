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
  back: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: Colors.LIGHT_YELLOW,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texthead: {
    position: 'absolute',
    left: 40,
    top: 140,
    fontFamily: Fonts.MA_SEMIBOLD,
    fontSize: 30,
    color: Colors.YELLOW,
  },
  form: {
    position: 'absolute',
    height: 160,
    marginHorizontal: 30,
    top: 250,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  GroupInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperIcon: {
    position: 'absolute',
    right: 20,
  },
  wrapperBtn: {
    position: 'absolute',
    marginHorizontal: 30,
    top: 550,
    height: 120,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textFailed: {
    color: Colors.RED,
    alignSelf: 'flex-end',
  },
  newAcc: {
    position: 'absolute',
    top: 700,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textbtn: {
    fontFamily: Fonts.MA_SEMIBOLD,
    color: Colors.YELLOW,
    fontSize: 20,
    textAlign: 'center',
  },
});
