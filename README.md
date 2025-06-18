# React Native Clean Architecture Template

**👾 Simple and minimalist template that includes styling system, design system and customizable components. Developed with a modular architecture structure focused on maintainability and scalability.**

This template allows you to initialize a new react native application and saves you a lot of time in the initial configuration of the application with things that all applications usually need such as: components, styles, customizable measures, forms, validations, architecture.

_It also includes base modules for user, authentication and navigation to serve as an example of how to work with this template._

![](https://crisangera.github.io/react-native-clean-architecture-docs/assets/images/rnca_preview_template_app-aa9c1a6cd85df85b1d6b253973405f04.mov)

The template includes the following dependencies:

```json
  "dependencies": {
    "@hookform/resolvers": "5.1.1",
    "@react-native-firebase/app": "22.2.0",
    "@react-native-firebase/auth": "22.2.0",
    "@react-native-firebase/firestore": "22.2.0",
    "@react-native-google-signin/google-signin": "14.0.0",
    "@react-native-vector-icons/material-design-icons": "12.0.0",
    "@react-navigation/bottom-tabs": "7.3.13",
    "@react-navigation/native": "7.1.9",
    "@react-navigation/native-stack": "7.3.13",
    "@tanstack/react-query": "5.77.2",
    "jail-monkey": "2.8.3",
    "react": "19.0.0",
    "react-hook-form": "7.57.0",
    "react-native": "0.78.0",
    "react-native-date-picker": "5.0.13",
    "react-native-gesture-handler": "2.25.0",
    "react-native-mmkv": "3.2.0",
    "react-native-reanimated": "3.18.0",
    "react-native-safe-area-context": "5.4.0",
    "react-native-screens": "4.10.0",
    "yup": "1.6.1",
    "zustand": "5.0.4"
  }
```

You can find more information about the dependencies in the [library catalog](https://crisangera.github.io/react-native-clean-architecture-docs/docs/libs)

## Get started

### 1. Install libs

Install node modules

```bash
bun install
```

Install pods

```bash
bun pod-install
```

### 2. Firebase

Crear un nuevo proyecto de firebase y agregar la app de Android e iOS o utilizar un proyecto de firebase existente

### 3. GCloud

- 3.1 Agregar una nueva credencial de tipo OAuth para Android, iOS y Web
- 2.2 Configurar el clienteId en firebase
- 3.3 Copiar las credenciales en el archivo src/config/secure-store.json

### 4. Run Project

```bash
bun start
```

```bash
bun android
```

```bash
bun ios
```
