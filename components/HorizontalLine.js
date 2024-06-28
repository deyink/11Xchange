import React from 'react';
import { View, StyleSheet } from 'react-native';


const HorizontalLine = ({ width = '100%', color = 'gray', thickness = .9, marginVertical =5, }) => {
  return <View style={[styles.line, { width, backgroundColor: color, height: thickness, marginVertical }]} />;
};

const styles = StyleSheet.create({
  line: {
    alignSelf: 'center',
    flexDirection:'column'
  }

});

export default HorizontalLine;