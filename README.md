# ExpoApp2 – La Tri

Aplicación móvil desarrollada con React Native y Expo. El proyecto presenta una landing page de la Selección Ecuatoriana de Fútbol, con una pantalla de bienvenida animada y una vista principal con información de “La Tri”.

## Funcionalidades

- Splash screen animado al iniciar la aplicación.
- Animación de escala, opacidad y movimiento.
- Indicador de carga.
- Landing page con información de la Selección Ecuatoriana.
- Botón interactivo con una alerta.
- Navegación inferior mediante Expo Router.
- Diseño adaptable para Android, iOS y web.

## Tecnologías utilizadas

- React
- React Native
- Expo
- Expo Router
- TypeScript

## Estructura principal

```text
ExpoApp2/
├── app/
│   ├── _layout.tsx
│   ├── modal.tsx
│   └── (tabs)/
│       ├── _layout.tsx
│       ├── index.tsx
│       └── explore.tsx
├── assets/
│   └── images/
│       └── logo-ecuador.png
├── components/
├── constants/
├── hooks/
├── app.json
├── package.json
└── tsconfig.json
```

El archivo principal de la landing page es:

```text
app/(tabs)/index.tsx
```

En este archivo se encuentran:

- El estado que muestra u oculta el splash.
- El temporizador de inicio.
- Las animaciones.
- El contenido de la pantalla principal.
- El botón y su alerta.
- Los estilos, tamaños y colores.

La configuración de los botones inferiores se encuentra en:

```text
app/(tabs)/_layout.tsx
```

## Requisitos

Antes de ejecutar el proyecto, instala:

- Node.js en una versión LTS.
- npm, incluido con Node.js.
- Expo Go en el teléfono, si deseas probar la aplicación en un dispositivo físico.

Puedes comprobar la instalación con:

```bash
node --version
npm --version
```

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/BrieLy07/ExpoApp2.git
```

Ingresa al proyecto:

```bash
cd ExpoApp2
```

Instala las dependencias:

```bash
npm install
```

## Ejecución

Inicia el servidor de Expo:

```bash
npx expo start
```

Cuando aparezca el menú de Expo puedes:

- Escanear el código QR con Expo Go.
- Presionar `a` para abrir Android.
- Presionar `i` para abrir iOS en macOS.
- Presionar `w` para abrir la versión web.

También puedes ejecutar directamente:

```bash
npm run android
npm run ios
npm run web
```

## Trabajar en la rama de práctica

Antes de realizar cambios, verifica que estás en la rama correspondiente:

```bash
git switch practica-prueba
git branch
```

Guarda tus cambios con:

```bash
git add .
git commit -m "Descripción del cambio realizado"
git push
```

## Solución de problemas

Si Expo presenta errores de caché, inicia el proyecto limpiándola:

```bash
npx expo start --clear
```

Si faltan dependencias o aparecen errores después de descargar el proyecto:

```bash
npm install
npx expo start
```

Si el teléfono no puede conectarse por la red local:

```bash
npx expo start --tunnel
```

## Cambios comunes para practicar

- Cambiar la duración del splash en `setTimeout`.
- Modificar textos, imágenes, colores y tamaños.
- Cambiar el nombre de los botones inferiores.
- Agregar nuevos botones con `TouchableOpacity`.
- Modificar el mensaje mostrado con `Alert.alert`.
- Agregar nuevas pantallas y navegación.
- Reutilizar información mediante arreglos y `.map()`.

