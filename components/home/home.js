import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground} from 'react-native'
import style from "./style";

const image = { uri: "https://i.postimg.cc/pL9xB3gv/Background.jpg" };

export default function Home({navigation}) {
  return (
      <View style={style.container}>
      <ImageBackground source={image} resizeMode="cover" style={style.image}>
        <View style={style.titleContainer}>
          <Text style={style.title}> Bem Vindo ao </Text>
          <Text style={style.title1}> Justa Visita </Text>
          <Text style={style.text}> Aqui voce pode agendar sua visita de forma totalmente digital </Text>
        </View>
        <View style={style.container}>
        
          <TouchableOpacity
            style={style.homeButtons}
            >
              <Text style={style.textButton}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.homeButtons}
            >
              <Text style={style.textButton}>Cadastro</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      </View>
  );
}