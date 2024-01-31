import React from "react"
import {Image, ImageStyle, TextStyle, View, ViewStyle,Alert, TouchableOpacity } from "react-native"
import { Text,Button,Icon,TextField} from "app/components"
import { colors, spacing } from "../theme"
import { goBack } from "app/navigators";





const welcomeLogo = require("../../assets/images/3.png")


export const T=() => {
  
  return (
    <View style={$container}>

      <View style={$topContainer}>
      

        <Image style={$welcomeLogo} source={welcomeLogo}  width={20} resizeMode="contain" />



        <Text style={{alignSelf: 'center', fontWeight:"bold",fontSize: 20,marginBottom:10, color:colors.theam}}>Get Certified</Text>

       <Text style={{alignItems: 'center',marginHorizontal: 10}}>Start learning and get certified after your training to get a lucrative job.</Text>
        
<View style={{flexDirection: 'row', marginTop: 100,marginLeft: 50}}>
<TouchableOpacity onPress={()=>goBack('S')}>

<Text style={{marginTop: 13, fontWeight: 'bold',color:colors.theam}}>Back</Text>
</TouchableOpacity>
<Button
text="Get Startrd"
style={$icon}

/>
</View>


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
 marginLeft:100
,}



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
  marginBottom:90,
}