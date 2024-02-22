import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, SafeAreaView } from 'react-native';
import tw from 'twrnc'

const UpdatesSection = () => {
  return (
    <SafeAreaView>
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={tw`text-3xl font-bold mb-5`}>Updates.........</Text>
      <View style={styles.update}>
        <View style={styles.content}>
          <Image
            source={require('../images/nitin.jpg')} // Path to your image
            style={styles.image}
          />
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget aliquet ipsum. 
            Integer varius magna id ex placerat, vitae convallis turpis convallis.
          </Text>
        </View>
      </View>
      <View style={styles.update}>
        <View style={styles.content}>
          <Image
            source={require('../images/nitin.jpg')} // Path to your image
            style={styles.image}
          />
          <Text style={styles.text}>
            Nulla facilisi. Donec vel lectus a purus suscipit eleifend. 
            Vestibulum scelerisque lacus at viverra dignissim.
          </Text>
        </View>
      </View>
      {/* Add more updates as needed */}
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  update: {
    marginBottom: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100, // Adjust height as needed
    resizeMode: 'cover',
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default UpdatesSection;
