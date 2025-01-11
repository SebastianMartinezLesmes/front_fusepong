## Pre-requisitos
Antes de comenzar con la creación del proyecto en FastAPI, asegúrate de cumplir con los siguientes requisitos:

1. **Node.js**
- Instalar Node.js: Descarga e instala la versión LTS de Node.js.
- Verificar instalación:
```prompt
node -V
npm -V
```

2. **npm o yarn (Opcional)**
- Viene instalado con Node.js, pero puedes actualizar npm
```prompt
npm install -g npm
```

3. **Ionic CLI** 
- Instalar el CLI globalmente:
```prompt
npm install -g @ionic/cli
```
- Verificar instalación:
```prompt
ionic -v
```

Si no está instalado, puedes instalarlo siguiendo las instrucciones oficiales: [https://pip.pypa.io/en/stable/installation/](https://pip.pypa.io/en/stable/installation/)

4. **Instalar Git**
- Instala Git para gestionar tu proyecto con control de versiones. Descárgalo desde: [https://git-scm.com/](https://git-scm.com/)
- Verifica su instalación ejecutando:
```prompt
git --version
git -V
```

## Creación de Proyecto
1. clona el proyecto desde git:
```prompt
git clone https://github.com/SebastianMartinezLesmes/front_fusepong.git
```

2. navega a la carpeta del proyecto: 
```prompt
cd front_fusepong
```

3. instalar dependencias:
```prompt
npm install
npm i
```

4. Ejecutar el Proyecto en el Navegador:
- Levanta el servidor de desarrollo para ver tu aplicación en el navegador
```prompt
ionic serve
```
- Abre [Puerto:8100](http://localhost:8100) en tu navegador para ver la aplicación en ejecución.

## Notas
1. **Verificar el estado del backend:**
Antes de iniciar el frontend, asegúrate de que el backend esté funcionando correctamente para evitar errores de conexión.
2. **Repositorio del Backend:**
El repositorio del backend del proyecto está disponible en el siguiente enlace: [Back](https://github.com/SebastianMartinezLesmes/back_fusepong)