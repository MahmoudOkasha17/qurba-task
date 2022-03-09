import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './feed-create-post.styles';
import { TextInput } from 'react-native-paper';
import { palette } from '@styles';

const FeedCreatePost = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('@assets/feed-assets/user.png')}
      ></Image>

      <TextInput
        style={styles.textInput}
        placeholderTextColor={palette.lightText}
        underlineColor='transparent'
        theme={{
          colors: {
            primary: 'rgba(228, 228, 228, 0)', // Outline color here
          },
        }}
        placeholder='Share your food experiences'
        //onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

export default FeedCreatePost;
