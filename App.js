import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainTabScreen from './components/MainTabScreen';
import QuoteScreen from './components/QuoteScreen';
import QuoteEditScreen from './components/QuoteEditScreen';
import ClientAddScreen from './components/ClientAddScreen';
import QuoteAddScreen from './components/QuoteAddScreen';
import HomeScreen from './components/HomeScreen';
import QuoteSelect from './components/QuoteSelect';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#1f65ff'},
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Quote"
          component={QuoteScreen}
          options={{
            headerStyle: {backgroundColor: '#1f65ff'},
            headerTitleStyle: {color: '#fff'},
            headerBackTitleStyle: {},
          }}
        />
        <Stack.Screen
          name="Select a Quote"
          component={QuoteSelect}
          options={{
            headerStyle: {backgroundColor: '#1f65ff'},
            headerTitleStyle: {color: '#fff'},
            headerBackTitleStyle: {},
          }}
        />
        <Stack.Screen
          name="Edit Quote"
          component={QuoteEditScreen}
          options={{
            headerStyle: {backgroundColor: '#1f65ff'},
            headerTitleStyle: {color: '#fff'},
            headerBackTitleStyle: {},
          }}
        />
        <Stack.Screen
          name="Add Quote"
          component={QuoteAddScreen}
          options={{
            headerStyle: {backgroundColor: '#1f65ff'},
            headerTitleStyle: {color: '#fff'},
            headerBackTitleStyle: {},
          }}
        />
        <Stack.Screen
          name="Add a Client"
          component={ClientAddScreen}
          options={{
            headerStyle: {backgroundColor: '#1f65ff'},
            headerTitleStyle: {color: '#fff'},
            headerBackTitleStyle: {},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
