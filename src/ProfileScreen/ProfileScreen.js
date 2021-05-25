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

const ProfileScreen = ({navigation}) =>{
   return (
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Text>Profile Screen</Text>
     </View>
   )
 }

 function wow(s){
   alert(s)
 }

 export default ProfileScreen;