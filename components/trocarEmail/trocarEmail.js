import * as React from 'react';
import {ScrollView ,NavigationContainer ,Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import style from "./style";
import styleNav from "../../assets/Styles/header";


export default function TrocaEmail({navigation}) {
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
       
          <Text style={style.title}>Trocar Email</Text>

          <View style={style.body}>
          
          <TextInput
          style={style.input}
          placeholder="Novo Email"
          />
          
          <TouchableOpacity
            style={style.button}
            onPress={()=> navigation.navigate('Dash')}
            >
              <Text style={style.textButton}>Editar Email</Text>
          </TouchableOpacity>
          </View>


        </View>
      </ScrollView>
  )
}
