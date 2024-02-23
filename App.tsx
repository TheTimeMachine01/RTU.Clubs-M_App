import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './component/HomeScreen'
import Slider from './component/slider/Slider'
import UpdatesSection from './component/updates/updates'

export default function App() {
  return (
    <>
   
      <View>

        <HomeScreen />

      </View>
      <View>
        {/* Render the Slider component */}
        {/* <Slider /> */}
      </View>
      {/* <Slider/> */}

      <View>
        {/* <UpdatesSection /> */}
      </View>
    </>
  )
}

const styles = StyleSheet.create({

  

})