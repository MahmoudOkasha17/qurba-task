import { SafeAreaView, ScrollView, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
//import SkeletonContent from 'react-native-skeleton-content';

import { styles as globalStyles } from '@styles';
import { Card } from 'react-native-paper';
import AppStatusBar from '@sharedComponents/app-status-bar/app-status-bar.component';
import FeedSkeleton from './components/feed-skeleton/feed-skeleton.component';
import FeedCreatePost from './components/feed-create-post/feed-create-post.component';
import { styles } from './home.styles';
import FeedPosts from './components/feed-posts/feed-posts.component';

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      const timeOut = setTimeout(() => setLoading(false), 2000);
      return () => {
        clearTimeout(timeOut);
      };
    }
  }, []);

  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>
      <FeedCreatePost />
      {loading ? <FeedSkeleton /> : <FeedPosts />}
      {/* <FeedSkeleton /> */}
      {/* <FeedPosts /> */}
    </SafeAreaView>
  );
};

export default Home;
