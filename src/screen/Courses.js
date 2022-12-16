import { View, Text, StyleSheet, Image, FlatList, ScrollView, Animatable, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Animated, Easing, SectionList, StatusBar } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import {
  responsiveHeight as ht,
  responsiveWidth as wd,
  responsiveFontSize as fs
} from "react-native-responsive-dimensions";
import FirstRoute from './FirstRoute'
import SecondRoute from './SecondRoute'
import ThirdRoute from './ThirdRoute';






const Courses = () => {
 




  return (
    <SafeAreaView>
  <View >
    <View style={styles.container}>
      <Text style={styles.headText}>
      My Studies
      </Text>
    </View>
      
    <View>
    
    </View>




   </View>
   </SafeAreaView>
  )
}

export default Courses


const styles = StyleSheet.create({

  container:{
  width:wp("100%"),
  backgroundColor:'#FF0028',
  height:hp("8%"),
  justifyContent:'center',
  alignItems:'center'
  },
  headText:{
    fontSize:fs(3.5),
    fontWeight:'600',
    color:'#fff',
    fontFamily:'Roboto-Bold'
  }
 
  
});
