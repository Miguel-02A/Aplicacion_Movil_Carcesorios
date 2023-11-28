import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import PropTypes from 'prop-types';

export function Titulo(){
    return (

        <View style={styles.containerTitulo}>

            <Text style={styles.Titulo}>Titulo</Text>

        </View>

    )
}
const styles = StyleSheet.create({
    containerTitulo: {
        marginTop: 15,
        marginLeft: 18,
        marginRight: 18,
        backgroundColor: '#222427',
      },
      Titulo: {
        margin: 5,
        fontSize: 18,
        color: 'white',
      },
  });