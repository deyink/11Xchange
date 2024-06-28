import React from 'react';
import { View, StyleSheet } from 'react-native';


const HorizontalLine = ({ width = '100%', color = 'gray', thickness = .5, marginVertical = 5, marginHorizontal='auto' }) => {
  return <View style={[styles.line, { width, backgroundColor: color, height: thickness, marginVertical, marginHorizontal }]} />;
};

const styles = StyleSheet.create({
  line: {
    alignSelf: 'center',
    flexDirection:'column'
  }

});

export default HorizontalLine;