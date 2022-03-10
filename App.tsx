//import { StatusBar } from 'expo-status-bar';

import { View, Text, Image, SafeAreaView, ImageBackground } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { styles } from '@styles';
import { AppText } from '@sharedComponents/app-text/app-text.component';
import Home from '@modules/home/home.component';
import Followers from '@modules/followers/followers.component';
import Restaurants from '@modules/restaurants/restaurants.component';
import Offers from '@modules/offers/offers.component';
import Profile from '@modules/profile/profile.component';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomBarIcon from '@sharedComponents/app-bottom-bar-icon/app-bottom-bar-icon.component';
import AppStatusBar from '@sharedComponents/app-status-bar/app-status-bar.component';
import { StatusBar } from 'react-native';
import { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsReady(true), 2000);
    // console.log('test2');
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }
  //console.log('test');
  return (
    <PaperProvider>
      <AppStatusBar />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Home'
          screenOptions={{
            tabBarStyle: {
              // marginTop: 10,
              height: 60,
            },
            tabBarShowLabel: false,
            headerShown: false,
            //tabBarActiveTintColor: '#C63AD6',
          }}
        >
          <Tab.Screen
            name='Home'
            component={Home}
            options={{
              //tabBarLabel: 'Home',
              tabBarIcon: ({ color, size, focused }) => {
                // <Text>test</Text>
                //console.log(size);
                return (
                  <BottomBarIcon
                    focused={focused}
                    size={size}
                    offset={-1}
                    source={require('@assets/bottom-bar-icons/homeicon.png')}
                  ></BottomBarIcon>
                );
              },
            }}
          />
          <Tab.Screen
            name='Restaurants'
            component={Restaurants}
            options={{
              tabBarLabel: 'Restaurants',
              tabBarIcon: ({ color, size, focused }) => {
                // <Text>test</Text>
                // console.log(color);
                return (
                  <BottomBarIcon
                    focused={focused}
                    size={size}
                    offset={4}
                    source={require('@assets/bottom-bar-icons/restaurantsicon.png')}
                  ></BottomBarIcon>
                );
              },
            }}
          />
          <Tab.Screen
            name='Offers'
            component={Offers}
            options={{
              tabBarLabel: 'Offers',
              tabBarIcon: ({ color, size, focused }) => {
                // <Text>test</Text>
                // console.log(color);
                return (
                  <BottomBarIcon
                    focused={focused}
                    size={size}
                    source={require('@assets/bottom-bar-icons/offersicon.png')}
                  ></BottomBarIcon>
                );
              },
            }}
          />
          <Tab.Screen
            name='Followers'
            component={Followers}
            options={{
              tabBarLabel: 'Followers',
              tabBarIcon: ({ color, size, focused }) => {
                // <Text>test</Text>
                // console.log(color);
                return (
                  <BottomBarIcon
                    focused={focused}
                    size={size}
                    offset={-5}
                    source={require('@assets/bottom-bar-icons/followersicon.png')}
                  ></BottomBarIcon>
                );
              },
            }}
          />
          <Tab.Screen
            name='Profile'
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size, focused }) => {
                return (
                  <BottomBarIcon
                    focused={focused}
                    size={size}
                    offset={4}
                    source={require('@assets/bottom-bar-icons/profileicon.png')}
                  ></BottomBarIcon>
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
