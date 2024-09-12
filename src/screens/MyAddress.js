import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation,useIsFocused} from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { removeAddress } from '../../redux/Action'


const MyAddress = () => {
    const navigation=useNavigation()
    const isFocused=useIsFocused()
    const addressList=useSelector((state)=>state.reducer2)
    const dispatch=useDispatch()
  return (
    <View style={{flex:1}}>
    <View style={styles.header}>
      <Text style={styles.txt}>MyAddress</Text>
      <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate("Add Address")}>
        <Text>Add Address</Text>
      </TouchableOpacity>
    </View>

    <FlatList
    data={addressList}
    renderItem={({item,idex})=>{
        return(
            <View style={styles.main}>
                <View>
                    <Text style={styles.txt1}>City:{item.city}</Text>
                    <Text style={styles.txt1}>Building:{item.building}</Text>
                    <Text style={styles.txt1}>PinCode:{item.pin}</Text>
                    
                </View>
                <TouchableOpacity style={styles.tch} onPress={()=>{dispatch(removeAddress(item))}}>
                        <Text style={{color:"white"}}>Delete</Text>
                    </TouchableOpacity>
            </View>
        )
    }}
    />

    </View>
  )
}

export default MyAddress

const styles = StyleSheet.create(
    {
        header:{
            justifyContent:"space-between",
            alignItems:"center",
            width:"100%",
            height:60,
            flexDirection:'row',
            elevation:1,
            borderBottomColor:"#8e8e8e",
            borderBottomWidth:.3
           
          
          

        },
        txt:{
            marginLeft:15,
            fontWeight:"600",
            fontSize:16
        },
        touch:{
            justifyContent:"center",
            alignItems:"center",
            marginRight:20,
            borderWidth:.3,
            padding:5,
            borderRadius:10
        },
        main:{
            width:"100%",
            justifyContent:"space-between",
            alignSelf:"center",
            alignItems:"center",
            borderWidth:.2,
            borderColor:"#8e8e8e",
            flexDirection:"row"

        },
        txt1:{
            marginLeft:20
        },
        tch:{
            justifyContent:"center",
            borderWidth:0.2,
            borderColor:"#8e8e8e",
            marginRight:20,
            padding:10,
            borderRadius:10,
            backgroundColor:"black"

        }
    })