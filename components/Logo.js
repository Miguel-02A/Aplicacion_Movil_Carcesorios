import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';

export function Logo(){
    return (

        <View>
            <View style={styles.contelogo}>
            <Image style={styles.logo} source={require('../assets/img/1.Logo/Logo.png')}></Image>
            <Text style={styles.Texto}>Tel: +57-321-123-3212</Text>
            </View>

            <View style={styles.bottom} />
        </View>
        
    )
}
const styles = StyleSheet.create({
    contelogo: {
        color: 'white',
        marginTop: 5,
        marginLeft: 18,
        marginRight: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        width: 100,
        height: 120,
    },
    Texto: {   
        color: 'white',
    },
    bottom: {
        height: 0.5,
        marginLeft: 18,
        marginRight: 18,
        backgroundColor: ' rgb(197, 197, 197)',
    },
  });