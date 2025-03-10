import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}
    >
      <LinearGradient colors={['#155576b3', '#46201B']} style={styles.bemvindo}>
        <View style={styles.foto}></View>
        <Text style={styles.text}>NomeTrabalhador</Text>
        <Text style={styles.text2}>emailTrabalhador</Text>
        <View style={styles.routinho}>
        <Ionicons name="clipboard-outline" size={30} color="white" style={styles.icone} />
        <Ionicons name="person-outline" size={30} color="white" style={styles.icone} />
        <Ionicons name="settings-outline" size={30} color="white" style={styles.icone} />
        </View>
      </LinearGradient>
      <View style={styles.main}>
    <View style={styles.caixinha}></View>
    <View style={styles.caixinha}></View>
    <View style={styles.caixinha}></View>
    <View style={styles.caixinha}></View>
    <View style={styles.caixinha}></View>
    <View style={styles.caixinha}></View>
      </View>
      
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
    paddingBottom: '2%',
    height: '45%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 82,
    borderBottomLeftRadius: 82,
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    padding: '1%',
    width: '72%',
    height:'31%',
    backgroundColor: '#222222',
    borderRadius: 15,
    borderWidth: 0.1,
    borderColor: '#fff',
    
},
main:{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems:'center',
  flexDirection: 'column',
  width: '100%',
  height: 'auto',
  paddingTop: 60,
}, 
caixinha:{
  display:'flex',
  width: '80%',
  height: '10%',
  backgroundColor: 'white',
  marginBottom: 10,
}
});
