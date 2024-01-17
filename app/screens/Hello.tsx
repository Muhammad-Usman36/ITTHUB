import React from 'react';
import { View, Text, StyleSheet,Image,ImageStyle } from 'react-native';
const welcomeLogo = require("../../assets/images/Itthublogo.png")

export default function Hello() {
  return (
    <View style={styles.container}>
                <Image style={$Logo} source={welcomeLogo} resizeMode="contain" />

      <Text style={styles.text}>Welcome to ITTHUB</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const $Logo: ImageStyle = {
    height: 200,
    width: 200,
  }