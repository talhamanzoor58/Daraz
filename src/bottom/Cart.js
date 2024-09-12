import { FlatList, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartData from '../Common/CartData'
import { addToWishlist, removeFromCart } from '../../redux/Action'
import CustomButton from '../Common/CustomButton'
import RazorpayCheckout from 'react-native-razorpay';
import { useNavigation } from '@react-navigation/native'


//cart
const Cart = () => {
  const cart=useSelector((state)=>state.reducer)
  const dispatch=useDispatch()
  const navigation=useNavigation()
  
  return (
    
    <View style={{flex:1,marginBottom:60,marginTop:5}}>
      {cart.length>0?(
         <FlatList data={cart} 
         renderItem={({item})=>{
           return(
             <CartData item={item} onRemove={()=>{
               dispatch(removeFromCart(item.name))
                
             }
   
             }
             
             addWishList={()=>{dispatch(addToWishlist(item))}}
             />
           )
         }}
         />
      ):(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <Text>No Items Found</Text>

        </View>
      )}

      {
        cart.length>0?(
          <View style={{marginBottom:50}}>
          <CustomButton
          title="Checkout"
          bgColor={"black"}
          txtColor={"white"}
          onPress={()=>{
            navigation.navigate("Payment")

          }}

          

          />
          </View>
        ):null
      }
     
    </View>
    
  )
}

export default Cart

const styles = StyleSheet.create({})