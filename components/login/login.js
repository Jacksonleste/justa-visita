import * as React from 'react';
import {NavigationContainer ,Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import style from "./style";

const image = { uri: "https://i.postimg.cc/pL9xB3gv/Background.jpg" };

export default function Login({navigation}) {
  return (
      <View style={style.container}>
      <View style={style.containerNav}>
        <TouchableOpacity
            style={style.buttonNavBar}
            onPress={()=> navigation.navigate('Home')}
            >
              <Image 
              source={require('../../assets/back-arrow.png')}
              style={style.buttonImageIconStyle}
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
          <TouchableOpacity style={style.esqueceuSenhaButton}>
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
