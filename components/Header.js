import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';

export function Header(){
    return (

        <View style={styles.containerBotones}>

            <TouchableOpacity style={styles.contebotonUno}>
            <Text style={styles.botonUno}>Inicio</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contebotonDos}>
            <Text style={styles.textoBoton}>%Ofertas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contebotonDos}>
            <Text style={styles.textoBoton}>Ayuda/PQR</Text>
            </TouchableOpacity>

        </View>

    )
}
const styles = StyleSheet.create({
    containerBotones: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#161719',
      },
      botonUno: {
        fontSize: 22,
        color: 'rgb(220, 143, 0)',
      },
      textoBoton: {
        fontSize: 20,
        color: 'white',
      },
  });