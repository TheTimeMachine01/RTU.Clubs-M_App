import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Slider = () => {
  return (
    <>
    <View  style={[styles.slider,tw`m-5 rounded-8`]}>
      <Text>Slider</Text>
    </View>
    <View style={styles.slidertexts}>
      <Text>club-name</Text>
    </View>
    </>
  )
}

export default Slider

const styles = StyleSheet.create({
  slider:{
    justifyContent:'center',
    alignItems:'center',
    height:400,
    backgroundColor:'red'
  },
  slidertexts:{
    justifyContent:'center',
    alignItems:'center',

  }
})