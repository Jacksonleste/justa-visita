import * as React from 'react';
import {NavigationContainer ,Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import style from "./style";
import styleNav from "../../assets/Styles/header"
import waring from '../../assets/waring.png'
import sucess from '../../assets/sucess.png'
import x from '../../assets/x.png'


const images = [{url: "../../assets/x.png", text: "Solicitação Recusada"},
 {url: "../../assets/waring.png", text: "Solicitação em Análise"},
 {url: "../../assets/sucess.png", text: "Solicitação Aprovada"}]

export default function Info(props) {
  if(props.visible){
  return (
        <View style={style.container}>
       
          <Text style={style.title}>Detalhes</Text>

          <View style={style.body}>

            <Text style={style.infoName}>Status da Solicitação:</Text>
            <Text style={style.info}>
              <Image 
                source={require(`${images[props.obj.situacao].url}`)}
                style={style.image}
              /> 
              {images[props.obj.situacao].text}
            </Text>

            <Text style={style.infoName}>Nome do detento: </Text>
            <Text style={style.info}>{props.obj.nome}</Text>

            <Text style={style.infoName}>Data da visita:</Text>
            <Text style={style.info}>{props.obj.data}</Text>

            <Text style={style.infoName}>Horario da visita</Text>
            <Text style={style.info}>{props.obj.horario}</Text>
            
            <Text style={style.infoName}>N° Registro do agendamento:</Text>
            <Text style={style.info}>{props.obj.numReg}</Text>

          </View>

        </View>
  )} else{
    return false;
  }
}
