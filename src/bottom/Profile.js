import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
let name=""
export default function Profile() {
  useEffect(()=>{
    getData()

  })
  const getData=async()=>{
    name=await AsyncStorage.getItem("name")
  }
  const navigation=useNavigation()
  return (
    <View style={{flex:1}}>
    <View style={styles.header}>
      <Text style={styles.txt}>Profile</Text>
      <TouchableOpacity style={styles.touch}>
        <Image source={require("../Images/settings.png")} style={{height:24,width:24}}/>

      </TouchableOpacity>
    </View>
    <Image source={require("../Images/user2.png")} style={{height:80,width:80,alignSelf:'center',marginTop:30}}/>
    <Text style={styles.txt2}>{name}</Text>
    <TouchableOpacity style={styles.touch2} onPress={()=>navigation.navigate("My Address")} >
      <Text>My Address</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.touch2} >
      <Text>My Orders</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.touch2} >
      <Text>Offers</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    width:'100%',
    height:60,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    elevation:1,
    borderBottomColor:"#8e8e8e",
    borderBottomWidth:.1
  },
  txt:{
    fontWeight:"600",
    marginLeft:15,
    fontSize:16

  },
  touch:{
    justifyContent:"center",
    alignItems:"center",
    width:30,
    height:30,
    marginRight:20
  },
  txt2:{
    fontSize:16,
    alignSelf:"center",
    marginTop:14,
    fontWeight:'600'
  },
  touch2:{
    height:30,
    width:"88%",
    alignSelf:"center",
    borderBottomWidth:.3,
    marginTop:25,
    borderBottomColor:"#8e8e8e"}
})