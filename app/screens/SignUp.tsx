import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle,TouchableOpacity, View, ViewStyle,Alert } from "react-native"
import { Text,Button,Icon,TextField} from "app/components"
import { isRTL } from "../i18n"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { Formik } from "formik";
import * as yup from "yup";
//<Image style={$welcomeFace} source={welcomeFace} resizeMode="contain" />


const validationSchema = yup.object().shape({
  name: yup.string().required('your name please'),
  email: yup.string().min(6).email('Enter a valid email').required('Emil is reaquired'),
  pasward: yup.string().min(6).required('Pasward is reaquired'),
});


const welcomeLogo = require("../../assets/images/Jlogo.png")


export const SingUp=(props:any)=> {
  

  const handleSubmit = (values) => {
    console.log(values);
  Alert.alert('data submit');
  props.navigation.navigate("Login", { screen: "Login", params: {} });
};
  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Image style={$welcomeLogo} source={welcomeLogo} tintColor={colors.theam} resizeMode="contain" />

       
        
<Formik
        initialValues={{email: '',name: '',pasward: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <TextField
             onChangeText={handleChange('name')}
             onBlur={handleBlur('name')}
             value={values.name}
              placeholder="Name"
              label="Name"
              placeholderTextColor={"black"}
            />
            {errors.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}

            <TextField
             onChangeText={handleChange('email')}
             onBlur={handleBlur('email')}
             value={values.email}
              label="Email _ Address"
              LeftAccessory={(props) => <Icon icon="menu" containerStyle={props.style} size={21} />}
              placeholder="Email  Adress"
              placeholderTextColor={"black"}
            />
                  {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

        
          

            <TextField
             onChangeText={handleChange('pasward')}
             onBlur={handleBlur('pasward')}
             value={values.pasward}
              label="Passward"
              secureTextEntry={true}
              RightAccessory={(props) => <Icon icon="hidden" containerStyle={props.style} size={21} />}
              LeftAccessory={(props) => <Icon icon="lock" containerStyle={props.style} size={21} />}
              placeholder="Passward"
              placeholderTextColor={"black"}
            />
            {errors.pasward && <Text style={{ color: 'red' }}>{errors.pasward}</Text>}



            <TextField
              label="Conferm _ Passward"
              secureTextEntry={true}
              RightAccessory={(props) => <Icon icon="hidden" containerStyle={props.style} size={21} />}
              LeftAccessory={(props) => <Icon icon="lock" containerStyle={props.style} size={21} />}
              placeholder='Conferm _ Passward'
              placeholderTextColor={"black"}
            />

<Button
style={{marginTop: 30}}
text="SING UP"
        onPress={handleSubmit}
      />
        </View>
        )}
      </Formik>

      <View style={{flexDirection: 'row',marginHorizontal: 30,marginTop: 20}}>
      <Text>Have an account already?   </Text>
      <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
<Text style={{  fontWeight:'bold',color: colors.palette.secondary500,}}>Log in</Text>
</TouchableOpacity>
      </View>
              
       
      </View>

     
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $welcomeLogo: ImageStyle = {
  height: 160,
  width: "100%",
  marginBottom: spacing.lg,
}