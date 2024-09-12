import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  {SP_KEY} from "@env"
import { StripeProvider } from '@stripe/stripe-react-native';
import PaymenUI from './PaymenUI';

const PaymentScreen = () => {
 
  return (
    <View>
      <SafeAreaView style={{flex:1}}>
      <StripeProvider
      publishableKey={SP_KEY}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
        >
    
      </StripeProvider>
      </SafeAreaView>
      
    
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({})