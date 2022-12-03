 import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/home/home'
import Login from './components/login/login'
import Cadastro from './components/cadastro/cadastro'
import Dash from './components/dash/dash'
import NovaSolicitacao from './components/novaSolicitacao/novaSolicitacao'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Dash" component={Dash} />
        <Stack.Screen name="NovaSolicitacao" component={NovaSolicitacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
