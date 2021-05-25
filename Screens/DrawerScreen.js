import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Profile';
import Success from './Success';

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
  
      <Drawer.Navigator initialRouteName="Profile">
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Success" component={Success} />
      </Drawer.Navigator>
 
  );
}