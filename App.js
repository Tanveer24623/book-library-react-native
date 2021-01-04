import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { HomeScreen, LibraryScreen, ProfileScreen } from './screens';


const App = () => {
  


  return (
    <View style={styles.container}>
      <HomeScreen />
      
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default App;
