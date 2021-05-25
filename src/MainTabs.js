import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Import Screens
import HomeScreen from './HomeScreen/HomeScreen';
import DetailsScreen from './DetailsScreen/DetailsScreen';
import ProfileScreen from './ProfileScreen/ProfileScreen';
import ExploreScreen from './ExploreScreen/ExploreScreen';
import TutorialScreen from './TutorialScreen/TutorialScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const HomeStackScreen = ({navigation})=>{
  return(
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: 'red'
      },
      headerTintColor: '#fff'
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerLeft:()=>(
          <Icon name="menu" style={{marginLeft: 10}} size={30} color="#fff" onPress={()=>{navigation.toggleDrawer()}}/>
        )
      }}/>
    </HomeStack.Navigator>
  )
}

const DetailsStackScreen = ({navigation})=>{
  return(
    <DetailsStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: 'orange'
      },
      headerTintColor: '#fff',
      
    }}>
      <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerLeft:()=>(
          <Icon name="menu" style={{marginLeft: 10}} size={30} color="#fff" onPress={()=>{navigation.toggleDrawer()}}/>
        )
      }}/>
    </DetailsStack.Navigator>
  )
}


const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'red',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarColor: 'orange',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#000215',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TutorialScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: 'green',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;