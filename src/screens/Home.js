import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Main from '../bottom/Main'
import Search from '../bottom/Search'
import Cart from '../bottom/Cart'
import WishList from '../bottom/WishList'
import Profile from '../bottom/Profile'
import { useSelector } from 'react-redux'

const Home = () => {
  const[selectedTab,setSelectedTab]=useState(0)
  const[count,setCount]=useState(0)
  const[count1,setCount1]=useState(0)
  const cart=useSelector((state)=>state.reducer)
  const wish=useSelector((state)=>state.reducer1)
  

  useEffect(()=>{
    setCount(cart.length)
   
  })
  useEffect(()=>{
    setCount1(wish.length)

  })
 

   
  return (
    <View style={{flex:1}}>
      {selectedTab==0?(<Main/>):selectedTab==1?(<Search/>):selectedTab==2?(<Cart/>):selectedTab==3?(<WishList/>):(<Profile/>)}
    <View style={styles.bView}>
      <TouchableOpacity style={styles.touch} onPress={()=>setSelectedTab(0)}>
        <Image source={require("../Images/home.png")} 
        style={{
          height:selectedTab==0?30:28,
          width:selectedTab==0?30:28,
          tintColor:selectedTab==0 ? "black":"#BeBeBe",
          marginLeft:20
          }}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touch} onPress={()=>setSelectedTab(1)}>
        <Image source={require("../Images/loupe.png")} 
        style={{
          height:selectedTab==1?30:28,
          width:selectedTab==1?30:28,
          tintColor:selectedTab==1 ? "black":"#BeBeBe",
          marginLeft:20
          }}/>
      </TouchableOpacity>

       <View style={{height:"100%",width:"20%",
        justifyContent:"center",
        alignItems:"center"
       }}>
      <TouchableOpacity style={{
        height:selectedTab==2?46:44,
        width: selectedTab==2?46:44,
        backgroundColor:selectedTab==2?"#000720":"black",
        borderRadius:selectedTab==2?23:22,
        justifyContent:"center",
        alignItems:'center'
        

      }}
      onPress={()=>setSelectedTab(2)}
      >
        
        <Image source={require("../Images/bag.png")} style={{ 
           height:selectedTab==2?30:28,
           width:selectedTab==2?30:28,
          tintColor:'white'
          }}/>
          <View style={styles.countView}>
            <Text style={{color:"white",fontWeight:'600',textAlign:"center",fontSize:12}}>{count}</Text>
          </View>
          
        
      </TouchableOpacity>
      
      </View>

      <TouchableOpacity style={styles.touch} onPress={()=>setSelectedTab(3)}>
        <Image source={require("../Images/heart.png")} 
        style={{
          height:selectedTab==3?30:28,
          width:selectedTab==3?30:28,
          tintColor:selectedTab==3 ? "black":"#BeBeBe",
          marginLeft:20
        }}  
        />
        <View style={styles.wishCount}>
          <Text style={{color:"white",fontWeight:"600",textAlign:'center',fontSize:12}}>{count1}</Text>

        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touch} onPress={()=>setSelectedTab(4)}>
        <Image source={require("../Images/user.png")} 
        style={{
          height:selectedTab==4? 30:28,
          width:selectedTab==4? 30:28,
          marginLeft:20,
          tintColor:selectedTab==4 ? "black":"#BeBeBe"
          }}
          />
      </TouchableOpacity>
    </View>
    
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    bView:{
      width:"100%",
      height:60,
      position:'absolute',
      bottom:0,
      backgroundColor:"#fff",
      flexDirection:"row",
      alignItems:"center"
    },
    touch:{
      justifyContent:"center",
      alignItems1:"center",
      height:"100%",
      width:"20%"
    },
    countView:{
      backgroundColor:"red",
      height:18,
      width:18,
      borderRadius:9,
      justifyContent:"center",
      alignItems:'center',
      position:"absolute",
      top:5,
      right:5,

    },
    wishCount:{
      height:16,
      width:16,
      borderRadius:8,
      backgroundColor:"red",
      top:15,
      right:20,
      position:'absolute',
      justifyContent:'center',
      alignItems:'center'

    }
})