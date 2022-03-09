import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './post-image.styles';

type Props = {
  images: any[];
};
const defaultProps: Props = {
  images: [],
};
const PostImage = ({ images }: Props = defaultProps) => {
  //console.log(images[0]);r
  return (
    <View style={styles.container}>
      <Image
        style={images.length === 1 ? styles.imageLeftBig : styles.imageSmall}
        resizeMode='cover'
        source={images[0]}
      ></Image>
      {images.length > 1 && (
        <View style={styles.containerSide}>
          <Image
            style={
              images.length === 2 ? styles.imageSmallRight : styles.imageRight
            }
            resizeMode='cover'
            source={images[1]}
          ></Image>
          {images.length >= 3 && (
            <Image
              style={styles.imageRight}
              resizeMode='cover'
              source={images[2]}
            ></Image>
          )}
        </View>
      )}
    </View>
  );
};
PostImage.defaultProps = defaultProps;

export default PostImage;
