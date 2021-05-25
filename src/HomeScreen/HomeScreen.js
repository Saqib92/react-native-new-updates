import * as React from 'react';
 import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

const HomeScreen = ({navigation}) =>{
   return (
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Text>Home Screen</Text>
     </View>
   )
 }

 function wow(s){
   alert(s)
 }

 export default HomeScreen;