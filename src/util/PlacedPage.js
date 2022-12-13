import { View, Text,StyleSheet, Dimensions,FlatList,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { RED3,RED2,RED,GRAY,GRAY2, WHITE,BLACK, ORANGE, LIGHT_GRAY, LIGHT_GRAY2, WHITE2 } from '../assets/colors/Colors'
import { Rating, AirbnbRating } from 'react-native-ratings';
// import { Divider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveHeight as ht,
  responsiveWidth as wd,
  responsiveFontSize as fs
} from "react-native-responsive-dimensions";


const {w,h}=Dimensions.get('window')

const PlacedPage = ({navigation}) => {
    const [placed,setPlaced]=React.useState([
        {src:require('../assets/images/g1.jpeg'),
        name:'Amit Kumar',
        pkg:"3.4 LPA",
    comname:'L & T',
    comimg:require('../assets/images/lt.png'),
    color:'#192a56',
    id:0
      },
      {src:require('../assets/images/g2.jpg'),
      name:'Raghav Tomar',
      pkg:"4 LPA",
    comname:'Infosys',
    comimg:require('../assets/images/infosys.png'),
      color:'#0984e3',
      id:1
    },
    {src:require('../assets/images/g3.jpeg'),
    name:'Rohit Sharma',
    pkg:"5.4 LPA",
    comname:'Wipro',
    comimg:require('../assets/images/wipro.png'),
      color:'#f9ca24',
      id:2
    },
    {src:require('../assets/images/g4.jpeg'),
    name:'Avnish Tiwari',
    pkg:"6.4 LPA",
    comname:'Tech Mahindra',
    comimg:require('../assets/images/techmahi.png'),
      color:'#e84118',
      id:3
    },
    {src:require('../assets/images/g5.jpeg'),
    name:'Ananya Shri',
    pkg:"14 LPA",
    comname:'TCS',
    comimg:require('../assets/images/tcs.png'),
      color:'#0984e3',
      id:4
    },
    {
    src:require('../assets/images/g6.jpeg'),
    name:'Ajay Sharma',
    pkg:"30 LPA",
    comname:'Cognizent',
    comimg:require('../assets/images/cog.jpg'),
    color:'#1e3799',
    id:4
    },
    
      ])
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff',alignContent:'center'}}>

<View style={styles.container}>
    <Text style={styles.tag}>Our Placed Students</Text>
<View style={styles.box}>
  <FlatList
          keyExtractor={(item, index) => item.id}
          nestedScrollEnabled={true}
            data={placed}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 20 }}
            horizontal={false}
            renderItem={({item,index}) => (
<View style={{...styles.card_style,borderColor:item.color}}>
<Image source={item.src} style={styles.boximg}/>

<View style={{flexDirection:'row',alignItems:'center',padding:5,paddingLeft:8,position:'absolute',backgroundColor:WHITE,marginTop:hp("16.5%"),width:wp("100%")}}>
<Image source={item.comimg} style={styles.comimg}/>
<View style={{width:wp("0.5%"),height:hp("7%"),backgroundColor:item.color,marginLeft:8}}></View>
<View style={{paddingLeft:9}}>
<Text style={{...styles.title,fontSize:fs(2)}}>{item.name}</Text>
<Text style={{...styles.title,fontSize:fs(2),color:item.color}}>{item.comname}</Text>
<Text style={{...styles.title,fontSize:fs(2)}}>{item.pkg}</Text>

</View>

</View>

</View>

 )}/>

</View>
</View>
  

    </SafeAreaView>
  )
}

export default PlacedPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:wp("100%"),
        
        // backgroundColor:BLACK,
        
        // height:hp("100%"),
        // padding:wp("4%")
      },
      title:{
        color:BLACK,fontSize:wp("6%"),fontFamily:'Roboto-Bold',fontWeight:'700'
      },
      box:{
        height:hp("100%"),
        width:wp("94%"),
        marginTop:12,
        borderRadius:15,
        // marginRight:16
    

       
      
      
      },
      tag:{
        color:BLACK,fontSize:fs(3),fontFamily:'Roboto-Bold',fontWeight:'700'
      },
      card_style:{
        // flexDirection:'row',
        width:wp("43%"),
        height:hp("26%"),
        // justifyContent:'space-between',
        // marginBottom:12,
        marginBottom:hp("3%"),
        // paddingTop:15,
        backgroundColor:WHITE,
        marginLeft:wp("3%"),
        overflow:'hidden',
     borderRadius:12,shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,

      
      },
      boximg:{
        width:wp("50%"),
        height:hp("25%"),
        resizeMode:'cover',
        // marginTop:52
        // borderRadius:12,
    },
   comimg:{
        width:wp("9%"),
        height:hp("5%"),
        resizeMode:'contain',
        // borderRadius:12,
    }
})