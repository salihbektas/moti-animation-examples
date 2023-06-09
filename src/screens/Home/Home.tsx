import { MotiView } from 'moti';
import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { HomeProps } from '../../types';


function Home({ navigation }: HomeProps) {

  return (
    <View style={ styles.main }>
      <Text>Home Page</Text>
      <Button title='fade in' onPress={() => navigation.navigate('FadeIn')} />
      <Button title='Move' onPress={() => navigation.navigate('Move')} />
      <Button title='2D movement' onPress={() => navigation.navigate('TwoD')} />
      <Button title='Continuous 2D movement' onPress={() => navigation.navigate('ContinuousTwoD')} />
      <Button title='base screen' onPress={() => navigation.navigate('BaseScreen')} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  }
});

export default Home