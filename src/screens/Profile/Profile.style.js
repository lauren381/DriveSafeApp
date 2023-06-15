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
    width: '100%',
    height: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texthead: {
    color: Colors.BLACK,
    fontFamily: Fonts.MA_MEDIUM,
    fontSize: 32,
  },
  wrapperImage: {
    position: 'absolute',
    top: 100,
    width: 200,
    height: 200,
    left: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: Colors.BLACK,
    borderWidth: 1,
    backgroundColor: Colors.WHITE,
  },
  wrapperName: {
    top: 320,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: Fonts.MA_SEMIBOLD,
    fontSize: 22,
    color: Colors.BLACK,
  },
  wrapperEdit: {
    top: 370,
  },
  wrapperFuntion: {
    width: 370,
    height: 60,
    marginHorizontal: 30,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.BLACK,
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: Fonts.MA_SEMIBOLD,
    fontSize: 20,
    color: Colors.BLACK,
    marginLeft: 15,
  },
  wrapperIcon: {
    position: 'absolute',
    left: 330,
  },
  wrapperSetting: {
    top: 390,
  },
  wrapperLogOut: {
    top: 410,
  },
});
