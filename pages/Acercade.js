import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { Logo } from '../components/Logo'
import { Header } from '../components/Header'
import { Titulo } from '../components/Titulo'
import { PieUno } from '../components/PieUno.js'
import { PieDos } from '../components/PieDos.js';
import { Ayudas } from '../components/ayudas.js'

export function Acercade() {

  const title = "Acerca de"

  return (

    <View style={styles.container}>
        <Logo/>
        <Header/>
        <Titulo/>

        <Ayudas/>

        <PieUno/>
        <PieDos/>
        <StatusBar style="auto" />
    </View>

        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161719',
  },

});