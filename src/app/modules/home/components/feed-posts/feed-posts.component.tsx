import { View, Text } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './feed-posts.styles';
import MenuPost from './components/menu-post/menu-post.component';
import posts from '../../posts';
import SharedMenuPost from './components/shared-menu-post/shared-menu-post.component';
import SharedPost from './components/shared-post/shared-post.component';
import postMatcher from '@utils/post-matcher';
const FeedPosts = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {posts &&
        posts.map((post, index) => {
          //console.log(post);
          return postMatcher(post, index);
        })}
    </ScrollView>
  );
};

export default FeedPosts;
