import { router } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function HistoriaScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contenido}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.titulo}>Historia de La Tri</Text>
      <Text style={styles.subtitulo}>
        Participaciones de Ecuador en los mundiales
      </Text>

      <View style={styles.card}>
        <Text style={styles.anio}>2002</Text>
        <Text style={styles.cardTitulo}>Primer Mundial</Text>
        <Text style={styles.texto}>
          Ecuador participó por primera vez en una Copa Mundial, realizada en
          Corea del Sur y Japón.
        </Text>
      </View>

      <View style={styles.cardDestacada}>
        <Text style={styles.anioDestacado}>2006</Text>
        <Text style={styles.cardTitulo}>Mejor participación</Text>
        <Text style={styles.texto}>
          En Alemania 2006, La Tri avanzó a los octavos de final, logrando su
          mejor participación mundialista.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.anio}>2014</Text>
        <Text style={styles.cardTitulo}>Mundial de Brasil</Text>
        <Text style={styles.texto}>
          Ecuador regresó a un Mundial y compitió en la fase de grupos frente a
          Suiza, Honduras y Francia.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.anio}>2022</Text>
        <Text style={styles.cardTitulo}>Mundial de Catar</Text>
        <Text style={styles.texto}>
          La selección disputó el partido inaugural y representó nuevamente al
          país en la máxima competencia internacional.
        </Text>
      </View>

      <View style={styles.resumen}>
        <Text style={styles.resumenTitulo}>🏆 Dato destacado</Text>
        <Text style={styles.resumenTexto}>
          La mejor actuación de Ecuador fue llegar a los octavos de final en
          Alemania 2006.
        </Text>
      </View>

      <TouchableOpacity style={styles.boton} onPress={() => router.push("/")}>
        <Text style={styles.textoBoton}>Volver al inicio</Text>
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
  },

  subtitulo: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 25,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 18,
    marginBottom: 18,
    elevation: 6,
    borderLeftWidth: 7,
    borderLeftColor: "#FFCE00",
  },

  cardDestacada: {
    width: "100%",
    backgroundColor: "#FFCE00",
    padding: 20,
    borderRadius: 18,
    marginBottom: 18,
    elevation: 6,
    borderLeftWidth: 7,
    borderLeftColor: "#E5073A",
  },

  anio: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#002255",
  },

  anioDestacado: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#E5073A",
  },

  cardTitulo: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#E5073A",
    marginTop: 4,
    marginBottom: 10,
  },

  texto: {
    fontSize: 16,
    color: "#333333",
    lineHeight: 24,
  },

  resumen: {
    backgroundColor: "#D3AA75",
    padding: 20,
    borderRadius: 18,
  },

  resumenTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#002255",
    marginBottom: 10,
  },

  resumenTexto: {
    fontSize: 16,
    color: "#002255",
    lineHeight: 23,
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
