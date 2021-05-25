/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './src/MainTabs';
import { DrawerContent } from './src/CustomDrawer';
import TutorialScreen from './src/TutorialScreen/TutorialScreen';

const Drawer = createDrawerNavigator();

 export default function App() {
   return (
    <NavigationContainer>
       <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props}/>}>
         <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
         <Drawer.Screen name="Tutorials" component={TutorialScreen} />
       </Drawer.Navigator>
    </NavigationContainer>
   );
 }