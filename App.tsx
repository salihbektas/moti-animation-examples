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
import FadeIn from './src/screens/FadeIn/FadeIn';
import Home from './src/screens/Home/Home';
import Move from './src/screens/Move/Move';
import TwoD from './src/screens/TwoD/TwoD';
import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();


function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FadeIn" component={FadeIn} />
        <Stack.Screen name="Move" component={Move} />
        <Stack.Screen name="TwoD" component={TwoD} options={{ title: '2D Movement' }}/>
        <Stack.Screen name="BaseScreen" component={BaseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
