import { Image, StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'


const CustomTextInput = ({value, onChangeText, placeholder, icon, type,keyboardType}) => {
  return (
    <View style={styles.container}>
        <Image source={icon} 
        style={{height:24,width:24}}/>
        <TextInput placeholder={placeholder} 
        style={{marginLeft:5}} 
        secureTextEntry={type?true : false} 
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        />
    
    
     
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    container: {

    alignSelf:"center",
    width:"80%",
    borderRadius:10,
    borderWidth:.5,
    height:45,
    marginTop:30,
    paddingLeft:15,
    paddingRight:15,
    alignItems:"center" ,
    flexDirection:"row"
    }
})