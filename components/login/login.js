import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import style from "./style";

const image = { uri: "https://i.postimg.cc/pL9xB3gv/Background.jpg" };

export default function Login({navigation}) {
  return (
      <View style={style.container}>
        <View style={style.titleContainer}>
          <Text style={style.title}> Tela de Login </Text>
        </View>
        <View style={style.container}>
          <Text style={style.label}>CPF</Text>
          <TextInput
          style={style.input}
          placeholder="Insira seu CPF"
          />

          <Text style={style.label}>Senha</Text>
          <TextInput
          style={style.input}
          placeholder="Senha"
          />

          <TouchableOpacity
            style={style.button}
            >
              <Text style={style.textButton}>Cadastro</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}
