import { palette } from '@styles';
import { StyleSheet } from 'react-native';
import { ICustomViewStyle } from 'react-native-skeleton-content/lib/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: palette.primary,
  },
  top: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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

const top: ICustomViewStyle = {
  flexDirection: 'row',
  flex: 1,
  children: [
    {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginTop: 10,
      marginLeft: 20,
      marginRight: 10,
    },
    {
      justifyContent: 'center',
      children: [
        {
          width: 120,
          height: 10,
          marginTop: 33,
          marginBottom: 10,
          borderRadius: 4,
        },
        {
          width: 60,
          height: 6,
          borderRadius: 4,
        },
      ],
    },
  ],
};
const mid: ICustomViewStyle = {
  width: '100%',
  height: 210,
  marginTop: 30,
};

const bot: ICustomViewStyle = {
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 25,
  children: [
    {
      width: 65,
      height: 10,
    },
    {
      width: 65,
      height: 10,
    },
    {
      width: 65,
      height: 10,
    },
  ],
};

const postLayoutOne: Array<ICustomViewStyle> = [
  {
    flex: 1,
    children: [top, mid, bot],
  },
];
const postLayoutTwo: Array<ICustomViewStyle> = [
  {
    flex: 1,
    children: [
      top,
      {
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginBottom: -10,
        children: [
          {
            width: '100%',
            height: 10,
            marginTop: 33,
            marginBottom: 10,
            borderRadius: 4,
          },
          {
            width: '70%',
            height: 10,
            borderRadius: 4,
          },
        ],
      },

      mid,
      bot,
    ],
  },
];

export { styles, postLayoutOne, postLayoutTwo };
