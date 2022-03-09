import { View, Text, Image } from 'react-native';
import React from 'react';
import { AppText } from '@sharedComponents/app-text/app-text.component';
import { styles } from './post-comment.styles';
import { palette } from '@styles';

import numberFormatter from '@utils/number-formatter';
import { Button } from 'react-native-paper';

type Props = {
  comment: {
    user: string;
    image: any;
    text: string;
    date: string;
    likes: number;
  };
};

const PostComment = ({ comment }) => {
  return (
    <>
      <View style={styles.lineStyle} />
      <View style={styles.container}>
        <Image style={styles.image} source={comment.image}></Image>

        <View style={styles.textContainer}>
          <View style={styles.userText}>
            <AppText style={{ flexWrap: 'wrap' }} fontWeight='bold'>
              {comment.user}{' '}
            </AppText>
          </View>

          <AppText color={palette.lightText}>{comment.text} </AppText>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AppText color={palette.lightText}>
          {comment.date}
          {'  '}
          <AppText fontSize={16} onPress={() => {}}>
            Like
          </AppText>
          {'  '}
          <AppText fontSize={16} onPress={() => {}}>
            Reply
          </AppText>
          {'  '}
          <AppText>{numberFormatter(comment.likes)}</AppText>
          {'  '}
          <Image
            style={styles.commentImage}
            resizeMode={'contain'}
            source={require('@assets/feed-assets/feed-icons/commentlikeicon.png')}
          ></Image>
        </AppText>
      </View>
    </>
  );
};

export default PostComment;
