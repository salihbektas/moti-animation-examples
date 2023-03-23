import { MotiView } from 'moti';
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


function FadeIn() {

  return (
    <View style={ styles.main }>
      <Text>Fade in</Text>
    
      <MotiView
        style={ styles.box }
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing', loop: true, duration: 500 }}
      />
    </View>
    
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },

  box: {
    width:100,
    height: 100,
    backgroundColor: 'red'
  }
});

export default FadeIn