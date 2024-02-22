import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'



export default function HomeScreen() {
  return (
    
    <>

    
      <View style={styles.container}>
        {/* First View with Text */}
        <View style={styles.leftView}>
          <Text style={styles.text}>WelCome,</Text>
          <Text style={styles.text}>Mr. Ashish Verma</Text>
        </View>

        {/* Second View with User Image */}
       <TouchableOpacity >
       <View style={styles.rightView}>
          <Image
            source={require('./images/nitin.jpg')} // Path to your user image
            style={styles.image}
          />
        </View>
       </TouchableOpacity>
      </View>

      <View style={[styles.container, tw`mt-2 bg-orange-400 rounded-6`]}>
        <Image
          source={require('./images/nitin.jpg')} // Path to your user image
          style={[styles.image, tw`h-20 w-20 m-4 rounded-3`]}
        />


        <View style={styles.Score} >
          <Text style={styles.ScoreT}>145/6</Text>


          <View style={styles.Team}>
            <Text style={styles.TeamName}>HostalNo.3</Text>
            <View style={styles.Row}>
              <View style={styles.hr} />
              {/* <Text style={styles.orText}>Vs</Text> */}
            </View>
            <Text style={styles.TeamName}>HostalNo.3</Text>
          </View>

          <Text style={styles.ScoreT}>145/6</Text>

        </View>
        


      </View>

      
     
      {/* <UpdatesSection/> */}
      
      

    </>
  )
}

const styles = StyleSheet.create({


  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // paddingHorizontal: 20,
    // marginTop: 0,
    backgroundColor: 'black',
    //marginHorizontal: 5,
    // borderRadius: 8
  },
  leftView: {
    // backgroundColor: 'lightblue',
    padding: 20,

  },
  rightView: {
    // backgroundColor: 'lightgreen',
    padding: 20,
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#ffffff'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  Score: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  ScoreT: {
    fontSize: 30,
    padding: 4,
    fontWeight: 'bold',

  },
  Team: {
    flex: 1,
    flexDirection: 'column',
    // marginTop:50,
    alignItems: 'center',

  },
  TeamName: {
    fontSize: 15,
    paddingVertical: 10,
  },
  Row:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    position: 'relative',

  },
  hr: {
    flex: 1,
    height: 1,
    backgroundColor: '#000000',
  },
  orText: {
    position: 'absolute',
    paddingHorizontal: 10,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#4B5563',
    // backgroundColor: '#fff',
    zIndex: 1,
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },

})