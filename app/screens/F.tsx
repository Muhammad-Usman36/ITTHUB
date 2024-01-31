import React from "react"
import {Image, ImageStyle, TextStyle, View, ViewStyle,Alert, TouchableOpacity } from "react-native"
import { Text,Button,Icon,TextField} from "app/components"
import { colors, spacing } from "../theme"




const welcomeLogo = require("../../assets/images/Jlogo.png")


export const F=(props) => {
  
  return (
    <View style={$container}>

      <View style={$topContainer}>
      <TouchableOpacity onPress={()=>props.navigation.navigate('SingUp')}>

        <Text style={{color:colors.theam,textAlign: 'right', margin: 20,fontWeight:'bold'}}>Skip</Text>
        </TouchableOpacity>


      <Image style={$welcomeLogo} source={welcomeLogo}  width={20} resizeMode="contain" />


        <Text style={{alignSelf: 'center', fontWeight:"bold",fontSize: 20,marginBottom:10, color:colors.theam}}>Welcome to ITTHUB</Text>

       <Text style={{alignItems: 'center',marginHorizontal: 35}}>Welcome as you learn a world changing skill to get better job. </Text>
        

       <Button
text="Next"
style={$icon}
onPress={()=>props.navigation.navigate('S')}
/>

      </View>
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}
const $icon: ViewStyle = {
 height:50,
 width:120,
 marginTop: 90,
 marginLeft: 190,
 color:'white'
}
const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $welcomeLogo: ImageStyle = {
  height: 190,
  width: "100%",
  marginVertical: spacing.xxxl,
}