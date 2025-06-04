# React Native Clean Architecture Template

👾 Simple and minimalistic template developed with clean architecture structure focused on maintainability and scalability.

## Get started

Install libs

```bash
bun install
```

### 1. Firebase

- 1.1 Crear un nuevo proyecto de firebase y agregar la app de Android e iOS o utilizar un proyecto de firebase existente
- 1.2 Configurar Android (google-service.json)

```grovy title="build.gradle"
  classpath 'com.google.gms:google-services:4.4.2'
```

```grovy title="app/build.gradle"
apply plugin: 'com.google.gms.google-services'
```

- 1.3 Configurar iOS (GoogleService-Info.plist)

```swift title="Podfile.lock"
use_frameworks! :linkage => :static
$RNFirebaseAsStaticFramework = true
```

```swift title="AppDelegate.swift"
import Firebase
FirebaseApp.configure()
```

### 2. GCloud

- 2.1 Agregar una nueva credencial de tipo OAuth para Android y iOS
- 2.2 Copiar las credenciales en el archivo src/config/secure-store.json

### 3. Run Project

```bash
bun start
```

```bash
bun android
```

```bash
bun ios
```
