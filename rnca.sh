#!/bin/bash

# ==============================================================================
# rn-template.sh
# Herramienta CLI para estandarizar la creación de proyectos React Native
# a partir de una plantilla de arquitectura limpia.
#
# Uso:
#   ./rn-template.sh init --name "MiNuevaApp"
#   ./rn-template.sh scaffold
# ==============================================================================

# --- Configuración ---

# Detener el script inmediatamente si cualquier comando falla.
set -e

# Ruta a la plantilla base. Modifica esto según la ubicación de tu plantilla.
TEMPLATE_PATH="../react-native-clean-architecture"

# --- Estilos y Colores para los Mensajes ---
COLOR_GREEN='\033[0;32m'
COLOR_BLUE='\033[0;34m'
COLOR_YELLOW='\033[1;33m'
COLOR_RED='\033[0;31m'
NC='\033[0m' # Sin Color

# --- Funciones de Ayuda (Logging) ---

# Muestra un mensaje de información (azul).
log_info() {
  echo -e "${COLOR_BLUE}\n⚙️  $1${NC}"
}

# Muestra un mensaje de éxito (verde).
log_success() {
  echo -e "${COLOR_GREEN}✅ $1${NC}"
}

# Muestra una advertencia (amarillo).
log_warn() {
  echo -e "${COLOR_YELLOW}⚠️  $1${NC}"
}

# Muestra un error y termina el script (rojo).
log_error() {
  echo -e "${COLOR_RED}❌ Error: $1${NC}" >&2
  exit 1
}

# --- Implementación de Comandos ---

# Comando 'init': Inicializa un nuevo proyecto.
run_init() {
  local PROJECT_NAME=""

  # Extrae el argumento --name.
  shift # Quita 'init' de la lista de argumentos.
  while [[ $# -gt 0 ]]; do
    case "$1" in
      --name)
        PROJECT_NAME="$2"
        shift 2 # Avanza más allá del argumento y su valor.
        ;;
      *)
        log_error "Argumento desconocido '$1' para el comando init."
        ;;
    esac
  done

  # Valida que el nombre del proyecto fue proporcionado.
  if [ -z "$PROJECT_NAME" ]; then
    log_error "El argumento --name es obligatorio."
    echo "Uso: ./rn-template.sh init --name \"MiNuevaApp\""
    exit 1
  fi

  log_info "🚀 Iniciando un nuevo proyecto llamado: $PROJECT_NAME"

  # 1. Validar que la ruta de la plantilla exista.
  log_info "Verificando la ruta de la plantilla en '$TEMPLATE_PATH'..."
  if [ ! -d "$TEMPLATE_PATH" ]; then
    log_error "El directorio de la plantilla no se encuentra. Revisa la variable TEMPLATE_PATH."
  fi
  log_success "Ruta de la plantilla encontrada."

  # 2. Copiar archivos y directorios base desde la plantilla.
  log_info "Configurando archivos base..."
  cp "$TEMPLATE_PATH/package.json" .
  cp "$TEMPLATE_PATH/.prettierrc.js" .
  cp "$TEMPLATE_PATH/.eslintignore" .
  cp "$TEMPLATE_PATH/babel.config.js" .
  cp "$TEMPLATE_PATH/tsconfig.json" .
  cp "$TEMPLATE_PATH/ReactotronConfig.js" .
  cp "$TEMPLATE_PATH/index.js" .
  cp -r "$TEMPLATE_PATH/.trae" .
  cp -r "$TEMPLATE_PATH/.vscode" .
  mkdir -p src
  cp -r "$TEMPLATE_PATH/src/config" src/
  log_success "Archivos base copiados."

  # 3. Modificar el package.json con el nuevo nombre de proyecto.
  log_info "Actualizando package.json..."
  if ! command -v jq &> /dev/null; then
    log_error "'jq' no está instalado. Por favor, instálalo para continuar (ej: brew install jq)."
  fi
  # Se usa un archivo temporal para mayor seguridad y compatibilidad entre sistemas.
  jq --arg name "$PROJECT_NAME" '.name = $name' "package.json" > "package.json.tmp" && mv "package.json.tmp" "package.json"
  log_success "package.json actualizado con el nombre '$PROJECT_NAME'."

  # 4. Instalar dependencias.
  log_info "📦 Instalando dependencias... (Esto puede tardar unos minutos)"
  bun install && bun prepare
  log_success "Dependencias instaladas correctamente."

  # 5. Configurar iconos de iOS (Info.plist).
  log_info "📱 Configurando Info.plist para iOS..."
  local IOS_INFO_PLIST_PATH="ios/$PROJECT_NAME/Info.plist"
  if [ -f "$IOS_INFO_PLIST_PATH" ]; then
      npx rnvi-update-plist package.json "$IOS_INFO_PLIST_PATH"
      log_success "Info.plist actualizado."
  else
      log_warn "No se encontró '$IOS_INFO_PLIST_PATH'. Omitiendo este paso."
      log_warn "Asegúrate de que el proyecto iOS ('/ios') exista y tenga la estructura correcta."
  fi
  
  # 5.1. Modificar Podfile para añadir configuración de Firebase
  log_info "🔥 Configurando Podfile para Firebase..."
  local PODFILE_PATH="ios/Podfile"
  if [ -f "$PODFILE_PATH" ]; then
      # Crear un archivo temporal para la modificación
      local TEMP_PODFILE="${PODFILE_PATH}.tmp"
      
      # Buscar la línea 'target' y añadir las líneas necesarias antes de ella
      awk -v name="$PROJECT_NAME" '/target .'"$PROJECT_NAME"'. do/{print "use_frameworks! :linkage => :static\n$RNFirebaseAsStaticFramework = true\n"; print; next}1' "$PODFILE_PATH" > "$TEMP_PODFILE"
      
      # Reemplazar el archivo original con el modificado
      mv "$TEMP_PODFILE" "$PODFILE_PATH"
      
      log_success "Podfile actualizado con configuración para Firebase."
  else
      log_warn "No se encontró el archivo Podfile en '$PODFILE_PATH'. Omitiendo este paso."
      log_warn "Asegúrate de que el proyecto iOS ('/ios') exista y tenga la estructura correcta."
  fi
  
  # 6. Verificar si estamos en macOS, luego instalar CocoaPods y Pods de iOS si es necesario.
  if [[ "$(uname)" == "Darwin" ]]; then
    log_info "🍎 Sistema operativo macOS detectado. Procediendo con la instalación de pods..."
    
    log_info "🍫 Instalando CocoaPods..."
    bun pod-cocoa
    
    log_info "🍫 Instalando Pods de iOS..."
    bun pod-install
    log_success "Pods instalados."
  else
    log_warn "🖥️ No se detectó macOS. Omitiendo la instalación de CocoaPods y pods de iOS."
    log_info "Este paso solo es necesario en sistemas macOS para desarrollo de iOS."
  fi

  echo ""
  log_success "¡Proyecto inicializado con éxito!"
  log_info "Ahora puedes ejecutar './rn-template.sh scaffold' para generar la arquitectura de carpetas."
}

