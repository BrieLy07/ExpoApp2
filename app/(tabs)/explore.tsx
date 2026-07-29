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
      <Text style={styles.titulo}>Conoce a la Roja</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>La Sele</Text>

        <Text style={styles.texto}>
          La Selección Española representa a su país en las principales
          competencias internacionales de fútbol y es la campeona actual del
          mundial 2026
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>⚽ Identidad</Text>

        <Text style={styles.dato}>Apodo: La Roja</Text>
        <Text style={styles.dato}>Confederación: UEFA</Text>
        <Text style={styles.dato}>Colores: Amarillo y rojo</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>🏆 Objetivo</Text>

        <Text style={styles.texto}>
          Competir al máximo nivel y representar con orgullo a su gente,
          queriendo su tercera copa.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => router.push("/detalles")}
      >
        <Text style={styles.textoBoton}>Mira nuestro vídeo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7ea3db",
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
