import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator activeColor="fff" screenOptions={{headerShown: false}}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarLabelStyle: {
          color: '#fff',
          marginBottom: 5,
        },
        tabBarActiveBackgroundColor: '#1f65ff',
        tabBarInactiveBackgroundColor: '#1f65ff',
        tabBarIcon: ({color, size}) => (
          <Icon name="home" color={'#fff'} size={20} />
        ),
      }}
    />

    <Tab.Screen
      name="Login"
      component={LoginStackScreen}
      options={{
        tabBarLabel: 'Logout',
        tabBarLabelStyle: {
          color: '#fff',
          marginBottom: 5,
        },
        tabBarStyle: {display: 'none'},
        tabBarVisible: false,
        tabBarActiveBackgroundColor: '#009387',
        tabBarInactiveBackgroundColor: '#009387',
        tabBarIcon: ({color, size}) => (
          <Icon name="login" color={'#fff'} size={20} />
        ),
      }}
    />
    {/*  <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    /> */}
  </Tab.Navigator>
);

export default MainTabScreen;

const LoginStackScreen = ({navigation}) => (
  <LoginStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#009387'},
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <LoginStack.Screen name="Login" component={LoginScreen} />
  </LoginStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#A31D44'},
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#1f65ff'},
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);
