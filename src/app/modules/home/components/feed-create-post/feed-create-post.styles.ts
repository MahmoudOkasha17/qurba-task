import { palette } from '@styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    //marginTop: 3,
    marginBottom: 1.5,
    width: '100%',
    height: 64,
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

  textInput: {
    marginRight: 16,
    height: 40,
    flex: 1,
    elevation: 7,
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: palette.white,
  },
});

export { styles };
