import { View, Text } from 'react-native';
import React from 'react';
import { AppText } from '@sharedComponents/app-text/app-text.component';
import { styles } from './post-text.styles';

type Props = { text: string };
const PostText = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <AppText>{text}</AppText>
    </View>
  );
};

export default PostText;
