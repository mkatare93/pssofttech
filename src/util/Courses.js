import { View, Text, StyleSheet, Image, FlatList, ScrollView, Animatable, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Animated, Easing, SectionList, StatusBar } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
// import MarqueeView from 'react-native-marquee-view';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AutoScroll from "@homielab/react-native-auto-scroll";
import { BLACK, GRAY2, LIGHT_GRAY, RED } from '../assets/colors/Colors';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {
  responsiveHeight as ht,
  responsiveWidth as wd,
  responsiveFontSize as fs
} from "react-native-responsive-dimensions";





const { w, h } = Dimensions.get('window')
const Courses = () => {
  let opacity = new Animated.Value(0);
  const animate = easing => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1200,
      easing
    }).start();
  };


  // const [show,setShow]=React.useState(false)
  // const [msgindex,setMsgindex]=React.useState('')

  const [slideContent, setSlideContent] = React.useState([
    {
      id: 1,
      name: 'Ajay',
      review: 'As per my experience, NIS For Technology Training is the best Institute in Gwalior. I completed my course on time and was satisfied with the training. The Sappal sir is professional and experienced and they are doing their job well.',
      image: require('../assets/tempimg/pic1.jpeg'),
      clg: 'ITM',
      rate: 4,
      show: false
    },
    {
      id: 2,
      name: 'Vijay Sharma',
      review: 'As per my experience, NIS For Technology Training is the best Institute in Gwalior. I completed my course on time and was satisfied with the training. The Sappal sir is professional and experienced and they are doing their job well.',
      image: require('../assets/tempimg/pic2.jpeg'),
      clg: 'MITS',
      rate: 4,
      show: false
    },
    {
      id: 3,
      name: 'Rohan',
      review: 'As per my experience, NIS For Technology Training is the best Institute in Gwalior. I completed my course on time and was satisfied with the training. The Sappal sir is professional and experienced and they are doing their job well.',
      image: require('../assets/tempimg/pic3.jpeg'),
      clg: 'RAM',
      rate: 4,
      show: false
    },
    {
      id: 4,
      name: 'Sohan',
      review: 'As per my experience, NIS For Technology Training is the best Institute in Gwalior. I completed my course on time and was satisfied with the training. The Sappal sir is professional and experienced and they are doing their job well.',
      image: require('../assets/tempimg/pic4.jpg'),
      clg: 'ITM',
      rate: 4,
      show: false
    },
    {
      id: 5,
      name: 'Mohan',
      review: 'As per my experience, NIS For Technology Training is the best Institute in Gwalior. I completed my course on time and was satisfied with the training. The Sappal sir is professional and experienced and they are doing their job well.',
      image: require('../assets/tempimg/pic5.png'),
      clg: 'MITS',
      rate: 4,
      show: false
    },

  ])




  const showMSG = (item, index) => {
    // console.log("first",item.show)

    if (item.show) {
      item.show = true
    }

    let tempRow = [];
    tempRow = slideContent;
    tempRow.map((item, ind) => {
      if (index == ind) {
        if (item.show == false) {
          item.show = true;
        } else {
          item.show = false;
        }
      }
    })

    let tempSeats = [];
    tempRow.map(item => {
      tempSeats.push(item)
    })
    setSlideContent(tempSeats)

  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: hp("33.5%") }}>
        <Text style={styles.tag}>Where our Alumni works</Text>
        <View>

          <AutoScroll style={{ width: "100%", marginTop:hp('2%') }}>
            <Image
              style={{ width: widthPercentageToDP("400%"), height: heightPercentageToDP("25%"), resizeMode: 'contain' }}
              delay={0}
             source={require('../assets/images/Slider.jpg')}
            />
          </AutoScroll>

        </View>
      </View>


      <View>
        <View>
          <Text style={styles.tag}>What Alumni says</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

          <View style={styles.imageAlumni}>

            {slideContent.map((item, index) => {
              return (

                <View key={item.id} style={styles.slideouter}>
                  <View style={{ padding: 5, overflow: 'hidden' }}>
                    <Image source={item.image} style={styles.slideImg} resizeMode='cover' />
                    <View style={{ position: 'absolute', marginTop: item.show ? '3%' : '61.5%', marginLeft: 5, overflow: 'hidden' }}>
                      <View style={{ backgroundColor: '#eef5f6b8', width: item.show ? wp('42%') : wp('38.2%'), height: item.show ? hp('28%') : hp('15.9%'), overflow: 'hidden', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomRightRadius: 20, paddingHorizontal: 10, paddingVertical: 5 }}>
                        <Text numberOfLines={1} style={{ color: '#000', fontSize: fs(2), fontWeight: '800' }}>{item.name} ({item.clg})</Text>
                        <View style={styles.slideInnerBox}>
                          <View style={{ marginLeft: wp("-5.9%") }}>
                              <AirbnbRating
                              count={5}
                              // reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                              defaultRating={item.rate}
                              size={12}
                              reviews={false}
                            />
                          </View>
                          <Text numberOfLines={item.show ? 10 : 4} style={{ fontSize:fs(1.5), color: BLACK }}>{item.review}</Text>

                        </View>

                        {item.show ? (<TouchableOpacity onPress={() => showMSG(item, index)}>
                          <Text style={styles.buttonHide}>Hide</Text>
                        </TouchableOpacity>) : (<TouchableOpacity onPress={() => showMSG(item, index)}>
                          <Text style={styles.buttonMore}>more...</Text>
                        </TouchableOpacity>)}


                      </View>

                    </View>
                  </View>
                </View>








              )
            })}

          </View>
          </ScrollView>





      </View>







    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainHeadTextAll: {
    fontSize: 27,
    fontFamily: 'Roboto-Bold',
    fontWeight: '900',
    color: '#535c68',
    paddingHorizontal: wp('3%')
  },
  imageAlumni: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginLeft: wp("0.5%"),
    shadowColor: "#000",
    // marginLeft:0,
    borderTopLeftRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5.62,
    elevation: 7,
    marginTop: hp("1%"),
    marginBottom: hp("5.5%")
  },
  slideReviewImage: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  tag: {
    color: BLACK, fontSize:fs(3), fontFamily: 'Roboto-Bold', fontWeight: '700'
  },
  slideouter:{
    flexDirection: 'row',
     margin: 5, 
     overflow: 'hidden',
      width: wp("45%")
  },
  slideImg:{
    width: widthPercentageToDP('42%'),
     height: heightPercentageToDP('28%'), 
     overflow: 'hidden',
      borderTopLeftRadius: 20,
       borderTopRightRadius: 20,
        borderBottomRightRadius: 20 
  },
  slideInnerBox:{
    marginTop: wp("-7.5%"),
     marginLeft: wp("1.9%"), 
     position: 'absolute'
  },
  buttonHide:{
    fontSize:fs(2.1), 
    color: RED,
     alignItems: 'flex-end', 
     marginLeft: wp("25%"),
      marginTop: hp("21.2%") 
  },
  buttonMore:{
    fontSize: fs(2),
     color: 'blue',
      alignItems: 'flex-end', 
      marginLeft: wp("20%"),
       marginTop: wp("18.2%")
  }
})

export default Courses