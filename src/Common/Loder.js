import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loder = ({modalvisibble,setModalVisible}) => {
  return (
    <Modal 
    transparent={true}
    animationType="slide"
    visible={modalvisibble}
    onRequestClose={()=>{
        setModalVisible(!modalvisibble)
    }}


   >
        <View style={styles.modalContainer}>
            <View style={styles.modalView}>
                <ActivityIndicator size={"large"}/>

            </View>
            </View>
    </Modal>
  )
}

export default Loder

const styles = StyleSheet.create({

    modalContainer:{

        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    modalView:{
        width:100,
        height:100,
        margin:20,
        borderRadius:20,
        backgroundColor:"white",
        padding:35,
        justifyContent:"center",
        alignItems:"center",
        shadowColor:"bblack",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:20
    }
})