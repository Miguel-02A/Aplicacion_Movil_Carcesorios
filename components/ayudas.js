import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


export function Ayudas() {
  return (
    <View style={estilos.contenedor}>
        <View style={estilos.principal}>
            
            <Text style={estilos.titulo}>Titulo</Text>
            <TouchableOpacity
                style={estilos.links}
            >
                <Text style={estilos.textos}>Administrar y cancelar compras</Text>
            </TouchableOpacity>
            
        </View>
        <View style={estilos.principal}>
            
            <Text style={estilos.titulo}>Titulo</Text>
            <TouchableOpacity
                style={estilos.links}
            >
                <Text style={estilos.textos}>Administrar y cancelar compras</Text>
            </TouchableOpacity>
        </View>
    </View>
    
    
  )
}

const estilos = StyleSheet.create ({
    contenedor: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
    },
    principal: {
        margin: 10,
        marginTop: 15,
        backgroundColor: 'rgb(220, 143, 0)',
        width: '45%',
        height: 'auto',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold',
    },
    links: {
        border: 0,
        marginTop: 3,
    },
    textos: {
        borderTop: '20px solid black',
    }
})

