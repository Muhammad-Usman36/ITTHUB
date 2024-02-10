import React from "react"
import { Image, View,TouchableOpacity, ViewStyle,Alert } from "react-native"
import { Text,Button,Icon,TextField} from "app/components"
import {CommonActions, goBack,NavigationActions } from "../navigators"
import { colors, spacing } from "../theme"
import {  } from "../utils/useSafeAreaInsetsStyle"
import { Login } from "./Login"
//<Image style={$welcomeFace} source={welcomeFace} resizeMode="contain" />







export const PRS=(props:any)=> {

  const handleSubmit = (values) => {
    console.log(values);
  Alert.alert('System is not created yet');
  props.navigation.navigate("Login", { screen: "Login", params: {} });

  };
  return (
    <View style={$container}>
      <View style={$topContainer}>
        
      <Button
        text="Reset navigation state"
        onPress={() =>navigation
          .dispatch(NavigationActions.reset(
            {
               index: 0,
               actions: [
                 NavigationActions.navigate({ routeName: 'Login'})
               ]
             }))
        }
      />


      <TouchableOpacity onPress={()=>goBack('Login')}>
      <View style={$xicon}>
      <Icon icon="x"  size={21} />    
          </View>
          </TouchableOpacity>


        <Text style={{alignSelf: 'center', fontWeight:"bold",fontSize: 20,marginBottom:10}}>Password reset successfull</Text>

       <Text style={{alignSelf: 'center'}}>You can now login with your new password.</Text>
        
       <Button
style={{marginTop: 30}}
text="Proceed"
        onPress={handleSubmit}
      />
      </View>
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}
const $xicon: ViewStyle = {
  alignItems:'center',
  justifyContent: 'center',
 color: colors.text,
 backgroundColor: '#DCDDE9',
 borderRadius:20,
 height:30,
 width:30,
  marginLeft: 290,
 marginBottom: 50,
}
const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}