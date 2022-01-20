import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, PermissionsAndroid } from 'react-native';
import Position from './geolocation/position.js'




export default function App() {

 
  return (
    <View style={styles.container}>
      <Position/>
    </View>
  );
}


  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
