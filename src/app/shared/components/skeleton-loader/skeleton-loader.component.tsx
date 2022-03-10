import { View, Text, Image, ViewStyle, StyleProp } from 'react-native';
import React, { Children } from 'react';
import { styles } from '@styles';

type Props = {
  style: StyleProp<ViewStyle> | StyleProp<ViewStyle>[] | { children: [] };
};

const SkeletonLoader = ({ layout }) => {
  let children = layout.children;

  //console.log(layout.children);

  return (
    <View
      style={[
        {
          overflow: 'hidden',
        },
        layout,
      ]}
    >
      {children ? (
        children.map((childLayout, index) => {
          // console.log('here');
          return <SkeletonLoader key={index} layout={childLayout} />;
        })
      ) : (
        <Image
          resizeMode='contain'
          source={
            layout.source
              ? layout.source
              : require('@assets/skeletonloader3.gif')
          }
        />
      )}
    </View>
  );
};
const SkeletonPiece = ({ style }) => {
  return (
    <View
      style={[
        {
          overflow: 'hidden',
        },
        style,
      ]}
    >
      <Image
        // resizeMode='cover'
        source={require('@assets/skeletonloader3.gif')}
      />
    </View>
  );
};

export default SkeletonLoader;
