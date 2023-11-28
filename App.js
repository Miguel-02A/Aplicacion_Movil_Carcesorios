import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Inicio } from './pages/Inicio'
import { Cuenta } from './pages/Cuenta'
import { Acercade } from './pages/Acercade'
//import { ListaDeseos} from './pages/listaDeseos'


const Menu = createDrawerNavigator()


export default function App() {
  return (

    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name='Inicio' component={Inicio}/>
        <Menu.Screen name='Cuenta' component={Cuenta}/>
        <Menu.Screen name='Ayudas' component={Acercade}/>
      </Menu.Navigator>
    </NavigationContainer>

  );
}

