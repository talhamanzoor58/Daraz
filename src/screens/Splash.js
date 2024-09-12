import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = () => {
    const navigation=useNavigation()
    useEffect(()=>{
        setTimeout(()=>{
           getData()

        },3000)

    },[])
    const getData=async()=>{
      const email=  await AsyncStorage.getItem("email")
      if(email!==null ){
        navigation.navigate("Login")
      }else{
        navigation.navigate("Login")
      }
    }
  return (
    <View style={styles.main} >
      <Image source={require('../Images/ImranK.png')} style={styles.image}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        height:200,
        width:200,
        borderRadius:100,
        resizeMode:"cover"

    }
})