import { MotiView, useAnimationState } from 'moti';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import useInterval from 'use-interval';


function ContinuousTwoD() {

  const [vertical, setVertical] = useState(0)
  const [horizontal, setHorizontal] = useState(0)
  const [direction, setDirection] = useState('')

  function left() {
    if(horizontal > -120)
      setHorizontal(s => s-10)
  }
  function right() {
    if(horizontal < 120)
      setHorizontal(s => s+10)
  }
  function up() {
    if(vertical > -120)
      setVertical(s => s-10)
  }
  function down() {
    if(vertical < 120)
      setVertical(s => s+10)
  }

  function tick() {
    if(direction === 'up'){
      up()
    }
    if(direction === 'down'){
      down()
    }
    if(direction === 'left'){
      left()
    }
    if(direction === 'right'){
      right()
    }
  }

  useInterval(tick, 50)

  return (
    <View style={ styles.main }>
      <View style={ styles.table}>
        <MotiView
          style={ styles.box }
          animate={{translateX: horizontal, translateY: vertical}}
          transition={{type: 'timing', duration: 40}}
        />
      </View>
      <View>
      <Button title='up' onPress={() => setDirection('up')}/>
      <View style={{flexDirection: 'row'}}>
        <View style={{width:'50%'}}>
          <Button title='left' onPress={() => setDirection('left')}/>
        </View>
        <View style={{width:'50%'}}>
          <Button title='right' onPress={() => setDirection('right')}/>
        </View>
      </View>
      <Button title='down' onPress={() => setDirection('down')}/>
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
    width: 10,
    aspectRatio: 1,
    zIndex: 2,
    backgroundColor: 'tomato'
  }
});

export default ContinuousTwoD