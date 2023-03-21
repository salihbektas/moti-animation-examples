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