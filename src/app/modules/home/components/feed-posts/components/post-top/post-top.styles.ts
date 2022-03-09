import Restaurants from '@modules/restaurants/restaurants.component';
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
    margin: 16,
    width: 44,
    height: 44,
  },
  textContainer: {
    // backgroundColor: 'green',
    flex: 1,
    //width: '100%',
  },
  userText: {
    //flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sharedIcon: {
    width: 13,
    height: 13,
  },
  iconButton: {
    //margin: 30,
    marginRight: 18,
    marginBottom: 12,
  },
  extraIcon: {
    width: 32,
    height: 8,
  },
  iconType: {
    width: 17,
    height: 17,
  },
});

export { styles };
