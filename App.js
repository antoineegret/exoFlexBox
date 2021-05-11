import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.containerVertical}>

        <View style={styles.containerVertical1}></View>
        <View style={styles.containerVertical2}></View> 
        <View style={styles.containerVertical3}></View>  

      </View>

      <View style={styles.containerHorizontal}>

      <View style={styles.containerHorizontal1}></View> 
      <View style={styles.containerHorizontal2}></View> 
      <View style={styles.containerHorizontal3}></View> 

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },

  containerVertical: {
    flex: 3,
    flexDirection:'row',  
  },

  containerVertical1: {
    flex: 2,
    backgroundColor:'green', 
  },
  containerVertical2: {
    flex: 2,
    backgroundColor:'red',

  },
  containerVertical3: {
    flex: 2,
    backgroundColor:'blue',
  },

  containerHorizontal: {
    flex: 3,
  },
  containerHorizontal1: {
    flex: 2,
    backgroundColor: 'purple',
  },
  containerHorizontal2: {
    flex: 2,
    backgroundColor:'yellow',
  },
  containerHorizontal3: {
    flex: 2,
    backgroundColor: 'pink',
  },
});
