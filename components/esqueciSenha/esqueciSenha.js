import * as React from 'react';
import {NavigationContainer ,Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import style from "./style";
import styleNav from "../../assets/Styles/header"

export default function esqueciSenha({navigation}) {
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
            
          </Text>
        </View>
        <View style={style.container}>
          <View style={style.messageContainer}>
            <TextInput
            style={style.input}
            placeholder="Email"
            />

            <TouchableOpacity
              style={style.button}
              onPress={()=> navigation.navigate('EmailEnviado')}
              >
                <Text style={style.textButton}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}
