// App.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Courses from './Courses';

const Tab = createBottomTabNavigator();

export default function TB() {
  return (
    <NavigationContainer  independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Courses" component={Courses} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
