import { MotiView, useAnimationState } from 'moti';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';


function TwoD() {

  const [vertical, setVertical] = useState(0)
  const [horizontal, setHorizontal] = useState(0)

  function left() {
    if(horizontal > -100)
      setHorizontal(s => s-50)
  }
  function right() {
    if(horizontal < 100)
      setHorizontal(s => s+50)
  }
  function up() {
    if(vertical > -100)
      setVertical(s => s-50)
  }
  function down() {
    if(vertical < 100)
      setVertical(s => s+50)
  }

  return (
    <View style={ styles.main }>
      <View style={ styles.table}>
        <MotiView
          style={ styles.box }
          animate={{translateX: horizontal, translateY: vertical}}
          transition={{type: 'timing', duration: 100}}
        />
      </View>
      <View>
      <Button title='up' onPress={up}/>
      <View style={{flexDirection: 'row'}}>
        <View style={{width:'50%'}}>
          <Button title='left' onPress={left}/>
        </View>
        <View style={{width:'50%'}}>
          <Button title='right' onPress={right}/>
        </View>
      </View>
      <Button title='down' onPress={down}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },

  table: {
    backgroundColor: 'lightblue',
    width: 250,
    aspectRatio: 1,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },

  box: {
    width:50,
    height: 50,
    zIndex: 2,
    backgroundColor: 'tomato'
  }
});

export default TwoD