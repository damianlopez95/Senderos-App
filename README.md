#  Senderos-App

Senderos App: Proyecto integrador final para la materia "Taller de Nuevas Tecnologías". UNTDF. 3er Año. 2019.

Integrantes: Maciel Dario, Perez Ignacio, Lopez Damian.

Desarrollo de aplicación móvil en JavaScript con el framework React Native.

Plataforma funcional: Android.

El proyecto surge para cubrir las necesidades del Parque Nacional Tierra del Fuego, que busca el desarrollo de una app interactiva que
sirva a los visitantes del parque como guía interactiva y al mismo parque para obtener datos de interés con respecto a las zonas visitadas.

Algunas de las características más importantes de la app:
- Sirve como guía interactiva de los distintos atractivos turísticos del parque.
- Se pueden listar especies, tanto flora como fauna, senderos existentes y diversos puntos de interés.
- La app funciona de manera off-line ya que no existe recepción de wifi en el área.
- Existe un mapa interactivo donde se pueden visualizar todos los senderos y los puntos de interés.
- Los puntos de interés se irán desbloqueando (se da +info) cuando el usuario se acerque a la zona de ese punto.
- Se muestra el pronóstico del tiempo de hasta los próximos cinco días.
- Se pueden tomar fotografías y almacenar coordenadas por cuestiones de seguridad.

La app NO es la versión oficial en desarrollo, se trata de la implementación de una parte del proyecto general para la universidad.

Para conocer más información detallada, leer la documentación completa en ./document/Documentación.pdf.

Tecnologías:

- Lenguaje: JavaScript
- Framework: React Native (v0.59.1)
- Cli / Boilerplate: Ignite Andross
- Persistencia: Redux (redux, react-redux, react-persist, redux-saga, reduxsauce)
- Componentes visuales: React Native Elements
- Mapas: Mapbox (react-native-mapbox-gl/maps)
- Librería multi-idiomas: i18n
- ...


Acceso a repo de desarrollo alternativo: https://github.com/ignacioperez99/HikingTool



[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* Standard compliant React Native App Utilizing [Ignite](https://github.com/infinitered/ignite)

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `yarn` or `npm i`


## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`

## :no_entry_sign: Standard Compliant

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

**To Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

### Get started:
1. Copy .env.example to .env
2. Add your config variables
3. Follow instructions at [https://github.com/luggit/react-native-config#setup](https://github.com/luggit/react-native-config#setup)
4. Done!
