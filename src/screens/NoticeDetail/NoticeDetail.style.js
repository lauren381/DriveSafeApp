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
  wrapperCamera: {
    width: 380,
    marginHorizontal: 25,
    height: 310,
    top: 150,
    position: 'absolute',
    backgroundColor: Colors.WHITE,
    borderColor: Colors.BLACK,
    borderWidth: 3,
    borderRadius: 15,
  },
  wrapperNotify: {
    backgroundColor: Colors.WHITE,
    position: 'absolute',
    top: 500,
    height: 100,
    width: 380,
    marginHorizontal: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.BLACK,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'column',
  },
  textNotice: {
    fontFamily: Fonts.MA_MEDIUM,
    fontSize: 22,
    color: Colors.BLACK,
  },
});
