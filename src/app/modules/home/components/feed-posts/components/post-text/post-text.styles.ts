import { palette } from '@styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingBottom: 8,
    justifyContent: 'center',
    //alignItems: 'flex-start',
    backgroundColor: palette.white,
  },
  text: {
    flexWrap: 'wrap',
  },
});

export { styles };
