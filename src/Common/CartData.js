import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const CartData = ({item,onRemove,removeWishList,isWishList,onAdd,addWishList}) => {
  return (
    <View style={styles.main}>
        <Image source={item.image} style={styles.imagestyle}/>
        <Text style={styles.text}>{item.name}</Text>

        <View style={styles.p}>
            <Text style={styles.rupee}>Rs:{item.price}</Text>
            {isWishList?(
                <TouchableOpacity style={styles.touch} onPress={()=>onAdd(item)}>
                <Text style={styles.tchtxt}>add_to_cart</Text>
            </TouchableOpacity>

            ):(
                <TouchableOpacity style={styles.touch} onPress={()=>onRemove()}>
                <Text style={styles.tchtxt}>remove</Text>
            </TouchableOpacity>
            )}
            
        </View>
        {
            isWishList?(
                <TouchableOpacity style={styles.touch2} onPress={()=>removeWishList()}>
                <Image source={require("../Images/like.png")} style={{height:28,width:28, tintColor:"red"}}/>
            </TouchableOpacity>

            ):(
                <TouchableOpacity style={styles.touch2} onPress={()=>addWishList(item)}>
                <Image source={require("../Images/heart.png")} style={{height:24,width:24}}/>
               </TouchableOpacity>
            )
        }
    
    
      
    </View>
  )
}

export default CartData

const styles = StyleSheet.create({
    main:{
        height:200,
        width:"90%",
        borderRadius:15,
        elevation:5,
        backgroundColor:"#fff",
        marginLeft:20,
        marginBottom:10
    },
    imagestyle:{
        height:"50%",
        width:"100%",
        borderTopRightRadius:15,
        borderTopLeftRadius:15
        
    },
    text:{
        marginLeft:10,
        marginTop:10,
        fontSize:16,
        fontWeight:"600"
    },
    p:{
        justifyContent:"space-between",
        paddingLeft:10,
        paddingRight:10,
        flexDirection:"row",
        marginTop:8,
        alignItems:"center"
    },
    rupee:{
        fontSize:16,
        fontWeight:"600",
        
    },
    touch:{
        borderWidth:1,
        borderRadius:10,
        paddingRight:10,
        paddingLeft:10,
        paddingBottom:7,
        paddingTop:7,
        backgroundColor:"black"  
    },
    tchtxt:{
        marginRight:5,
        color:"white"
    },
    touch2:{
        width:38,
        height:38,
        borderRadius:19,
        backgroundColor:"white",
        position:"absolute",
        top:7,
        right:7,
        elevation:10,
        alignItems:"center",
        justifyContent:"center"
    }
})