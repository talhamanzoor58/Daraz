import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import { Products } from '../screens/Products'
import Myproducts from '../Common/Myproducts'

import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, addToWishlist } from '../../redux/Action'
const Main = () => {
  const dispatch=useDispatch()
  const[categoryList,setCategoryList]=useState([])
  const[dressList,setDressList]=useState([])
  const[chapalList,setChapalList]=useState([])
  const[glassesList,setGlassesList]=useState([])

  useEffect(()=>{
    console.log(Products)
    let tempCategory=[]
    Products.category.map(items=>{
      tempCategory.push(items)

    })
   setCategoryList(tempCategory)
   setDressList(Products.category[0].data)
   setChapalList(Products.category[2].data)
   setGlassesList(Products.category[1].data)

  },[])
  const items =useSelector(state=>state.reducer)
  const items1 =useSelector(state=>state.reducer1)
  console.log(items)
  console.log(items1)
  return (
    <ScrollView style={{flex:1,marginBottom:70}}>
    <View style={{flex:1}}>
     <Header/>
     <Image source={require("../Images/Ikbanner.png")} style={styles.imagestyle} />
     <View style={{marginTop:18}}>
      <FlatList
      data={categoryList}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>{
        return(
          <TouchableOpacity style={styles.touch}>
            <Text style={{color:"black"}}>{item.category}</Text>
          </TouchableOpacity>
        )
      }}
      />
     </View>

     <Text style={styles.txt}>Shilwar Qameez</Text>

     <View style={{marginTop:18}}>
      <FlatList
      data={dressList}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>{
        return(
         <Myproducts item={item} 
         onAddToCart={item=>{dispatch(addItemToCart(item)) }}
         addWishList={item=>{dispatch(addToWishlist(item))}}
         />
        )
      }}
      />
     </View>
     
      <Text style={styles.txt}>Captain Chapal</Text>
      
      <View style={{marginTop:18}}>
        <FlatList
        data={chapalList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>{
          return(
           <Myproducts item={item} 
           onAddToCart={item=>{dispatch(addItemToCart(item))}}
           addWishList={item=>{dispatch(addToWishlist(item))}}
           />
          )
        }}
        />
       


      </View>
      
     
    </View>
    </ScrollView>
  )
}

export default Main

const styles = StyleSheet.create({
  imagestyle:{
    width:"95%",
     height:200,
     borderRadius:10,
     alignSelf:"center",
     marginTop:5

  },
  touch:{
    padding:10,
    borderWidth:1,
    marginLeft:5,
    borderRadius:10,
   
  },
  txt:{
    marginLeft:12,
    marginTop:20,
    color:"black",
    fontSize:16,
    fontWeight:"600"
  }
})