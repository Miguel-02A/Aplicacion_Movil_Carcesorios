import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';

export function PieUno(){
    return (

        <View  style={styles.containerPieUno}>

            <View>

                <Text style={styles.info}>Contáctenos</Text>
                <Text style={styles.infoDos}>+57-321-123-3212</Text>
                <Text style={styles.infoDos}>Carcesorios@hotmail.com</Text>

            </View>

            <View style={styles.containerBotones}>

                <Text style={styles.info}>Redes</Text>

                <TouchableOpacity>
                <Text style={styles.redes}>Twitter</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Text style={styles.redes}>Youtube</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Text style={styles.redes}>Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Text style={styles.redes}>Instagram</Text>
                </TouchableOpacity>

             </View>

        </View>

    )
}
const styles = StyleSheet.create({
    containerPieUno: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#222427',
      },
      info: {
        margin: 2,
        fontSize: 14,
        color: 'rgb(220, 143, 0)',
      },
      infoDos: {
        margin: 2,
        fontSize: 14,
        color: 'white',
      },
      redes: {
        margin: 2,
        marginBottom: 5,
        fontSize: 14,
        color: 'white',
      },
  });