import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../constant';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.LIGHT_YELLOW,
  },
  HeadGroup: {
    top: 20,
    paddingHorizontal: 20,
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
    marginLeft: 10,
  },
  InputGroup: {
    paddingHorizontal: 30,
    top: 100,
    textAlign: 'center',
  },
  text: {
    fontFamily: Fonts.MA_MEDIUM,
    fontSize: 20,
    color: Colors.BLACK,
    marginBottom: 15,
  },
  textInput: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    borderColor: Colors.BLACK,
    borderWidth: 1,
    paddingHorizontal: 15,
    textAlignVertical: 'center',
    fontFamily: Fonts.MA_MEDIUM,
    fontSize: 20,
    color: Colors.BLACK,
  },
  InputGroup1: {
    paddingHorizontal: 30,
    top: 120,
    textAlign: 'center',
  },
  InputGroup2: {
    paddingHorizontal: 30,
    top: 140,
    textAlign: 'center',
  },
  InputGroup3: {
    paddingHorizontal: 30,
    top: 160,
    textAlign: 'center',
  },
  InputGroup4: {
    paddingHorizontal: 30,
    top: 180,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 260,
  },
});
