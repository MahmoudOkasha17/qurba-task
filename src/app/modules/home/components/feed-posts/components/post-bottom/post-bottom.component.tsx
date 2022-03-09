import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import { AppText } from '@sharedComponents/app-text/app-text.component';
import { styles } from './post-bottom.styles';
import numberFormatter from '@utils/number-formatter';

type Props = { likes: number; commentCount: number; shares: number };

const PostBottom = ({ likes, commentCount, shares }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconButton}
        activeOpacity={0.5}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      >
        <AppText style={styles.textStyle}>{numberFormatter(likes)} </AppText>
        <Image
          source={require('@assets/feed-assets/feed-icons/likeicon.png')}
          resizeMode={'contain'}
          style={styles.bottomIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        activeOpacity={0.5}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      >
        <AppText style={styles.textStyle}>
          {numberFormatter(commentCount)}{' '}
        </AppText>
        <Image
          source={require('@assets/feed-assets/feed-icons/commenticon.png')}
          resizeMode={'contain'}
          style={styles.bottomIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        activeOpacity={0.5}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      >
        <AppText style={styles.textStyle}>{numberFormatter(shares)} </AppText>
        <Image
          source={require('@assets/feed-assets/feed-icons/shareicon.png')}
          resizeMode={'contain'}
          style={styles.bottomIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PostBottom;
