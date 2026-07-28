import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ExploreScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contenido}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.titulo}>Conoce a La Tri</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>🇪🇨 Nuestra selección</Text>

        <Text style={styles.texto}>
          La Selección Ecuatoriana representa al país en las principales
          competencias internacionales de fútbol.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>⚽ Identidad</Text>

        <Text style={styles.dato}>Apodo: La Tri</Text>
        <Text style={styles.dato}>Confederación: CONMEBOL</Text>
        <Text style={styles.dato}>Colores: Amarillo, azul y rojo</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>🏆 Objetivo</Text>

        <Text style={styles.texto}>
          Competir al máximo nivel y representar con orgullo a todos los
          ecuatorianos.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => router.push("/detalles")}
      >
        <Text style={styles.textoBoton}>Conocer más</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002255",
  },

  contenido: {
    paddingHorizontal: 24,
    paddingTop: 70,
    paddingBottom: 120,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFCE00",
    textAlign: "center",
    marginBottom: 25,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 18,
    marginBottom: 18,
    elevation: 6,
  },

  cardTitulo: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#E5073A",
    marginBottom: 12,
  },

  texto: {
    fontSize: 16,
    color: "#333333",
    lineHeight: 24,
  },

  dato: {
    fontSize: 16,
    color: "#002255",
    fontWeight: "600",
    marginBottom: 10,
  },

  boton: {
    marginTop: 20,
    backgroundColor: "#E5073A",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
  },

  textoBoton: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
