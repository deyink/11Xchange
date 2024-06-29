import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font';
import HorizontalLine from '../components/HorizontalLine';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';



const Homepage = () => {
    const [info, setInfo] = useState(0); // exchange rate
    const [currencies, setCurrencies] = useState({}); //Currency
    const [input, setInput] =useState(0);       //Amount
    const [output, setOutput] = useState(0);      //
    // const [selectedFro, setSelectedFro] = useState([]);
    // const [selectedTo, setSelectedTo] = useState([]);
    // const [selected, setSelected] = useState();
    const [from, setFrom] = useState('USD')
    const [to, setTo] = useState('NGN')
    const [loaded] = useFonts({Play:require('../assets/fonts/PlaywriteUSTrad-VariableFont_wght.ttf'),});
    
    if(!loaded) return null;

    const convert = ()=>{
      let result = (input * info).toFixed(2);
      setOutput(result);
    }
 

    useEffect(() => {
      axios.get('https://v6.exchangerate-api.com/v6/3429a6d8dbf9af491e66dbff/latest/USD')
        .then(response => {
          setCurrencies(response.data.conversion_rates);
          setInfo(response.data.conversion_rates[to])
          
        })
        .catch(error => {
          console.error('Error fetching the currency data:', error);
          
        });
    }, []);  


  return (
    <View style={{backgroundColor:'gray', height:'100%', width:'100%', paddingHorizontal:'.5%' }} >

      <View style={{backgroundColor:'#5072A7', height:'50%', width:'100%', top:'-10%',            borderRadius:60, paddingHorizontal:'2%' }} >

            <Text style={{color:'#fffcf3', marginTop:'35%', marginHorizontal:'auto', fontSize:24, fontFamily:'Play' }} > 11 Xchange  </Text>

            <Text style={{color:'#fffcf3', marginHorizontal:'auto', fontSize:21, }} > Converter</Text>

            <View style={{flexDirection:'row', marginTop:'10%', flexDirection:'row', alignItems:'center', justifyContent:'center',  justifyContent:'space-evenly'}} >

            <Picker style={styles.picker}
          selectedValue={from}
          onValueChange={(itemValue) => setFrom(itemValue)}>
            {Object.keys(currencies).map((currency) =>
            (<Picker.Item key={currency} label={currency} value={currency} /> ))}
    

        </Picker>
        <Picker style={styles.picker}
          selectedValue={to}
          onValueChange={(itemValue, ) => setTo(itemValue)}>
            {Object.keys(currencies).map((currency)=>(
              <Picker.Item key={currency} label={currency} value={currency} />
            ))}

        </Picker>

       

              
        
      
            </View>

        </View>

        <View style={{backgroundColor:'white', height:'40%', width:'90%', padding:'5%',  marginHorizontal:'auto', top:'-16%', borderRadius:20 }} >
    

            {/* <Text style={{fontSize:13}} >from</Text>
            <HorizontalLine /> */}
            {/* <Text> {selectedFro} </Text> */}
            <TextInput keyboardType='numeric' onChange={(e)=>setInput(e.nativeEvent.text)} style={{height:35, width:'99%', color:'black', borderWidth:.5, borderRadius:10, placeholder:'Enter Amount', height:'20%', paddingHorizontal:10, fontSize:20, marginTop:'10%'  }} ></TextInput>

            
       

          <TouchableOpacity onPress={()=>convert()} style={{padding:20, marginTop:'10%', backgroundColor:'blue' }} >
            <Text style={{textAlign:'center'}} > CONVERT </Text>
          </TouchableOpacity>


          <Text style={{bottom:'-25%', textAlign:'right'}} > {input} =  {output} {to}  </Text>
        </View>


      </View>
    
  )
}


export default Homepage

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: '#fffcf3',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    height:'44%',
    width:'40%',
    borderRadius:20,
    paddingHorizontal:20
},
icon: {
    marginRight: 5,
    width: 18,
    height: 18,
},
item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
textItem: {
    flex: 1,
    fontSize: 16,
    
},
picker:{
  height:50,
  marginHorizontal:10,
  flex: 1,
  backgroundColor:'#fffcf3',
  borderRadius:200
  
}
})
