import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font';
import HorizontalLine from '../components/HorizontalLine';
import { Dropdown } from 'react-native-element-dropdown';



const Homepage = () => {
    const [dropdown, setDropdown] = useState(null);
    const [selectedFro, setSelectedFro] = useState([]);
    const [selectedTo, setSelectedTo] = useState([]);
    const [selected, setSelected] = useState();
    const [from, setFrom] = useState()
    const [to, setTo] = useState()
    const [loaded] = useFonts({Play:require('../assets/fonts/PlaywriteUSTrad-VariableFont_wght.ttf'),});
    
    if(!loaded) return null;

    
    const data = [
      {label: 'KPR', value: '1'},
      {label: 'YNG', value: '2'},
      {label: 'NGN', value: '3'},
      {label: 'USD', value: '4'}
    ]

    
const flip = ()=>{
  temp = from
  setFrom(to);
  setTo(temp)
  console.log('flipped')
}
 
  //   const _renderItem = item => {
  //     return (
  //     <View style={styles.item}>
  //         <Text style={styles.textItem}>{item.label}</Text>
  //         {/* <Image style={styles.icon} > {item.uri} </Image> */}
  //     </View>
  //     );
  // };
  

  return (
    <View style={{backgroundColor:'gray', height:'100%', width:'100%', paddingHorizontal:'.5%' }} >

      <View style={{backgroundColor:'#5072A7', height:'50%', width:'100%', top:'-10%',            borderRadius:60, paddingHorizontal:'2%' }} >

            <Text style={{color:'#fffcf3', marginTop:'35%', marginHorizontal:'auto', fontSize:24, fontFamily:'Play' }} > 11 Xchange  </Text>

            <Text style={{color:'#fffcf3', marginHorizontal:'auto', fontSize:21, }} > Converter</Text>

            <View style={{flexDirection:'row', marginTop:'10%', justifyContent:'space-evenly'}} >

       
                <Dropdown
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    data={data}
                    // search
                    // searchPlaceholder="Search"
                    labelField="label"
                    valueField="value"
                    label="Dropdown"
                    placeholder={'Currency'}
                    value={dropdown}
                    onChange={item => {
                    setDropdown(item.label);
                        console.log('selected', item);
                        setSelectedFro(item.label)
                    }}
                    // renderLeftIcon={() => (
                    //     <Image style={styles.icon} source={require('./assets/account.png')} />
                    // )}
                    // renderItem={item => _renderItem(item)}
                    // textError="Error"
                />
                
                <TouchableOpacity onPress={()=>flip()}  >
                <Image  source={require('../assets/icons/swap.png')} />
                </TouchableOpacity>

              
              <Dropdown
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    data={data}
                    // search
                    // searchPlaceholder="Search"
                    labelField="label"
                    valueField="value"
                    label="Dropdown"
                    placeholder={'Currency'}
                    value={dropdown}
                    onChange={item => {
                    setDropdown(item.label);
                        console.log('selected', item);
                        setSelectedTo(item.label)
                    }}
                    // renderLeftIcon={() => (
                    //     <Image style={styles.icon} source={require('./assets/account.png')} />
                    // )}
                    // renderItem={item => _renderItem(item)}
                    // textError="Error"
                />
      
            </View>

        </View>

        <View style={{backgroundColor:'white', height:'50%',  width:'90%', padding:'5%',  marginHorizontal:'auto', top:'-16%', borderRadius:20 }} >
            <Text style={{fontSize:13}} >from</Text>
            <HorizontalLine />
            <Text> {selectedFro} </Text>
            <TextInput style={{height:35, width:'99%', color:'black', borderWidth:.5, borderRadius:10, placeholder:'Enter Amount',   }} ></TextInput>
        
            <Text style={{fontSize:13, marginTop:'10%'}} >To</Text>
            <HorizontalLine />
            <Text> {selectedTo} </Text>
           
            <TextInput style={{height:32, width:'99%', color:'black', borderWidth:.5, borderRadius:10  }} ></TextInput>


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
    
}
})
