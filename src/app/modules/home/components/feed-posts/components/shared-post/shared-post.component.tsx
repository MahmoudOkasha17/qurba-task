import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import PostTop from '../post-top/post-top.component';
import { Card, Divider } from 'react-native-paper';
import { styles } from './shared-post.styles';
import PostText from '../post-text/post-text.component';
import PostBottom from '../post-bottom/post-bottom.component';
import { AppText } from '@sharedComponents/app-text/app-text.component';
import { palette } from '@styles';

import PostComment from '../post-comment/post-comment.component';
import PostImage from '../post-image/post-image.component';
import postMatcher from '@utils/post-matcher';
import SharedMenuPost from '../shared-menu-post/shared-menu-post.component';

const SharedPost = ({ post, shared = false }) => {
  return (
    <Card style={styles.card}>
      <PostTop
        verified={post.verified}
        image={post.image}
        user={post.user}
        date={post.date}
      />
      <PostText text={post.text} />
      <View style={styles.sharedCard}>
        {/* <Image
          style={styles.image}
          source={require('@assets/feed-assets/restaurantimg.png')}
        ></Image> */}
        {/* <View style={styles.test}></View> */}
        <SharedMenuPost shared={true} post={post.post}></SharedMenuPost>
      </View>

      {!shared && (
        <PostBottom
          likes={post.likes}
          commentCount={post.commentCount}
          shares={post.shares}
        />
      )}

      {!shared &&
        post.comments &&
        post.comments.map((comment, index) => {
          return <PostComment key={index} comment={comment} />;
        })}
    </Card>
  );
};

export default SharedPost;
