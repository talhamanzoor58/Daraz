import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({title,bgColor,onPress,txtColor,disabled}) => {
  return (
    <TouchableOpacity
    disabled={disabled}
    style={{  
            backgroundColor:bgColor,
            justifyContent:"center",
            alignItems:"center",
            height:45,
            width:"80%",
            alignSelf:"center",
            marginTop:40,
            borderRadius:10
         }}
         onPress={()=>onPress()}
    >
        <Text style={{color:txtColor}}>{title}</Text>
        </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    
})