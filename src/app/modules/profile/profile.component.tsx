import { View, Text } from 'react-native';
import React from 'react';
import { styles as globalStyles } from '@styles';
import AppStatusBar from '@sharedComponents/app-status-bar/app-status-bar.component';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView
      style={(globalStyles.container, { justifyContent: 'flex-start' })}
    >
      {/* <AppStatusBar /> */}
      <Text>profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
