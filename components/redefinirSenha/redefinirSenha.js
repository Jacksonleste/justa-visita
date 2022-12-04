import * as React from 'react';
import {NavigationContainer ,Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import style from "./style";
import styleNav from "../../assets/Styles/header"

export default function RedefinirSenha({navigation}) {
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
            Redefinir Senha
          </Text>
        </View>
        <View style={style.container}>
          <TextInput
          style={style.input}
          placeholder="Nova Senha"
          />

          <TextInput
          style={style.input}
          placeholder="Repita a Senha"
          />

          <TouchableOpacity
            style={style.button}
            onPress={()=> navigation.navigate('Home')}
            >
              <Text style={style.textButton}>Redefinir</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}
