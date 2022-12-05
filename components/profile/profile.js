import * as React from 'react';
import {ScrollView ,NavigationContainer ,Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import style from "./style";
import styleNav from "../../assets/Styles/header";


export default function Profile({navigation}) {
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
       
          <Text style={style.title}>Perfil</Text>

          <View style={style.body}>
          <View style={style.imageContainer}>
            <Image 
                source={require('../../assets/user.png')}
                style={style.profileImage}
              /> 
          </View>
            <Text style={style.infoName}>Nome: </Text>
            <Text style={style.info}>Usuário </Text>

            <Text style={style.infoName}>Data de Nascimento: </Text>
            <Text style={style.info}>12/03/2003</Text>

            <Text style={style.infoName}>CPF</Text>
            <Text style={style.info}>785.458.987-88</Text>
            
            <Text style={style.infoName}>Email:</Text>
            <Text style={style.info}>teste.usuario@gmail.com</Text>

          <TouchableOpacity
            style={style.button}
            onPress={()=> navigation.navigate('TrocaEmail')}
            >
              <Text style={style.textButton}>Editar Email</Text>
          </TouchableOpacity>
          </View>


        </View>
      </ScrollView>
  )
}
