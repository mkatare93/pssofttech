import { View, Text,LogBox } from 'react-native'
import React from 'react'
import RootNavigatior from './src/navigation/RootNavigatior'
import {NavigationContainer} from '@react-navigation/native';



const App = () => {
  LogBox.ignoreAllLogs();

  return (
   <NavigationContainer>
    <RootNavigatior />
    </NavigationContainer>
  )
}

export default App