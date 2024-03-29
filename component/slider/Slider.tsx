// Slider.js

import { Dimensions, StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import sliderData from './sliderData';
import tw from 'twrnc'

const { height, width } = Dimensions.get('window');

const Slider = () => {
  return (
    <View style={styles.slider}>
      <FlatList
        horizontal
        pagingEnabled
        data={sliderData}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.sliderM}>
              <TouchableOpacity style={styles.button} disabled={true}>
                <ImageBackground source={item.imageUrl} style={styles.imageBackground}>
                  <Text style={styles.text}>{item.text}</Text>
                </ImageBackground>
              </TouchableOpacity>
             <View>
             <Text style={[styles.name, tw`text-2xl`]} >{item.name}</Text>
             </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  slider: {
    marginTop:10,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  sliderM: {
    width: width,
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red'
   
  },
  button: {
    width: '90%',
    height: '90%',
    borderRadius: 20,
    borderColor:'black',
    borderWidth:10,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius:5,
  },
  text: {
    fontSize: 24,
    color: '#0afa4e',
    position:'absolute',
    bottom:10,
    right:10,
    textAlign: 'center',
    backgroundColor:'transparent',
    borderColor:'#0afa4e',
    borderWidth:1,
    borderRadius:5, // Semi-transparent background for better readability
    padding: 10,
  },
  name:{
    color:'red',
    fontWeight:'bold'
    
  }
});
