<<<<<<< HEAD

import { Slot } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function AuthLayout() {
  return (
    
    <View style={styles.container}>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // justifyContent: 'center', 
    // alignItems: 'center',     
    // backgroundColor: '#f0f0f0', 
  },
});
=======
import { Stack } from "expo-router";
import React from "react";

function LayoutAuth() {
  return <Stack></Stack>;
}

export default LayoutAuth;
>>>>>>> 72d23eb58ea85712d3e44794f8fb7a40d86ff3d4
