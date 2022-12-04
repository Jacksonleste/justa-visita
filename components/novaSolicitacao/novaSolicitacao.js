import * as React from 'react';
import {NavigationContainer ,Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import style from "./style";
import styleNav from "../../assets/Styles/header"

export default function NovaSolicitacao({navigation}) {
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
          <Text style={style.title}>Nova Solicitacao</Text>
          <View style={style.body}>
           <TextInput
          style={style.input}
          placeholder="Nome do Detento"
          />
           <TextInput
          style={style.input}
          placeholder="CPF"
          />
           <TextInput
          style={style.input}
          placeholder="Data de Nascimento"
          />
           <TextInput
          style={style.input}
          placeholder="Data da visita"
          />
          
          <TouchableOpacity
            style={style.button}
            onPress={()=> navigation.navigate('Dash')}
            >
              <Text style={style.textButton}>Solicitar</Text>
          </TouchableOpacity>
          </View>
      </View>
  );
}
