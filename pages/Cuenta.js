import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';


export function Cuenta() {
  return (

    <View style={styles.container}>

      <View style={styles.contelogo}>
        <Image style={styles.logo} source={require('../assets/img/1.Logo/Logo.png')}></Image>
      </View>

      <View style={styles.containerBotones}>

        <Text style={styles.texto}>Carcesorios</Text>

        <View style={styles.campo}>
            <Text style={styles.label}>Documento:</Text>
            <TextInput style={styles.input} 
            placeholder='Documento' 
            placeholderTextColor={'#666'} 
            maxLength={40}/>
        </View>

        <View style={styles.campo}>
            <Text style={styles.label}>Contraseña:</Text>
            <TextInput style={styles.input}
            placeholder='Contraseña'
            placeholderTextColor={'#666'}
            maxLength={40}/>
        </View>

        <TouchableOpacity style={styles.contebotonUno}>
          <Text style={styles.botonUno}>Iniciar sesión</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.contebotonDos}>
          <Text style={styles.botonDos}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>

    </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161719',
  },
  contelogo: {
    margin: 10,
  },
  logo: {
    width: 100,
    height: 120,
  },
  containerBotones: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    marginBottom: 10,
    fontSize: 18,
    color: '#rgb(220, 143, 0)',
  },
  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 14,
    fontWeight: '600',
},
  input: {
    width: 350,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#FFF',
},
  botonUno: {
    color: 'rgb(197, 197, 197)',
  },
  contebotonUno: {
    width: 350,
    height: 45,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#rgb(220, 143, 0)',
  },
  botonDos: {
    color: '#rgb(220, 143, 0)',
    margin: '10%',
  },
  contebotonDos: {
    marginTop: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});