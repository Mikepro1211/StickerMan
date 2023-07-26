import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View ,Text, Image} from 'react-native';
//libreria para poder tener accesso a las imagenes
import ImageViewer from './Components/ImageViewer'
import Button from './Components/Button';
import * as ImagePicker from 'expo-image-picker'
import { Alert } from 'react-native';
import { useState } from 'react';
const PlaceholderImage = require('./assets/nvidia.jpg');


export default function App() {
  //selected modal or emoji
   const [showAppOptions, setShowAppOptions]= useState(false);
  //selected image
  const [selectedImage, setSelectedImage]= useState(null);
  const pickImageAsync = async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
     allowsEditing: true,
     quality: 1,
    })
    if(!result.canceled){
     setSelectedImage(result.assets[0].uri)
     //set true when the user select de image
     setShowAppOptions(true)
    }else {
     Alert.alert('you di not select any image')
    }
  }
  return (
    
    <View style={styles.container}>
      <View style={styles.imageContainer}>
       <ImageViewer placeholderImageSource={PlaceholderImage}
       selectedImage={selectedImage}
       />
      </View>
      <View style={styles.footerContainer}>
        <Button theme= "primary" label= "Choose a photo" onPress={pickImageAsync}/>
        <Button label="Use this photo"/>
      </View>
      <StatusBar style="auto" />
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
   
  },
   imageContainer:{
    flex: 1,
    paddingTop: 58
   },
   image:{
      width: 320,
      height: 440,
      borderRadius: 18,
   },
   footerContainer:{
    flex: 1/ 2,
    alignItems:'center',
   }
});
