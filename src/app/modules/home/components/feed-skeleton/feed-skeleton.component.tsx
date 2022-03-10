import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';

import { styles, postLayoutOne, postLayoutTwo } from './feed-skeleton.styles';
import { palette } from '@styles';
import SkeletonLoader from '@sharedComponents/skeleton-loader/skeleton-loader.component';
import { View } from 'react-native';
//import SkeletonContent from '@vitu.soares/react-native-skeleton-content';

const FeedSkeleton = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={styles.top}>
        <SkeletonLoader layout={postLayoutOne} />
      </View>
      <View style={styles.top}>
        <SkeletonLoader layout={postLayoutTwo} />
      </View>
      {/* <Card style={styles.card}>
        <SkeletonContent
          containerStyle={styles.top}
          highlightColor={palette.lightGrey}
          boneColor={palette.secondary}
          layout={postLayoutOne}
          isLoading={true}
        ></SkeletonContent>
      </Card>
      <Card style={[styles.card, { height: 400 }]}>
        <SkeletonContent
          containerStyle={styles.top}
          highlightColor={palette.lightGrey}
          boneColor={palette.secondary}
          layout={postLayoutTwo}
          isLoading={true}
        ></SkeletonContent>
      </Card> */}
    </ScrollView>
  );
};

export default FeedSkeleton;
