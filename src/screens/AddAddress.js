import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import CustomTextInput from '../Common/CustomTextInput'
import CustomButton from '../Common/CustomButton'
import { useDispatch } from 'react-redux'
import { addAddress } from '../../redux/Action'

const AddAddress = () => {
    const navigation=useNavigation()
    const[city,setCity]=useState("")
    const[building,setBuilding]=useState("")
    const[pin,setPin]=useState("")
    const dispatch=useDispatch()
  return (
    <View style={{flex:1}}>
        <View style={styles.header}>
      <TouchableOpacity style={styles.touch} onPress={()=>navigation.goBack()}>
        <Image source={require("../Images/back.png")} style={{height:22,width:22}}/>

      </TouchableOpacity>
      </View>
      <CustomTextInput
      placeholder={"Enter Your City Name"}
      value={city}
      icon={require("../Images/village.png")}
      onChangeText={(text)=>setCity(text)}
      />
      <CustomTextInput
      placeholder={"Enter Your Building Name"}
      value={building}
      icon={require("../Images/building.png")}
      onChangeText={(text)=>setBuilding(text)}
      />
      <CustomTextInput
      placeholder={"Enter Your City Code"}
      value={pin}
      icon={require("../Images/pin.png")}
      keyboardType={'number-pad'}
      onChangeText={(text)=>setPin(text)}
      />

      <CustomButton
      title={"Save Address"}
      bgColor={"black"}
      txtColor={"white"}
      onPress={()=>{
        if(city!="" && building!="" && pin!=""){
            dispatch(addAddress({city:city,building:building,pin:pin}))
        }
        navigation.goBack()
      }}
      />
    </View>
  )
}

export default AddAddress

const styles = StyleSheet.create({

    header:{
        height:60,
        width:"100%",
        alignItems:"center",
        backgroundColor:"#f2f2f2",
        borderBottomWidth:.3,
        flexDirection:'row',
        elevation:1,
        borderBottomColor:"#8e8e8e"

    },
    touch:{
        justifyContent:"center",
        alignItems:"center",
        marginLeft:20,
        borderWidth:.3,
        borderRadius:10,
        padding:5
    }
})