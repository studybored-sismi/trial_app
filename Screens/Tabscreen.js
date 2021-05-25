import React from 'react';
import {  View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Success from './Success';


const Tab = createBottomTabNavigator();

export default function Tabscreen() {
    return(
        <Tab.Navigator initialRouteName="Profile" tabBarOptions={{activeTintColor:"green",tabBarColor:"#FDC913",activeBackgroundColor:"#FDC913"}}>
        <Tab.Screen name="Profile" component={Profile}  
         options={{
                    tabBarColor: 'black',
                    tabBarLabel: 'Profile',
                    activeBackgroundColor:"#FDC913"
                       
                }} />
        <Tab.Screen name="Success" component={Success} 
          options={{
            tabBarColor: 'black',
            tabBarLabel: 'Success',
            activeBackgroundColor:"#FDC913",
            
                
        }}/>
      </Tab.Navigator>
    )
}