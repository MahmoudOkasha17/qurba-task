import { palette } from '@styles';
import { Platform, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: palette.primary,
  },
  statusBarContainer: {
    height: 60,
    width: '100%',
    backgroundColor: palette.white,
    flexDirection: 'row',
    justifyContent: 'center',
    //borderWidth: 1,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    elevation: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.2,
    // elevation: 1,
    // shadowColor:
    //   '1px 1px 3px rgba(0, 0, 0, 0.14), -1px 0px 0px rgba(0, 0, 0, 0.12)',
    paddingHorizontal: 16,
  },
  ImageContainer: {
    flex: 1,
    justifyContent: 'center',

    height: '100%',
  },
  IconContainer: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: 'green',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: { width: 25, height: 25, marginLeft: 30 },
  iconButton: {
    //backgroundColor: 'green',
    //flexWrap: 'nowrap',
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  oval: {
    width: 11,
    height: 11,
  },
});

export default styles;
