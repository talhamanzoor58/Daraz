import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.txt}>IK BRAND</Text>
      <TouchableOpacity>
        <Text style={styles.txt2}>Mode</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    main:{
        width:"100%",
        height:70,
        justifyContent:"space-between",
        alignItems:'center',
        flexDirection:"row",
        borderWidth:0.2,
        borderBottomColor:"#BeBeBe",
        backgroundColor:"#fff"

    },
    txt:{
        marginLeft:20,
        fontSize:20,
        fontWeight:"600",
         color:"black"

    },
    txt2:{
        marginRight:20,
        justifyContent:"center",

    }

})