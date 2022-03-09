import { palette } from '@styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // paddingHorizontal: 16,
    // paddingBottom: 8,
    // justifyContent: 'center',
    // //alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: palette.lightGrey,
    height: 200,
  },
  containerSide: {
    width: '50%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    //backgroundColor: palette.lightGrey,

    height: 200,
  },
  imageLeftBig: {
    width: '100%',
    height: 200,
  },
  imageSmall: { width: '48.5%', height: 200 },
  imageRight: {
    width: '100%',
    height: '48.5%',
  },
  imageSmallRight: { width: '99%', height: 200 },
});

export { styles };
