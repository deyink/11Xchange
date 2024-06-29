import { View, Text, TouchableOpacity, Alert, BackHandler, ToastAndroid  } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const SplashScreen = ({navigation}) => {
    const [loadedP] = useFonts({Play:require('../assets/fonts/PlaywriteUSTrad-VariableFont_wght.ttf'),});
    const [loadedS] = useFonts({Sans:require('../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),});

  return (
    <View style={{backgroundColor:'#5072A7', padding:2, height:'100%', width:'100%'}} >
        <Text style={{color:'black', fontSize:210,marginHorizontal:'auto', marginTop:'28%', fontFamily:'Play' }} > 11 </Text>
        <Text style={{ fontSize:34, fontFamily:'Play', backgroundColor:'#5072A7', color:'#fffcf3', width:'100%', top:'-32%', marginHorizontal:'30%'  }} >Xchanger</Text>

        <TouchableOpacity onPress={()=>{
                navigation.navigate('SplashScreen1')
              
        }}
      style={{padding:20, backgroundColor:'white', width:'90%', marginHorizontal:'auto', borderRadius:13, top:'1%'    }} >
            <Text style={{textAlign:'center', fontSize:16, fontFamily:'Sans' }} >
                Get Started
            </Text>
        </TouchableOpacity>

        {/* <Text style={{textAlign:'center', color:'white', top:'2%', }} > A Currency Converter App Project, Designed and Implemented By {'\n'}  Fss/comp/com321/GRP11 {'\n'}   ©️ </Text> */}
      
    </View>
  )
}

export default SplashScreen