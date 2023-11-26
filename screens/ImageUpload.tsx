import React, { useState } from 'react'
import { StyleSheet,Image,View,ActivityIndicator} from 'react-native'
import {ImageLibraryOptions, ImagePickerResponse, MediaType, launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Button from '../components/Button'
import { SafeAreaView } from 'react-native-safe-area-context';
function ImageUpload() {
  let [isLoading,setIsLoading] = useState<boolean>(false);
 

  const [image,setImage] = useState<string |undefined>("https://avatars2.githubusercontent.com/u/61979889?s=400&v=4")
  const handleImageSelection = async () => {
    setIsLoading(true);
    try {
      let options:ImageLibraryOptions = {
        mediaType:"mixed",
        quality:1,
 
      }
      launchImageLibrary(options,(response:ImagePickerResponse)=>{
        if (response.assets && response.assets.length > 0) {
          setImage(response?.assets?.[0]?.uri ?? 'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg');
        } else {
          console.log('No assets selected or response.assets is undefined.');
        }
      })
    }
    catch(e)
    {
    console.log(e)
    }
    finally {
      // stops loading after try or catch block finishes
      setIsLoading(false);
    }
  }
  return (
    <SafeAreaView style={{flex:.7}}>
      <Image  style={styles.image} source={{uri:image ? image : 'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg'}}/>
      { isLoading ?    <ActivityIndicator color="green"/> : ''}
     <View style={{flex:.8}}>

     </View>
    <Button title="Select Image .. "
    onPress={handleImageSelection}></Button> 
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',  
    height: undefined,  
    aspectRatio: 1, 
    marginBottom: 4,
    borderRadius: 7,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0
  },
 
})

export default ImageUpload