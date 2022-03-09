import { SafeAreaView, ScrollView, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import SkeletonContent from 'react-native-skeleton-content';

import { styles as globalStyles } from '@styles';
import { Card } from 'react-native-paper';
import AppStatusBar from '@sharedComponents/app-status-bar/app-status-bar.component';
import FeedSkeleton from './components/feed-skeleton/feed-skeleton.component';
import FeedCreatePost from './components/feed-create-post/feed-create-post.component';
import { styles } from './home.styles';
import FeedPosts from './components/feed-posts/feed-posts.component';

const LOADING_PERIOD = 500;

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading === true) {
      const timeOut = setTimeout(() => setLoading(false), LOADING_PERIOD);
      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [loading]);

  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>
      <FeedCreatePost />
      {loading ? <FeedSkeleton /> : <FeedPosts />}
      {/* <FeedPosts /> */}
    </SafeAreaView>
  );
};

export default Home;
