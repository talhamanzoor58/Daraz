import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'

import { addItemToCart, removeFromWishlist } from '../../redux/Action'
import CartData from '../Common/CartData'

const WishList = () => {
  const cart=useSelector(state=>state.reducer1)
  const dispatch=useDispatch()
  return (
    <View style={{flex:1,marginBottom:60,marginTop:5}}>
      <FlatList
      data={cart}
      renderItem={({item})=>{
        return(
          <CartData item={item}
           removeWishList={()=>{dispatch(removeFromWishlist(item.name))}}
           isWishList={"xbb"}
           onAdd={()=>{dispatch(addItemToCart(item))}}
           />
        )

      }}
      />
      
    </View>
  )
}

export default WishList

const styles = StyleSheet.create({})