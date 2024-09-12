import { Image, StyleSheet, Text, View,ScrollView, Alert} from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../Common/CustomButton'
import CustomTextInput from '../Common/CustomTextInput'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Signup = () => {
    const navigation=useNavigation()
    const[name,setName]=useState("")
    const[number,setNumber]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[confirmPassword,setConfirmPassword]=useState("")
    const[nameError,setNameError]=useState(false)
    const[numberError,setNumberError]=useState(false)
    const[emailErorr,setEmailErorr]=useState(false)
    const[passwordError,setPasswordError]=useState(false)
    const[confirmPasswordError,setConfirmPasswordError]=useState(false)
    const[buttonDisabled,setButtonDisabbbled]=useState(false)
    

 
    const buttonHandle=()=>{
        setButtonDisabbbled(true)
        if(!name){
            setNameError(true)
            setButtonDisabbbled(false)
            
        }else{
            setNameError(false)
            if(!email){
                setEmailErorr(true)
                setButtonDisabbbled(false)
               
            }else{
                setEmailErorr(false)
                if(!number){
                    setNumberError(true)
                    setButtonDisabbbled(false)
                    
                }else{
                    setNumberError(false)
                    if(!password){
                        setPasswordError(true)
                        setButtonDisabbbled(false)
                        
                    }else{
                        setPasswordError(false)
                        if(!confirmPassword){
                            setConfirmPasswordError(true)
                            setButtonDisabbbled(false)
                          
                        }else{
                           setConfirmPassword(false)
                           if(password!==confirmPassword){
                            setConfirmPasswordError(true) 
                            setButtonDisabbbled(false) 
                        }else{
                            setConfirmPasswordError(false)
                            saveData()
                        }


                        }

                    }
                }
            }
        }

    }
    const saveData=async()=>{
        
            await AsyncStorage.setItem("name",name)
            await AsyncStorage.setItem("numbber",number)
            await AsyncStorage.setItem("email",email)
            await AsyncStorage.setItem("password",password)
            navigation.goBack()
             
    }


  return (
    <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
    <View>
        <Image source={require("../Images/ImranK.png")} style={styles.Image}/>  
      <Text style={styles.txt}>Create New Account</Text>
      <CustomTextInput 
      placeholder={"Enter Name"} 
      icon={require('../Images/user.png')}
      value={name}
      onChangeText={(text)=>setName(text)}
      />
      {nameError?<Text style={styles.error}>Name required</Text>:null}

      <CustomTextInput 
      placeholder={"Enter Email"} 
      icon={require('../Images/mail.png')}
      value={email}
      onChangeText={(text)=>setEmail(text)}
      />
      {emailErorr?<Text style={styles.error}>Email required</Text>:null}

      <CustomTextInput 
      placeholder={"Enter Phone Number"} 
      icon={require("../Images/phone.png")} 
      keyboardType={"number-pad"}
      value={number}
      onChangeText={(text)=>setNumber(text)}

      />
      {numberError?<Text style={styles.error}>Number required</Text>:null}

      <CustomTextInput 
      placeholder={"Enter Password"}
       icon={require("../Images/lock.png")} 
       type={"password"} 
       value={password}
       onChangeText={(text)=>setPassword(text)}
       />
       {passwordError?<Text style={styles.error}>Password required</Text>:null}

       <CustomTextInput 
       placeholder={"Confirm Password"}
       icon={require("../Images/lock.png")} 
       type={"password"} 
       value={confirmPassword}
       onChangeText={(text)=>setConfirmPassword(text)}
       />
       {confirmPasswordError?<Text style={styles.error}>Confirm Password required</Text>:null}
      
      
      <CustomButton txtColor={"white"} title={"SignUp"} 
      bgColor={buttonDisabled? "#8e8e8e":"#000"} 
      onPress={buttonHandle} 
      disabled={buttonDisabled}/>

      <Text style={styles.txt2}
      onPress={()=>{navigation.goBack()}}
      >Already have accout</Text>
    </View>
    </ScrollView>
  )
}

export default Signup

const styles = StyleSheet.create({
    Image:{
        height:80,
        width:80,
        alignSelf:"center",
        borderRadius:40,
        marginTop:50
    },
    txt:{
        alignSelf:"center",
        marginTop:40,
        color:"black",
        fontWeight:"600",
        fontSize:25

    },
    txt2:{
        alignSelf:"center",
        marginTop:15,
        color:"black",
        fontSize:15,
        fontWeight:"800",
        textDecorationLine:"underline",
        marginBottom:40
    },
    error:{
        color:"red",
        marginLeft:45,
        marginTop:10
    
      }
})