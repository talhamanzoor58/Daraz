import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Splash from './screens/Splash'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Home from './screens/Home'
import MyAddress from './screens/MyAddress'
import AddAddress from './screens/AddAddress'
import PaymentScreen from './screens/PaymentScreen'
const Stack=createStackNavigator()

const AppNavigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='My Address' component={MyAddress} options={{headerShown:false}}/>
        <Stack.Screen name="Add Address" component={AddAddress} options={{headerShown:false}} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={{headerShown:false}} />
          

    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})