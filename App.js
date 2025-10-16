import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import CounterScreen from './screens/CounterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Tela de Login' }} />
        <Stack.Screen name="Counter" component={CounterScreen} options={{ title: 'Contador Interativo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