# Comando 'scaffold': Aplica la estructura de carpetas y módulos.
run_scaffold() {
  log_info "🏗️  Aplicando scaffolding de la arquitectura..."

  # 1. Validar si el directorio 'src' ya existe para evitar sobreescritura.
  # if [ -d "src" ]; then
  #   log_warn "El directorio 'src' ya existe."
  #   read -p "¿Deseas continuar y sobreescribir la estructura base? (y/n): " response
  #   # Convertir la respuesta a minúsculas para la comparación.
  #   if [[ ! "${response,,}" =~ ^(y|yes)$ ]]; then
  #     log_info "🛑 Operación cancelada por el usuario."
  #     exit 0
  #   fi
  # fi
  
  # 2. Crear/Copiar la estructura de carpetas y archivos base.
  log_info "Creando estructura de directorios en 'src/'..."
  cp -r "$TEMPLATE_PATH/.husky" .
  cp "$TEMPLATE_PATH/App.tsx" .
  cp -r "$TEMPLATE_PATH/src/components" src/
  cp -r "$TEMPLATE_PATH/src/containers" src/
  cp -r "$TEMPLATE_PATH/src/theme" src/
  log_success "Estructura base creada."

  # 3. Crear/Copiar los módulos de la aplicación.
  log_info "Creando módulos base en 'src/modules'..."
  mkdir -p src/modules
  cp -r "$TEMPLATE_PATH/src/modules/authentication" src/modules/
  cp -r "$TEMPLATE_PATH/src/modules/navigation" src/modules/
  cp -r "$TEMPLATE_PATH/src/modules/user" src/modules/
  log_success "Módulos de la aplicación creados."

  # 4. Agregar firebase en iOS AppDelegate.swift
  log_info "🔥 Configurando Firebase en iOS AppDelegate.swift..."
  
  # Obtener el nombre del proyecto desde package.json
  local PROJECT_NAME=$(jq -r '.name' package.json)
  if [ -z "$PROJECT_NAME" ]; then
    log_warn "No se pudo obtener el nombre del proyecto desde package.json. Usando 'AwesomeProject' como valor predeterminado."
    PROJECT_NAME="AwesomeProject"
  fi
  
  local APP_DELEGATE_PATH="ios/$PROJECT_NAME/AppDelegate.swift"
  if [ -f "$APP_DELEGATE_PATH" ]; then
    # Crear un archivo temporal para la modificación
    local TEMP_APP_DELEGATE="${APP_DELEGATE_PATH}.tmp"
    
    # Agregar import Firebase después de import ReactAppDependencyProvider
    sed 's/import ReactAppDependencyProvider/import ReactAppDependencyProvider\nimport Firebase/' "$APP_DELEGATE_PATH" > "$TEMP_APP_DELEGATE"
    
    # Agregar FirebaseApp.configure() antes de self.moduleName
    sed 's/self\.moduleName/FirebaseApp.configure()\n    self.moduleName/' "$TEMP_APP_DELEGATE" > "${APP_DELEGATE_PATH}.tmp2"
    
    # Reemplazar el archivo original con el modificado
    mv "${APP_DELEGATE_PATH}.tmp2" "$APP_DELEGATE_PATH"
    rm -f "$TEMP_APP_DELEGATE"
    
    log_success "Firebase configurado en AppDelegate.swift para el proyecto $PROJECT_NAME."
  else
    log_warn "No se encontró el archivo AppDelegate.swift en '$APP_DELEGATE_PATH'. Omitiendo este paso."
    log_warn "Asegúrate de que el proyecto iOS ('/ios') exista y tenga la estructura correcta."
  fi
  
  # 5. Agregar firebase en Android build.gradle y app/build.gradle
  log_info "🔥 Configurando Firebase en Android..."
  
  # Modificar android/build.gradle para agregar classpath de Google Services
  local ANDROID_BUILD_GRADLE="android/build.gradle"
  if [ -f "$ANDROID_BUILD_GRADLE" ]; then
    # Crear un archivo temporal para la modificación
    local TEMP_BUILD_GRADLE="${ANDROID_BUILD_GRADLE}.tmp"
    
    # Agregar classpath de Google Services después de dependencies {
     sed 's/dependencies {/dependencies {\n        classpath "com.google.gms:google-services:4.4.2"/' "$ANDROID_BUILD_GRADLE" > "$TEMP_BUILD_GRADLE"
    
    # Reemplazar el archivo original con el modificado
    mv "$TEMP_BUILD_GRADLE" "$ANDROID_BUILD_GRADLE"
    
    log_success "Configuración de Google Services agregada a android/build.gradle."
  else
    log_warn "No se encontró el archivo build.gradle en '$ANDROID_BUILD_GRADLE'. Omitiendo este paso."
  fi
  
  # Modificar android/app/build.gradle para aplicar el plugin de Google Services
  local APP_BUILD_GRADLE="android/app/build.gradle"
  if [ -f "$APP_BUILD_GRADLE" ]; then
    # Agregar apply plugin al final del archivo
    echo "apply plugin: 'com.google.gms.google-services'" >> "$APP_BUILD_GRADLE"
    
    log_success "Plugin de Google Services aplicado en android/app/build.gradle."
  else
    log_warn "No se encontró el archivo build.gradle en '$APP_BUILD_GRADLE'. Omitiendo este paso."
  fi
  
  echo ""
  log_success "¡Scaffolding completado! \n La arquitectura ha sido aplicada a tu proyecto."
}

# --- Lógica Principal del Script ---

# Función principal que dirige el flujo del script.
main() {
  local COMMAND=$1

  if [ -z "$COMMAND" ]; then
    log_error "No se proporcionó ningún comando."
    echo "Comandos disponibles: init, scaffold"
    echo "Uso: $0 [comando] [argumentos]"
    exit 1
  fi

  case "$COMMAND" in
    init)
      run_init "$@"
      ;;
    scaffold)
      run_scaffold "$@"
      ;;
    *)
      log_error "Comando desconocido: '$COMMAND'."
      echo "Comandos disponibles: init, scaffold"
      exit 1
      ;;
  esac
}

# Ejecutar la función principal con todos los argumentos pasados al script.
main "$@"

