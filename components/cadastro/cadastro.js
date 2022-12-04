import * as React from 'react';
import {ScrollView  ,Image, Text, View, TextInput, TouchableOpacity } from 'react-native'
import style from "./style";
import styleNav from "../../assets/Styles/header"

export default function Cadastro({navigation}) {
  return (
    <ScrollView>
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
            Criar Cadastro
          </Text>
        </View>
        <View style={style.container}>
          <TextInput
          style={style.input}
          placeholder="Nome"
          />

          <TextInput
          style={style.input}
          placeholder="Sobrenome"
          />

          <TextInput
          style={style.input}
          placeholder="Data de Nascimento"
          />

          <TextInput
          style={style.input}
          placeholder="CPF"
          />

          <TextInput
          style={style.input}
          placeholder="RG"
          />

          <TextInput
          style={style.input}
          placeholder="Email"
          />

          <TextInput
          style={style.input}
          placeholder="Telefone"
          />
          
          <TextInput
          style={style.input}
          placeholder="Senha"
          />

          <TextInput
          style={style.input}
          placeholder="Repita a senha"
          />

          <TouchableOpacity
            style={style.button}
            >
              <Text style={style.textButton}>
                Cadastrar Perfil
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

  );
}
