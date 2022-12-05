import * as React from 'react';
import {NavigationContainer ,Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import style from "./style";
import styleNav from "../../assets/Styles/header"


export default function Info(props) {
  if(props.visible){
  return (
        <View style={style.container}>
       
        <Text style={style.title}>Informações</Text>
        <Text style={style.title}>{props.obj.nome}</Text>
        <Text style={style.title}>{props.obj.data}</Text>
        <Text style={style.title}>{props.obj.horario}</Text>

        </View>
  )} else{
    return false;
  }
}
