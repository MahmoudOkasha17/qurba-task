import { palette } from '@styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    //height: 340,
    width: '100%',
    borderRadius: 0,
    backgroundColor: palette.white,
    marginVertical: 3,
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
    width: '100%',
    height: 200,
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
  sharedCard: {
    flex: 1,
    marginHorizontal: 13,
    borderWidth: 1,
    borderRadius: 10,
    zIndex: 2,
    borderColor: '#CACACA',
    overflow: 'hidden',
    //backgroundColor: 'green',
    //borderWidth: 1,
    // elevation: 7,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.29,
    // shadowRadius: 4.65,
    // borderRadius: 12,
  },
  test: {
    width: '100%',
    height: 100,
    // backgroundColor: palette.black,
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
