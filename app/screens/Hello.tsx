import React from 'react';
import { View,ViewStyle, Text, StyleSheet,Image,ImageStyle,StyleProp,Button } from 'react-native';
import { colors } from "../theme";
const welcomeLogo = require("../../assets/images/Jlogo.png")

export default function First(props) {
  return (
    <View style={styles.container}>
                <Image style={$Logo} source={welcomeLogo} resizeMode="contain" />

      <Text style={styles.text}>Welcome to ITTHUB</Text>
      <Button
         style={$icon}
         title="let's Start"
         onPress={()=>props.navigation.navigate('F')}
      />
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
    marginVertical: 30,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const $Logo: ImageStyle = {
    height: 180,
    width: 180,
  }

  const $icon: ViewStyle  = {
    backgroundColor: colors.palette.primary700,
    height: 100,
    width: 200,
    marginTop: 20,
    borderRadius: 20,
  }