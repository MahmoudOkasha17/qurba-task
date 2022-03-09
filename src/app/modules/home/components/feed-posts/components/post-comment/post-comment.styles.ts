import { palette } from '@styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    marginHorizontal: 16,
    marginVertical: 8,

    width: 44,
    height: 44,
  },
  textContainer: {
    backgroundColor: palette.secondary,
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderRadius: 13,
    marginRight: 100,
    //flex: 1,
    //width: '100%',
  },
  userText: {
    //flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  //   sharedIcon: {
  //     width: 13,
  //     height: 13,
  //   },
  //   iconButton: {
  //     //margin: 30,
  //     marginRight: 18,
  //     marginBottom: 12,
  //   },
  //   extraIcon: {
  //     width: 32,
  //     height: 8,
  //   },
  lineStyle: {
    //alignSelf: 'center',
    marginHorizontal: 20,
    borderWidth: 0.5,
    borderColor: palette.secondary,
    margin: 5,
  },
  buttonContainer: {
    //backgroundColor: palette.lightGrey,
    height: 40,
    marginLeft: 76,
    //margin: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  commentImage: {
    width: 17,
    height: 17,
  },
});

export { styles };
