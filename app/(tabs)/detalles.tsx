import { router } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function HistoriaScreen() {
  const player = useVideoPlayer(
    require("../../assets/images/video-gm.mp4"),
    (player) => {
      player.loop = true;
      player.muted = true;
      player.play();
    },
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contenido}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.titulo}>Sobre mí</Text>
      <Text style={styles.subtitulo}>
        Estudiante de décimo semestre, Sistemas de Información
      </Text>

      <Text style={styles.tituloHome}>Gabriel Mendoza</Text>
      <Text style={styles.subtituloHome}>Dispositivos Moviles</Text>

      <View style={styles.banner}>
        <VideoView
          player={player}
          style={styles.videoHome}
          nativeControls={false}
          contentFit="cover"
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.anio}>2026</Text>
        <Text style={styles.cardTitulo}>
          Ingenieria Sistemas de Información
        </Text>
        <Text style={styles.texto}>
          Loco por terminar la carrera y feliz por casi ya alcanzarlo.
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
    backgroundColor: "#4679c5",
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

  banner: {
    width: "100%",
    marginTop: 15,
    backgroundColor: "#1de4e4",
    alignItems: "center",
    paddingVertical: 25,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    marginBottom: 25,
  },
  logoHome: {
    width: 135,
    height: 135,
    resizeMode: "contain",
    marginBottom: 10,
  },
  tituloHome: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#002255",
  },
  subtituloHome: {
    fontSize: 16,
    color: "#E5073A",
    fontWeight: "bold",
    marginTop: 5,
  },

  videoHome: {
    width: "100%",
    height: 220,
    borderRadius: 20,
  },
});
