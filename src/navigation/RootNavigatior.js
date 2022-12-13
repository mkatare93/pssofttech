import { View, Text,Image } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Courses from '../screen/Courses';
import Category from '../screen/Category';
import Profile from '../screen/Profile';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';




const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const ProductStack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
   
 screenOptions={{
  tabBarHideOnKeyboard:true,
     headerShown: false,
      tabBarShowLabel:false,
     tabBarLabelStyle:{
          fontSize:12,
         
      },

      tabBarStyle:{
        height:heightPercentageToDP("10%"),
        paddingTop:10,
        paddingBottom:5,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:widthPercentageToDP("-12%"),
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
         elevation: 17,
      }
    }}
    >
      <Tab.Screen
       options={{
        tabBarIcon: ({focused}) => (
          // <Image source={require('../assets/images/home.png')} style={{width:30,height:30,color:'red'}} resizeMode='contain' />
            <MaterialIcons name="home-filled" size={25} color={focused ? '#fff' :'#4d4a4a'} style={{backgroundColor:focused ?'#ff9900':'#fff',padding:focused ?12:0,borderRadius:focused ?30:0}}  />
          ),
          }}
      name="Home" component={Home} />
      <Tab.Screen
       options={{
        tabBarIcon: ({focused}) => (
            <MaterialIcons name="menu-book" size={25} color={focused ? '#fff' :'#4d4a4a'} style={{backgroundColor:focused ?'#ff9900':'#fff',padding:focused ?12:0,borderRadius:focused ?30:0}} />
          ),
         }}
      name="Courses" component={Courses} />
      <Tab.Screen
       options={{
        tabBarIcon: ({focused}) => (
            <Octicons name="apps" size={25} color={focused ? '#fff' :'#4d4a4a'} style={{backgroundColor:focused ?'#ff9900':'#fff',padding:focused ?12:0,borderRadius:focused ?30:0}} />
          ),
         }}
      name="Category" component={Category} />
       <Tab.Screen
       options={{
        tabBarIcon: ({focused}) => (
          // <Image source={require('../assets/images/home.png')} style={{width:30,height:30,color:'red'}} resizeMode='contain' />
            <Ionicons name="person-circle" size={focused?25:27} color={focused ? '#fff' :'#4d4a4a'} style={{backgroundColor:focused ?'#ff9900':'#fff',padding:focused ?12:0,borderRadius:focused ?30:0}}  />
          ),
          }}
      name="Profile" component={Profile} />
      
  </Tab.Navigator>
  );
}






const RootNavigatior = () => (
  <RootStack.Navigator
    initialRouteName="Tab"
    screenOptions={{
    headerShown: false,
   }}
  >
    <RootStack.Screen name='Tab' component={MyTabs}  />


  </RootStack.Navigator>
)

export default RootNavigatior