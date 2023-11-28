import { StatusBar } from 'expo-status-bar';
import { SliderBox } from 'react-native-image-slider-box'
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';

export function Slider(){
    const images = [
        require('../assets/img/3.Carrusel/Logo_Chevrolet.jpg'),
        require('../assets/img/3.Carrusel/Logo_Mazda.jpg'),
        require('../assets/img/3.Carrusel/Logo_Mercedes.jpg'),
        require('../assets/img/3.Carrusel/Logo_Volkswagen.jpg'),
        require('../assets/img/3.Carrusel/Logo_Toyota.jpg'),
    ]
    return (
        <View style={styles.contaSlider}>
            <SliderBox images={images} dotColor='rgb(220, 143, 0)'/>
        </View> 
    )
}
const styles = StyleSheet.create({
    contaSlider: {
        marginTop: 15,
    },
  });

