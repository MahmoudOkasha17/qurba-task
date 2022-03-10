import { palette } from '@styles';
import { StyleSheet } from 'react-native';
//import { ICustomViewStyle } from 'react-native-skeleton-content/lib/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: palette.primary,
    //backgroundColor: palette.white,
    //backgroundColor: palette.black,
  },
  top: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: palette.white,
    marginVertical: 1.5,
    //padding: 20,
  },
  card: {
    height: 340,
    width: '100%',
    borderRadius: 0,
    backgroundColor: palette.white,
    marginVertical: 1.5,
  },
});

const top = {
  flexDirection: 'row',
  flex: 1,
  children: [
    {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginTop: 16,
      marginLeft: 16,
      marginRight: 16,
    },
    {
      justifyContent: 'center',
      children: [
        {
          width: 120,
          height: 12,
          marginTop: 20,
          marginBottom: 10,
          borderRadius: 4,
        },
        {
          width: 60,
          height: 8,
          borderRadius: 4,
        },
      ],
    },
  ],
};
const mid = {
  width: '100%',
  height: 210,
  marginTop: 16,
  source: require('@assets/skeletonloader2.gif'),
};

const bot = {
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 25,
  marginVertical: 16,
  children: [
    {
      width: 65,
      height: 12,
      borderRadius: 4,
    },
    {
      width: 65,
      height: 12,
      borderRadius: 4,
    },
    {
      width: 65,
      height: 12,
      borderRadius: 4,
    },
  ],
};

const postLayoutOne = {
  flex: 1,
  children: [top, mid, bot],
};
const postLayoutTwo = {
  flex: 1,
  children: [
    top,
    {
      justifyContent: 'center',
      paddingHorizontal: 16,
      marginBottom: 10,
      marginTop: -10,
      children: [
        {
          width: '100%',
          height: 10,
          marginTop: 33,
          marginBottom: 10,
          borderRadius: 4,
          source: require('@assets/skeletonloader2.gif'),
        },
        {
          width: '70%',
          height: 10,
          borderRadius: 4,
          source: require('@assets/skeletonloader2.gif'),
        },
      ],
    },

    mid,
    bot,
  ],
};
export { styles, postLayoutOne, postLayoutTwo };
