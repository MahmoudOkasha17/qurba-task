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
import { styles } from './shared-menu-post.styles';
import PostText from '../post-text/post-text.component';
import PostBottom from '../post-bottom/post-bottom.component';
import { AppText } from '@sharedComponents/app-text/app-text.component';
import { palette } from '@styles';

import PostComment from '../post-comment/post-comment.component';
import PostImage from '../post-image/post-image.component';

const SharedMenuPost = ({ post, shared = false }) => {
  return (
    <Card style={styles.card}>
      <PostTop
        verified={post.verified}
        image={post.image}
        user={post.user}
        date={post.date}
      />
      <PostText text={post.text} />
      <PostImage images={post.images} />
      <View style={styles.container}>
        <Image style={styles.image} source={post.menuImg}></Image>
        <View style={styles.textContainer}>
          <View style={styles.userText}>
            <AppText
              ellipsizeMode='tail'
              numberOfLines={1}
              style={{ flexWrap: 'wrap' }}
              fontWeight='bold'
            >
              {post.menu}{' '}
            </AppText>
          </View>

          <AppText color={palette.lightText}>{post.menuType} </AppText>
        </View>
      </View>

      {!shared && <View style={styles.lineStyle} />}
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

export default SharedMenuPost;
