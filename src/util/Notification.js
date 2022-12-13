import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Notification = (props) => {
  return (
    <TouchableOpacity
    onPress={props.onPress}
    style={{
      display: 'flex',
      height: 45,
      width: 30,
      justifyContent: 'center',
      alignContent: 'center',
    }}>
    <View style={styles.badgeContainer}>
      {props.icon ? (
        <Ionicons name={props.icon} size={24} color="#fff" />
      ) : null}
      {props.count && props.count > 0 ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{props.count}</Text>
        </View>
      ) : null}
    </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    badgeContainer: {
      position: 'relative',
    },
  
    badge: {
      position: 'absolute',
      top: -10,
      right: 0,
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
      borderRadius: 20,
      width: 20,
      height: 20,
      textAlign: 'center',
      paddingTop: 2,
      fontSize: 10,
      color: '#FF5733',
    },
    badgeText: {
      fontSize: 10,
    },
  });

export default Notification