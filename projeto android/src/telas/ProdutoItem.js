import React from 'react';
import { View, Text, Image, StatusBar, StyleSheet, Dimensions } from 'react-native';

import carre1 from '../../assets/venturav5.png';
import logo from '../../assets/taitai.png';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function ProdutoItem() {
  return (
    <View style={styles.produto}>
        <StatusBar/>
        <Image source={carre1} style={styles.imagem} resizeMode="contain" />
        <Text style={styles.textosobre}>DETALHES DO PRODUTO</Text>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.titulo}>Carretilha Marine Sports New Ventura VT5</Text>
        <Text style={styles.descricao}>Carretilha Ventura, produzida pela Marine Sports
trazendo sempre excelência em qualidade nos seus produtos. Se destaca por ser um produto durável, resistente e de fácil manejo.
Ideal para iniciantes e profissionais ótimo custo beneficio</Text>
         
        <Text style={styles.valor}>R$ 260,00</Text>
    </View>
    
  );
}


const styles = StyleSheet.create({

    logo:{
      width: 120,
      height: 120,
        
    },

    valor:{
        top: 45,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'blue'
    },
    
    descricao: {
        top: 20,
        color: 'gray',
        textAlign: 'center',
        paddingHorizontal: 27,
    },

    titulo: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'orange'
    },

    textosobre: {
        fontWeight: 'bold',
        left: 250,
        top: 30,
        position: 'absolute',
        color: 'white',
        backgroundColor: 'black'
        
    },
  
  imagem: {
    top: 0 ,
    width: '100%',
    
    height: 480 / 672 * width,
    
  },
});
