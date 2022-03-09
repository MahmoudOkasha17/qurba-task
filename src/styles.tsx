import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 900,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : '0',
  },
  statusBar: {
    backgroundColor: '#2f37',
  },
});
const palette = {
  primary: '#E0E0E0',
  secondary: '#E7EDF1',
  lightGrey: '#D3DCE2',
  text: '#363636',
  lightText: '#909090',
  lightBlue: '#5865F2',
  white: '#FFFFFF',
  black: '#000000',
  offWhite: '#F6F6F6',
};
export { styles, palette };
