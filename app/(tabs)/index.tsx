import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [mostrarSplash, setMostrarSplash] = useState(true);

  const escalaLogo = useRef(new Animated.Value(0.7)).current;
  const opacidadLogo = useRef(new Animated.Value(0)).current;
  const movimientoTitulo = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(escalaLogo, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
      Animated.timing(opacidadLogo, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(movimientoTitulo, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      setMostrarSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (mostrarSplash) {
    return (
      <View style={styles.splash}>
        <Animated.Image
          source={require('../../assets/images/logo-ecuador.png')}
          style={[
            styles.logoSplash,
            {
              opacity: opacidadLogo,
              transform: [{ scale: escalaLogo }],
            },
          ]}
        />

        <Animated.Text
          style={[
            styles.tituloSplash,
            {
              transform: [{ translateY: movimientoTitulo }],
            },
          ]}
        >
          Ecuador - La Tri
        </Animated.Text>

        <ActivityIndicator size="large" color="#002255" style={styles.loader} />

        <Text style={styles.cargando}>Cargando aplicación...</Text>
      </View>
    );
  }

  return (
    <View style={styles.home}>
      <View style={styles.banner}>
        <Image
          source={require('../../assets/images/logo-ecuador.png')}
          style={styles.logoHome}
        />

        <Text style={styles.tituloHome}>Ecuador</Text>
        <Text style={styles.subtituloHome}>Selección Nacional de Fútbol</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Bienvenido a La Tri</Text>

        <Text style={styles.texto}>
          La Selección Ecuatoriana representa al país en competencias
          internacionales de fútbol. Es conocida como “La Tri” por los colores
          de la bandera nacional: amarillo, azul y rojo.
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.info}>🌎 Confederación: CONMEBOL</Text>
        <Text style={styles.info}>👨‍🏫 Entrenador: Sebastián Beccacece</Text>
        <Text style={styles.info}>🏟 Estadio: Rodrigo Paz Delgado</Text>
        <Text style={styles.info}>🇪🇨 Colores: Amarillo, azul y rojo</Text>
      </View>

      <TouchableOpacity
        style={styles.boton}
        onPress={() =>
          Alert.alert(
            'La Tri',
            '¡Vamos Ecuador! Esta es una aplicación básica creada con React Native y Expo.'
          )
        }
      >
        <Text style={styles.textoBoton}>Ver mensaje</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#FFCE00',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoSplash: {
    width: 190,
    height: 190,
    resizeMode: 'contain',
    marginBottom: 25,
  },
  tituloSplash: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#002255',
    textAlign: 'center',
  },
  loader: {
    marginTop: 30,
  },
  cargando: {
    marginTop: 12,
    fontSize: 15,
    color: '#002255',
    fontWeight: '600',
  },
  home: {
    flex: 1,
    backgroundColor: '#002255',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  banner: {
    width: '100%',
    marginTop: 40,
    backgroundColor: '#FFCE00',
    alignItems: 'center',
    paddingVertical: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    marginBottom: 25,
  },
  logoHome: {
    width: 135,
    height: 135,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  tituloHome: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#002255',
  },
  subtituloHome: {
    fontSize: 16,
    color: '#E5073A',
    fontWeight: 'bold',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 20,
    width: '100%',
    marginBottom: 20,
    elevation: 8,
  },
  cardTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E5073A',
    textAlign: 'center',
    marginBottom: 12,
  },
  texto: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    lineHeight: 24,
  },
  infoBox: {
    backgroundColor: '#D3AA75',
    padding: 18,
    borderRadius: 18,
    width: '100%',
  },
  info: {
    fontSize: 16,
    color: '#002255',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  boton: {
    marginTop: 20,
    backgroundColor: '#E5073A',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});