import * as React from 'react';
import {NavigationContainer ,Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import style from "./style";
import styleNav from "../../assets/Styles/header";

export default function Login({navigation}) {
  return (
      <View style={style.container}>
      <View style={styleNav.containerNav}>
        <TouchableOpacity
            style={styleNav.buttonNavBar}
            onPress={()=> navigation.navigate('Home')}
            >
              <Image 
              source={require('../../assets/back-arrow.png')}
              style={styleNav.buttonImageIconStyle}
            /> 
          </TouchableOpacity>
      </View>

        <View style={style.titleContainer}>
          <Text style={style.title}>
            Fazer Login
          </Text>
        </View>
        <View style={style.container}>
          <TextInput
          style={style.input}
          placeholder="Insira seu CPF"
          />

          <TextInput
          style={style.input}
          placeholder="Senha"
          />
          <TouchableOpacity 
          onPress={()=> navigation.navigate('EsqueciSenha')}
          style={style.esqueceuSenhaButton}>
            <Text style={style.esqueceuSenhaTexto}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.button}
            onPress={()=> navigation.navigate('Dash')}
            >
              <Text style={style.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}
