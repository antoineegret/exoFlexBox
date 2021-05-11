import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container0}>
      </View>
      <View style={styles.container1}>
      </View>
      <View style={styles.container2}>
      </View>
      <View style={styles.container3}>
      </View>
      <View style={styles.container4}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection:'row',
    
  },
  container0: {
    flex: 2,
    backgroundColor: 'green',
    
  },
  container1: {
    flex: 2,
    backgroundColor: 'red',
    
   
    
  },
  container2: {
    flex: 2,
    backgroundColor: 'blue',
    
   
    
  },
  container3: {
    flex: 2,
    backgroundColor: 'pink',
    
    
    
  },
  container4: {
    flex:2,
    backgroundColor:'yellow',
    
  }

});
