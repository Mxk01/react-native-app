/* touchableopacity is used to reduce or increase opacity upon touch 
   dimensions for window height and width
   import {View,Text,StyleSheet,Dimensions,TouchableOpacity} from 'react-native'
*/
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Lottie  from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'
import {View,Text,StyleSheet,Dimensions,TouchableOpacity, ActivityIndicator} from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import ImageUpload from './ImageUpload'
 const {width,height} = Dimensions.get('window');
 
export default function Home() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    console.log(navigation)
  
    let resetView = () => {
     navigation.push("MultiStep")
    }
 
    
    return (
    // In order to have content that won't be covered by phone UI elements like top menu or phone bottom navigation bar
    // we use SafeAreaView
    <SafeAreaView style={styles.container}>
   {/*  <View style={styles.lottie}>
      Lottie component will be used to play the animation 
     <Lottie  style={{flex: 1}} source={require('../assets/animations/astronaut-reading.json')} autoPlay loop />
     </View>*/} 
     <ImageUpload/>
     <TouchableOpacity onPress={()=>{ resetView() }}
     style={styles.resetButton}>
        <Text>Help Navigation</Text>
     </TouchableOpacity>     
    </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      
    },
    lottie:{
      width: width*0.9,
      height: width
    },
    text: {
      fontSize: 35,
      color:"white",
      marginBottom: 20
    },
    resetButton: {
      backgroundColor: '#34d399',
      padding: 10,
      borderRadius: 10
    },
    finalImage:{
      flex:.5
    }
  })