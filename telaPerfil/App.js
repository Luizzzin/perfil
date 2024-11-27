import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#155576b3', '#231918', '#161616',  ]} style={styles.bemvindo}>
        <View style={styles.foto}></View>
        <Text style={styles.text}>NomeTrabalhador</Text>
        <Text style={styles.text2}>emailTrabalhador</Text>
        <View style={styles.routinho}></View>
      </LinearGradient>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    backgroundColor: '#161616',
  },
  bemvindo: {
    paddingTop: '20%',
    paddingBottom: '10%',
    height: '45%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'transparent',
    fontWeight:'bold' ,
    fontSize: 22,
    color: '#fff',
  },
  text2: {
    backgroundColor: 'transparent',
    fontSize: 18,
    color: '#fff',
    marginTop: '2%',
    marginBottom: '5%',
  },
  foto: {
    width: '33%',
    aspectRatio: 1,
    backgroundColor: '#ddd',
    borderRadius: 9999, 
    marginBottom: '5%',
  },
  routinho:{
    width: '70%',
    height:'28%',
    backgroundColor: '#222222',
    borderRadius: 15,
    borderWidth: 0.1,
    borderColor: '#fff',
}  
});
