import { View, Text,StyleSheet, Dimensions,FlatList,TouchableOpacity,Image,ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { RED3,RED2,RED,GRAY,GRAY2, WHITE,BLACK, ORANGE, LIGHT_GRAY, LIGHT_GRAY2, WHITE2 } from '../assets/colors/Colors'
import { Rating, AirbnbRating } from 'react-native-ratings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PlacedPage from '../util/PlacedPage'
import AjayPage from '../util/AjayPage'
import Courses from '../util/Courses'
import {
  responsiveHeight as ht,
  responsiveWidth as wd,
  responsiveFontSize as fs
} from "react-native-responsive-dimensions";


const {w,h}=Dimensions.get('window')
const Home = ({navigation}) => {

  const [course,setCourse]=React.useState([
    {src:require('../assets/images/C.jpg'),
    cn:"C Programming",
    about:"Learn C Programming from Scratch, with hands on 1000+ Programs.",
    by:"By-Sandeep Sappal",
    rate:4,
  id:1},
    {src:require('../assets/images/C++.jpg'),
    cn:"C++ Programming",
    about:"C++ Programming from Beginner to Expert",
    by:"By-Sandeep Sappal",
    rate:3,
  id:2},
    {src:require('../assets/images/DevOps.jpg'),
    cn:"React JS & Node JS",
    about:"Complete Full Stack Developer get 100%job",
    by:"By-Sandeep Sappal",
    rate:2,
  id:3},
   
  ])

 




  return (
  <SafeAreaView style={{flex:1,backgroundColor:'#fff',alignContent:'center'}} >
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
    <View>
      <AjayPage/>
      </View>




      <View style={{paddingTop:10}}>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
  <Text style={styles.tag}>Popular Courses</Text>
  <TouchableOpacity>
  <Text style={{color:BLACK,fontSize:fs(1.9),color:ORANGE}}>Show all</Text>

  </TouchableOpacity>


</View>
    <View style={{...styles.box}}>
          <FlatList
          // contentContainerStyle={{ paddingBottom:180 }}
          keyExtractor={(item,index) => item.id}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
            data={course}
            // numColumns={2}
            horizontal={false}
            scrollEnabled={false}
            renderItem={({item,index}) => (
              <View key={item.id}>
              <View style={styles.card_style}
              >
                <TouchableOpacity
       >
                  <Image
                    //source={{uri:item.src}}
                    source={item.src}
                    style={styles.boximg}
                  />
                  {/* <Text style={styles.specialization_name_style}>
                  {item.specialist}

                  </Text> */}
                </TouchableOpacity>
                <View style={styles.textitem}>
<Text style={styles.title}>{item.cn}</Text>
<Text style={styles.sub} numberOfLines={3}>{item.about}</Text>


<View style={{flexDirection:'row',alignItems:"center",width:wp("50%"),position:'absolute',marginTop:hp("11%")}}>
<View style={{height:hp("8%")}}>
<Text style={{...styles.title,fontSize:fs(2)}}>{item.by}</Text>
<View style={{marginTop:wp("-8.5%"),marginLeft:wp("-0.9%"),position:'absolute'}}>

<AirbnbRating
  count={5}
  // reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
  defaultRating={item.rate}
  size={17}
  reviews={false}
/>

</View>
</View>



<TouchableOpacity style={{justifyContent:"center",marginLeft:wp("2%")}}>
<View style={styles.download}>
<MaterialCommunityIcons
 name="download" size={25} color={'#fff'} />

</View>
<Text style={{...styles.title,fontSize:fs(1.6),paddingTop:5,width:wp("19%"),justifyContent:"center",marginLeft:wp("2%")}} numberOfLines={2}>Download Syllabus</Text>

</TouchableOpacity>


</View>




                </View>



              </View>
    <View style={styles.divider}></View>

              </View>
            )}
          />
      </View>
        </View>

        <View style={{marginTop:hp("3%")}}>
          <PlacedPage/>
        </View>


        <View style={{marginTop:hp("-12%")}}>
          <Courses/>
        </View>
        
     </View>
    

     </ScrollView>
    </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({
container:{
  flex:1,
  // width:wp("100%"),
  // height:hp("100%"),
  // padding:wp("4%")
  padding:wp('2.5%')
},
box:{
  backgroundColor:WHITE,
  height:hp("74%"),
  // width:wp("94%"),
  padding:wp("2.8%"),
  marginTop:12,
  borderRadius:15,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius:5,
  elevation:3,


},
boximg:{
  width:wp("29%"),
  height:hp("19%"),
  resizeMode:'cover',
  borderRadius:12,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 9,
  },
  shadowOpacity: 0.48,
  shadowRadius: 11.95,
  
  elevation: 18,
},
card_style:{
  flexDirection:'row',
  width:wp("90%"),
  height:hp("23.5%"),
  justifyContent:'space-between',
  // marginBottom:12,
  paddingBottom:15,
  paddingTop:15

},
textitem:{
  width:wp("55%"),
  paddingRight:wp("0%"),
  marginRight:3
  // backgroundColor:GRAY
},
title:{
  color:BLACK,fontSize:fs(2.8),fontFamily:'Roboto-Bold',fontWeight:'700'
},
sub:{
  color:BLACK,fontSize:fs(2),color:LIGHT_GRAY,
  
},
divider:{
  width:wp("100%"),
  backgroundColor:WHITE2,
  // backgroundColor:BLACK,
  height:hp("0.2%")
},
download:{
  backgroundColor:BLACK,
  width:wp("10%"),
  alignItems:'center',
  justifyContent:"center",
  height:hp("5%"),
  borderRadius:10,
  shadowColor: "#000",
  marginLeft:wp("3%"),
shadowOffset: {
	width: 0,
	height: 9,
},
shadowOpacity: 0.48,
shadowRadius: 11.95,

elevation: 18,
  

}
,tag:{
  color:BLACK,fontSize:fs(3),fontFamily:'Roboto-Bold',fontWeight:'700'
}


})

export default Home