import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


function BaseScreen() {

  return (
    <View style={ styles.main }>
      <Text>Base screen page</Text>
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

export default BaseScreen