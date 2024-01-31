import React from "react"
import {Image, ImageStyle, TextStyle, View, ViewStyle,Alert, TouchableOpacity } from "react-native"
import { Text,Button,Icon,TextField} from "app/components"
import { colors, spacing } from "../theme"
import { goBack } from "app/navigators";





const welcomeLogo = require("../../assets/images/2.png")


export const S=(props) => {
  
  return (
    <View style={$container}>

      <View style={$topContainer}>
      <TouchableOpacity onPress={()=>props.navigation.navigate('SingUp')}>

        <Text style={{color:colors.theam,textAlign: 'right', margin: 20,fontWeight:'bold'}}>Skip</Text>
        </TouchableOpacity>

        <Image style={$welcomeLogo} source={welcomeLogo}  width={20} resizeMode="contain" />



        <Text style={{alignSelf: 'center', fontWeight:"bold",fontSize: 20,marginBottom:10, color:colors.theam}}>Choose Your Course</Text>

       <Text style={{alignItems: 'center',marginHorizontal: 20}}>Choose the course of your choice and gain industry knowledge and experience in it.</Text>
        
<View style={{flexDirection: 'row', marginTop: 100,marginLeft: 50}}>
<TouchableOpacity onPress={()=>goBack('F')}>

<Text style={{marginTop: 13, fontWeight: 'bold',color:colors.theam}}>Back</Text>
</TouchableOpacity>
<Button
text="Next"
style={$icon}
onPress={()=>props.navigation.navigate('T')}

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
}