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
  wrapperCamera: {
    paddingHorizontal: 40,
    top: 150,
  },
  camera: {
    width: '100%',
    height: 450,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.BLACK,
    borderWidth: 3,
    borderRadius: 15,
  },
});
