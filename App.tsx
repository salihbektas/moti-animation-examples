import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import BaseScreen from './src/screens/BaseScreen/BaseScreen';
import Home from './src/screens/Home/Home';
import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();


function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BaseScreen" component={BaseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
