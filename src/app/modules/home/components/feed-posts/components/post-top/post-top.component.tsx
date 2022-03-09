import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './post-top.styles';
import { AppText } from '@sharedComponents/app-text/app-text.component';
import { palette } from '@styles';
import { Button, Divider, IconButton } from 'react-native-paper';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

type Props = {
  image: any;
  user: string;
  date: string;
  sharedName?: string;
  restaurant?: boolean;
  verified?: boolean;
};
const defaultProps: Props = {
  image: '',
  user: '',
  date: '',
  sharedName: '',
  restaurant: false,
  verified: false,
};

const PostTop = ({
  image,
  user,
  date,
  sharedName,
  restaurant,
  verified,
}: Props = defaultProps) => {
  //require('../../../../../../../assets/feed-assets/chickenchester.png')
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>

      <View style={styles.textContainer}>
        <View style={styles.userText}>
          <AppText style={{ flexWrap: 'wrap' }} fontWeight='bold'>
            {user}{' '}
            {restaurant && (
              <>
                <Image
                  style={styles.iconType}
                  resizeMode={'contain'}
                  source={require('@assets/feed-assets/feed-icons/restauranticon.png')}
                ></Image>
              </>
            )}
            {verified && (
              <>
                <Image
                  style={styles.iconType}
                  resizeMode={'contain'}
                  source={require('@assets/feed-assets/feed-icons/verifiedicon.png')}
                ></Image>
              </>
            )}
            {sharedName != '' && (
              <>
                <Image
                  style={styles.sharedIcon}
                  source={require('@assets/feed-assets/feed-icons/arrowicon.png')}
                ></Image>
                <AppText style={{ flexWrap: 'wrap' }} fontWeight='bold'>
                  {' '}
                  uwu
                </AppText>
              </>
            )}
          </AppText>
        </View>

        <AppText color={palette.lightText}>
          {verified && 'Verified Buyer . '}
          {date}{' '}
        </AppText>
      </View>
      {/* <IconButton
        style={styles.iconButton}
        size={30}
        //color={palette.black}
        icon={require('@assets/feed-assets/feed-icons/extraicon.png')}
      /> */}
      <TouchableOpacity
        style={styles.iconButton}
        activeOpacity={0.5}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      >
        <Image
          source={require('@assets/feed-assets/feed-icons/extraicon.png')}
          resizeMode={'contain'}
          style={styles.extraIcon}
        />
      </TouchableOpacity>
    </View>
  );
};
PostTop.defaultProps = defaultProps;

export default PostTop;
