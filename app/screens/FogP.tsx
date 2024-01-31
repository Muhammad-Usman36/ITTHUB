import React from "react"
import { ImageStyle, TextStyle, View, ViewStyle,Alert, TouchableOpacity } from "react-native"
import { Text,Button,Icon,TextField} from "app/components"
import { colors, spacing } from "../theme"
import { Formik } from "formik";
import * as yup from "yup";
import { goBack } from "app/navigators";
//<Image style={$welcomeFace} source={welcomeFace} resizeMode="contain" />


const validationSchema = yup.object().shape({
  email: yup.string().min(6).email('Enter a valid email').required('Emil is reaquired'),
});



export const FogP=(props) => {

  const handleSubmit = (values) => {
    console.log(values);
  Alert.alert('Varified');
  props.navigation.navigate("RP")  
};
  return (
    <View style={$container}>
      <View style={$topContainer}>


<TouchableOpacity onPress={()=>goBack('LoginScreen')}>
      <View style={$xicon}>
      <Icon icon="x"  size={21} />    
          </View>
          </TouchableOpacity>


        <Text style={{alignSelf: 'center', fontWeight:"bold",fontSize: 20,marginBottom:10}}>Forgot your Password?</Text>

       <Text style={{alignSelf: 'center'}}>Enter your email address and we will share a link to create a new password </Text>
        
<Formik
        initialValues={{email: ''}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}

      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={{marginTop: 20}}>

            <TextField
             onChangeText={handleChange('email')}
             onBlur={handleBlur('email')}
             value={values.email}
              label="Email  Address"
              placeholder="Enter Email  Adress"
              placeholderTextColor={"black"}
            />
                  {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

        


<Button
style={{marginTop: 20}}
text="Send"
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

const $welcomeLogo: ImageStyle = {
  height: 88,
  width: "100%",
  marginBottom: spacing.lg,
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.md,
}