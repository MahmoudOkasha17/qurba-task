import { palette } from '@styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: -3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: palette.white,
  },
  iconButton: {
    flexDirection: 'row',
    //margin: 30,
    //marginRight: 18,
    marginTop: 8,
    marginBottom: 16,
  },
  bottomIcon: {
    width: 25,
    height: 25,
  },
  textStyle: {
    paddingTop: 3,
  },
});

export { styles };
