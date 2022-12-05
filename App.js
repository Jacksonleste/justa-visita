 import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/home/home'
import Login from './components/login/login'
import Cadastro from './components/cadastro/cadastro'
import Dash from './components/dash/dash'
import NovaSolicitacao from './components/novaSolicitacao/novaSolicitacao'
import RedefinirSenha from './components/redefinirSenha/redefinirSenha'
import EsqueciSenha from './components/esqueciSenha/esqueciSenha'
import EmailEnviado from './components/emailEnviado/emailEnviado'
import Profile from './components/profile/profile'
import TrocaEmail from './components/trocarEmail/trocarEmail'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Dash" component={Dash} />
        <Stack.Screen name="NovaSolicitacao" component={NovaSolicitacao} />
        <Stack.Screen name="RedefinirSenha" component={RedefinirSenha} />
        <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
        <Stack.Screen name="EmailEnviado" component={EmailEnviado} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="TrocaEmail" component={TrocaEmail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
