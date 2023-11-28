import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';

export function PieDos(){
    return (

        <View style={styles.containerPieDos}>

            <Text style={styles.copy}>© 2023 Carcesorios-Escuadrón Velocista</Text>

        </View>

    )
}
const styles = StyleSheet.create({
    containerPieDos: {
        backgroundColor: '#2e3135',
      },
      copy: {
        margin: 12,
        fontSize: 12,
        color: 'white',
      },
  });