import { View, Text,StyleSheet,Image,FlatList,ScrollView,Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Notification from '../util/Notification'
// import { TestWatcher } from 'jest'
import { BLACK, GRAY, ORANGE } from '../assets/colors/Colors'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {
  responsiveHeight as ht,
  responsiveWidth as wd,
  responsiveFontSize as fs
} from "react-native-responsive-dimensions";
const {width, height} = Dimensions.get('window');
import { SwiperFlatList } from 'react-native-swiper-flatlist';



const AjayPage = () => {

const dataText=[
  {id:1,
  heading:'Learning that fits',
  text:'Skills for your present (and future)'
  },
  {
    id:2,
    heading:"We Don't Teach.",
    text:"We develop what's already inside you."
  }
]

const renderProductSlide=(item)=>{
  return(
   <View key={item.id} style={{paddingBottom:10}}>
        <View style={styles.sliderContainer}>
      <Text style={styles.mainHeadText}>{item.heading}</Text>
      <Text style={styles.minNormalText}>{item.text}</Text>
      </View>
      </View>
  )
}



  return (
    <SafeAreaView style={styles.mainContainer}>
    
    <View style={styles.container}>
        <View style={styles.containerOne}>
          <View  style={{alignItems:'center',flexDirection:'row'}}>
            <Image style={styles.image}
            source={require('../assets/images/Artboard.png')} 
            />
           <View style={styles.userText}>
          <Text style={{fontSize:fs(2.3),fontFamily:'Roboto-Regular',color:GRAY}}>Hello,</Text>
          <Text style={styles.userTextFont}> Sandeep Sappal</Text>
          </View>
          </View>
       <View>
      </View>
        </View>

        
        <View style={styles.continerTwo}>
          <View style={{color:'#fff',transform: [{ rotate: '-55deg'}],marginTop:54,marginRight:112}}>
          {/* <Text style={{color:'#fff',transform: [{ rotate: '-60deg'}],marginTop:80,marginRight:100}}>Hi</Text> */}
          <Notification  
          icon='notifications-sharp'
          />
          </View>
        </View>

     </View>


    <View  style={{width:wp("100%"),marginLeft:wp("-1.7%"),marginTop:wp("-4.2%")}}>
    <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      data={dataText}
      renderItem={({ item,index }) => renderProductSlide(item, index)}
      />

    </View>

    
    


 
    </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,backgroundColor:"#fff"
  },
container:{
  // backgroundColor:'#fff',
  justifyContent:'space-between',
  display:'flex',
width:wp('100%'),
flexDirection:'row',

},
containerOne:{
// backgroundColor:'#000',
width:wp('45%'),
paddingLeft:wp("3%")




// marginLeft:hp('37%'),
// borderBottomLeftRadius:hp('100%'),
},
continerTwo:{
  backgroundColor:'#FF0028',
  height: hp('15%'),
  width:wp('47%'),
  borderBottomLeftRadius:41,
  borderBottomRightRadius:41,

  alignItems:'flex-end',
  // borderBottomLeftRadius:hp('15%'),
  marginLeft:wp('30%'),
  marginTop:-12,
  transform: [{ rotate: '54deg'}]
 
},
userText:{
  justifyContent:'center',
  flexDirection:'row',
  paddingLeft:wp("4%")
},
userTextFont:{
  fontSize:fs(2.4),
  fontFamily:'Roboto-Medium',
  color:GRAY,
  fontWeight:'800'
},
image:{
 width:wp('15%'),
  height:hp('7.5%'),
  // backgroundColor:'#ff9900',
  // borderRadius:hp('10%'),
   borderWidth:2,
   borderRadius:wp('10%'),
  borderColor:ORANGE,
  resizeMode:'contain'
 // backgroundColor:'#000'

 },
 mainHeadText:{
  fontSize:fs(3),
  fontFamily:'Roboto-Regular',
  fontWeight:'800',
  color:'#4d4a4a'
 },
 minNormalText:{
  fontSize:fs(2),
  fontFamily:'Roboto-Regular',
  marginTop:0,
  color:GRAY
 },
 sliderContainer:{
  width:wp('92%'),
  backgroundColor:'#fffbfb',
  paddingTop:10,
  paddingBottom:10,
  marginHorizontal:15,
  borderRadius:10,
  paddingHorizontal:10,
  paddingLeft:20,
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
 },
 
 




})

export default AjayPage