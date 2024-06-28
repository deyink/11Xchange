import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font';
import HorizontalLine from '../components/HorizontalLine';










const Homepage = () => {
    const [loaded] = useFonts({Play:require('../assets/fonts/PlaywriteUSTrad-VariableFont_wght.ttf'),});



    if(!loaded) return null


 
  

  return (
    <View style={{backgroundColor:'gray', height:'100%', width:'100%', paddingHorizontal:'.5%' }} >

      <View style={{backgroundColor:'#5072A7', height:'50%', width:'100%', top:'-10%',            borderRadius:60, paddingHorizontal:'2%' }} >

            <Text style={{color:'#fffcf3', marginTop:'35%', marginHorizontal:'auto', fontSize:24, fontFamily:'Play' }} > 11 Xchange  </Text>

            <Text style={{color:'#fffcf3', marginHorizontal:'auto', fontSize:21, }} > Converter</Text>

            <View style={{flexDirection:'row', marginTop:'10%'}} >
            
        
                

            </View>

        </View>

        <View style={{backgroundColor:'white', height:'50%',  width:'90%', padding:'5%',  marginHorizontal:'auto', top:'-16%', borderRadius:20 }} >
            <Text style={{fontSize:13}} >from</Text>
            <HorizontalLine />
            <TextInput style={{height:32, width:'90%', color:'black', borderWidth:.5, borderRadius:10  }} ></TextInput>
        
            <Text style={{fontSize:13}} >To</Text>
            <HorizontalLine />
            <TextInput style={{height:32, width:'90%', color:'black', borderWidth:.5, borderRadius:10  }} ></TextInput>


        </View>

      </View>
    
  )
}


export default Homepage

const styles = StyleSheet.create({
    
})
