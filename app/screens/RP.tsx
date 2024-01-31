import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle,Alert, TouchableOpacity } from "react-native"
import { Text,Button,Icon,TextField} from "app/components"
import { isRTL } from "../i18n"
import { AppStackScreenProps, goBack } from "../navigators"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { Formik } from "formik";
import * as yup from "yup";
//<Image style={$welcomeFace} source={welcomeFace} resizeMode="contain" />


const validationSchema = yup.object().shape({
  passward: yup.string().min(6),
});



export const RP=(props)=>{

  const handleSubmit = (values) => {
    console.log(values);
  Alert.alert('data submit');
  props.navigation.navigate("PRS")  

};
  return (
    <View style={$container}>
      <View style={$topContainer}>

<TouchableOpacity onPress={()=>goBack('FogP')}>
      <Icon icon="caretLeft" size={30} />
      </TouchableOpacity>


        <Text style={{alignSelf: 'center', fontWeight:"bold",fontSize: 20,marginBottom:10}}>Reset Password</Text>

        
<Formik
        initialValues={{passward: ''}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={{marginTop: 20}}>

            <TextField
            secureTextEntry={true}
             onChangeText={handleChange('passward')}
             onBlur={handleBlur('passward')}
             value={values.passward}
              label="New Passward"
              placeholder="Enter new Passward"
              placeholderTextColor={"black"}
            />
                  {errors.passward && <Text style={{ color: 'red' }}>{errors.passward}</Text>}



                  <TextField
              secureTextEntry={true}
             onChangeText={handleChange('passward')}
             onBlur={handleBlur('passward')}
             value={values.passward}
              label="Conferm New Passward"
              placeholder="Enter new Passward"
              placeholderTextColor={"black"}
            />
                  {errors.passward && <Text style={{ color: 'red' }}>{errors.passward}</Text>}

        


<Button
style={{marginTop: 360}}
text="SUBMIT"
        onPress={handleSubmit}
      />
        </View>



        )}
      </Formik>



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
  height: 88,
  width: "100%",
  marginBottom: spacing.lg,
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.md,
}