import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Text,
} from "react-native";
import { Logo } from "../components/Logo.js";
import { Header } from "../components/Header.js";
import { Slider } from "../components/Slider.js";
import { Titulo } from "../components/Titulo.js";

import { PieUno } from "../components/PieUno.js";
import { PieDos } from "../components/PieDos.js";

export function Inicio() {
  const title = "Categorias";

  return (
    <View style={styles.container}>
      <Logo />

      <Header />

      <Slider />

      <Titulo />

      

      <PieUno />

      <PieDos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161719",
  },
});
