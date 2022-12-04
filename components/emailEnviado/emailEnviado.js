import * as React from 'react';
import {NavigationContainer ,Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import style from "./style";
import styleNav from "../../assets/Styles/header"

export default function EmailEnviado({navigation}) {
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
      
        <View style={style.container}>
          <View style={style.messageContainer}>
            <Image 
              source={require('../../assets/check-mark.png')}
              style={style.imageConfirm}
            />
            <Text style={style.codeText}>Foi Enviado um código para seu email, insira-o abaixo</Text>

              <TextInput
            style={style.input}
            placeholder="Código"
            />
            <TouchableOpacity
            style={style.button}
            onPress={()=> navigation.navigate('RedefinirSenha')}
            >
              <Text style={style.textButton}>Confirmar</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}
