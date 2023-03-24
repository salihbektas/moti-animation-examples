import { MotiView, useAnimationState } from 'moti';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';


function Move() {

  const [isLeft, setIsLeft] = useState(true)

  const onPress = () => {
    setIsLeft(s => !s)
  }

  return (
    <View style={ styles.main }>
      <MotiView
        style={ styles.box }
        animate={{translateX: isLeft ? 0 : 250}}
        transition={{type: 'timing'}}
      />
      <Button title='Move' onPress={onPress}/>
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

export default Move