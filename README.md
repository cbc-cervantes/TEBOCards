# TEBO Cards
Juego de cartas personalizable en tiempo real.

*ReactJS - Express - SocketIO - Sass*

Personaliza las cartas para crear tus propias reglas

***Este proyecto aún sigue en desarrollo , actualmente solo se puede explorar la página principal***

![TEBO Cards](https://raw.githubusercontent.com/cbc-cervantes/TeboCards/master/preview.png "TEBO Cards")


## Ejecutar aplicación

#### Instalar dependencias 
```bash
npm install
```

#### Servidor de desarrollo

Disponible en localhost:3000

```bash
npm run dev
```

#### Construir aplicación

```bash
npm run build
```

#### Servidor de producción

Disponible en localhost:3000

```bash
npm run start
```

## Contenedor de docker

#### Construir imagen 

```bash
docker build -t tebo-cards .
```

#### Iniciar contenedor

Imagen local

```bash
docker run --name tebo-cards-1 -d -p 3000:3000 tebo-cards 
```

Imagen remota

```bash
docker run --name tebo-cards-1 -d -p 3000:3000 cbccervantes/tebo-cards 
```

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)
