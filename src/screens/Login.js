import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../Common/CustomTextInput'
import CustomButton from '../Common/CustomButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loder from '../Common/Loder'

const Login = () => {
  const navigation=useNavigation()
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[emailErorr,setEmailErorr]=useState(false)
  const[passwordErorr,setPasswordError]=useState(false)
  const[modalvisibble,setModalVisible]=useState(false)



const Loginn=()=>{
  setModalVisible(true)
  if(!email){
    setEmailErorr(true)
    setModalVisible(false)

  }else{
    setEmailErorr(false)
    if(!password){
      setPasswordError(true)
      setModalVisible(false)
    }else{
      setTimeout(()=>{
        setPasswordError(false)
        getData()
      },3000)
    }
  }
}

const getData=async()=>{
  const mEmail=await AsyncStorage.getItem("email")
  const mPassword= await AsyncStorage.getItem("password")
  if(email=== mEmail && mPassword===password){
    navigation.navigate("Home")
    setModalVisible(false)

  }else{
   setModalVisible(false)
   Alert.alert("Error here")
  }

}
 
  return (
    <View style={{flex:1}}>
      <Image source={require("../Images/ImranK.png")} style={styles.image} />
      <Text style={styles.txt}>Login</Text>

      <CustomTextInput 
      icon={require('../Images/mail.png')} 
      placeholder={"Enter Email"}
      value={email}
      onChangeText={(text)=>setEmail(text)}
      />
      {emailErorr ? <Text style={styles.error}>Email is required</Text>:null}

      <CustomTextInput 
      icon={require('../Images/lock.png')} 
      placeholder={"Enter Password"} 
      type={"password"}
      value={password}
      onChangeText={(text)=>setPassword(text)}
      />
      { passwordErorr?<Text style={styles.error}>Password is required</Text>:null}
    
      <CustomButton  
      title={"Login"} 
      bgColor={"black"} 
      txtColor={"white"} 
      onPress={()=>{Loginn()}}
      />

      <Text style={styles.txt2} onPress={()=>{navigation.navigate("Signup")}}>Create New Account?</Text>
      <Loder modalvisibble={modalvisibble} setModalVisible={setModalVisible}/>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  image:{
    height:80,
    width:80,
    alignSelf:"center",
    borderRadius:40,
    marginTop:100
  },
  txt:{
    alignSelf:"center",
    color:"black",
    marginTop:50,
    fontSize:30,
    fontWeight:"bold"
  },
  txt2:{
    alignSelf:"center",
    color:"black",
    marginTop:20,
    fontWeight:"800",
    fontSize:15,
    textDecorationLine:"underline"

  },
  error:{
    color:"red",
    marginLeft:45,
    marginTop:10

  }

  

})