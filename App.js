import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import Homepage from './screens/Homepage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
   <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='SplashScreen' >
    <Stack.Screen 
    name='SplashScreen'
    component={SplashScreen}
     />
     <Stack.Screen 
    name='HomePage'
    component={Homepage}
     />     
   </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
