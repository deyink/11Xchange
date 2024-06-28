import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const SplashScreen = ({navigation}) => {
    const [loaded] = useFonts({Play:require('../assets/fonts/PlaywriteUSTrad-VariableFont_wght.ttf'),});
    if(!loaded) return null
  return (
    <View style={{backgroundColor:'#5072A7', padding:2, height:'100%', width:'100%'}} >
        <Text style={{color:'black', fontSize:200,marginHorizontal:'auto', marginTop:'35%', }} > 11 </Text>
        <Text style={{ fontSize:35, fontFamily:'Play', backgroundColor:'#5072A7', color:'#fffcf3', width:'100%', top:'-20%', marginHorizontal:'30%'  }} >Xchange</Text>

        <TouchableOpacity onPress={()=>navigation.navigate('HomePage')}  style={{padding:20, backgroundColor:'white', width:'90%', marginHorizontal:'auto', borderRadius:13     }} >
            <Text style={{textAlign:'center', fontSize:16 }} >
                Get Started
            </Text>
        </TouchableOpacity>

        <Text style={{textAlign:'center', color:'white', top:'17%' }} > A Currency Converter App Project, Designed and Implemented By {'\n'}  Fss/comp/com321/GRP11 {'\n'}   ©️ </Text>
      
    </View>
  )
}

export default SplashScreen