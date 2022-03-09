import { palette } from '@styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    //height: 340,
    width: '100%',
    borderRadius: 0,
    backgroundColor: palette.white,
    marginVertical: 1.5,
  },
  container: {
    //marginTop: 3,
    //marginBottom: 1.5,
    width: '100%',
    // height: 64,
    flexDirection: 'row',
    ///justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.white,
  },
  image: {
    margin: 16,
    width: 44,
    height: 44,
  },
  imageBg: {
    margin: 16,
    width: 22,
    height: 22,
    position: 'absolute',
    top: 12,
    left: 11,
    zIndex: 1,
  },
  textContainer: {
    //backgroundColor: 'green',
    flex: 1,
    //width: '100%',
  },
  userText: {
    //flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuBg: {
    //marginHorizontal: 20,
    width: '100%',
    height: 42,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // zIndex: 1,
  },
  menuContainer: {
    width: '100%',
    marginHorizontal: 20,
    paddingRight: 40,
    borderRadius: 100,
    marginBottom: 5,
    //height: 50,
  },
  menuTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineStyle: {
    //alignSelf: 'center',
    marginHorizontal: 20,
    borderWidth: 0.5,
    borderColor: palette.secondary,
    margin: 5,
  },
});

export { styles };
