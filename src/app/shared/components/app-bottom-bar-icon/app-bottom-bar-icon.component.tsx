import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import { IconButton } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { palette } from '@styles';

type Props = {
  focused: boolean;
  size?: number;
  offset?: number;
  source?: any;
};
const defaultProps: Props = {
  focused: true,
  size: 20,
  offset: 0,
  source: require('@assets/bottom-bar-icons/bg.png'),
};
const BottomBarIcon = ({ focused, size, offset, source }: Props) => {
  return (
    <>
      {focused ? (
        <ImageBackground
          style={{
            width: 49,
            height: 49,
          }}
          source={require('@assets/bottom-bar-icons/bg.png')}
        >
          <View
            style={{
              // flex: 1,
              //alignItems: 'center',
              position: 'absolute',
              top: -2.5,
            }}
          >
            <IconButton size={size} color={palette.white} icon={source} />
            {/* //  <Text>test</Text> */}
          </View>
        </ImageBackground>
      ) : (
        <Image
          style={{ width: size - offset, height: size - offset }}
          resizeMode={'contain'}
          source={source}
        ></Image>
      )}
    </>
  );
};
BottomBarIcon.defaultProps = defaultProps;

export default BottomBarIcon;
