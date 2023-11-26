import React from 'react'
import { Text, TouchableOpacityProps,TouchableOpacity, StyleSheet } from 'react-native'

// so basically this means add title property to TouchableOpacityProps 
type ButtonProps = TouchableOpacityProps & { title:string }
// then Button can receive as props the title and other properties TouchableOpacity has through ...rest
function Button({title,...rest}:ButtonProps) {
  return (
   <TouchableOpacity style = {styles.container} {...rest}>
    <Text style={styles.title}>
      {title}  
    </Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
      height:35,
       width:"100%",
      backgroundColor:"#5F1BBF",
      borderRadius:7,
      display:'flex',
      justifyContent:"center",
      alignItems:"center",
      padding:2,
      marginBottom:5,
      marginLeft:150
    },
   
    title: {
      color:"#FFF",
      fontSize:16
    }
})
export default Button