import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './app-status-bar.styles';
import { AppText } from '@sharedComponents/app-text/app-text.component';
import { setStatusBarStyle } from 'expo-status-bar';
import { IconButton } from 'react-native-paper';
import { palette } from '@styles';

//import AppText from '@sharedComponents/app-text/app-text.component';

type Props = {
  //   title?: string;
  //   bg?: string;
  //   fg?: string;
  //   style?: 'light-content' | 'dark-content' | 'default';
};

const defaultProps: Props = {};

function AppStatusBar({}: Props) {
  return (
    <>
      {/* <View style={styles.background}> */}
      <StatusBar backgroundColor={palette.white} barStyle='dark-content' />
      <View style={styles.statusBarContainer}>
        <View style={styles.ImageContainer}>
          <Image
            style={{ width: 80, height: 20 }}
            resizeMode={'contain'}
            source={require('@assets/status-bar-icons/logo.png')}
          ></Image>
        </View>
        <View style={styles.IconContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            activeOpacity={0.5}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Image
              style={styles.icon}
              resizeMode={'contain'}
              source={require('@assets/status-bar-icons/searchicon.png')}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.5}>
            <ImageBackground
              style={styles.icon}
              source={require('@assets/status-bar-icons/notificationicon.png')}
            >
              <View
                style={{
                  // flex: 1,
                  //alignItems: 'center',
                  position: 'absolute',
                  top: 17,
                  left: 18,
                }}
              >
                <Image
                  style={styles.oval}
                  resizeMode={'contain'}
                  source={require('@assets/status-bar-icons/ovalicon.png')}
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.5}>
            <ImageBackground
              style={styles.icon}
              source={require('@assets/status-bar-icons/carticon.png')}
            >
              <View
                style={{
                  // flex: 1,
                  //alignItems: 'center',
                  position: 'absolute',
                  top: -2.5,
                  left: 20,
                }}
              >
                <Image
                  style={styles.oval}
                  resizeMode={'contain'}
                  source={require('@assets/status-bar-icons/ovalicon.png')}
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>

      {/* </View> */}
    </>
  );
}

AppStatusBar.defaultProps = defaultProps;

export default AppStatusBar;
