# Netfilm

> Es un clon de Netflix muy básico que se conecta a la base de datos de una API de películas para mostrar por pantalla las listas de las distintas categorías.
> Video demo in [ YouTube ](https://youtu.be/g6nDENxjK3c).

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [Contact](#contact)

## General Information

- La App permite crear usuarios a través de la API Firebase y loguearse.
- Un usuario logueado puede navegar por la lista de películas que se cargan de la API The Movie Data Base.
- La App es responsive y se adapta perfectamente a los dispositívos móviles.

## Technologies Used

- Arquitectura básica creada con [ React-Redux ](https://react-redux.js.org/introduction/getting-started).
- Hojas de estilos con Sass y uso de componentes de [ React Bootstrap ](https://react-bootstrap.github.io/getting-started/introduction/).
- Creación de rutas con React [ Router Dom ](https://www.npmjs.com/package/react-router-dom).
- Peticiones a las API's con [ Axios ](https://www.npmjs.com/package/axios).
- Creación y autenticación de usuarios con [ Firebase ](https://firebase.google.com/).
- Base de datos de películas de [ The Movie Data Base ](https://www.themoviedb.org).

## Features

- Contraseñas encriptadas por Firebase.
- Full responsive.
- Las portadas de las películas se acutalizan gracias a TMDB.

## Setup

1- Instalar todas las dependencias ejecutando 'npm install' desde la terminal (asegurarse de estar dentro de la carpeta 'netfilm').
<br/>
2- Crear una cuenta gratuita en [ The Movie Data Base ](https://www.themoviedb.org).
<br/>
3- Solicitar la API Key en settings/API y click en 'Create'. Copiar la API Key.
<br/>
4- Abrir el archivo 'Request.js' en /src y pegar la API Key de TMDB donde dice '<<< API KEY DE TMDB >>>'. Guardar.
<br/>
5- Crear una cuenta gratuita en [ Firebase ](https://firebase.google.com/).
<br/>
6- Ir a 'Go to console' situado arriba a la derecha para acceder a las herramientas de developer.
<br/>
7- Agregar proyecto y nombrarlo 'netfilm'.
<br/>
8- Desactivar 'Habilitar Google Analytics para este proyecto' ya que no lo utilizaremos.
<br/>
9- Ir a 'Authentication' y darle a 'Comenzar'.
<br/>
10- Seleccionar 'Correo electrónico/contraseña' y habilitar la primera opción. Guardar.
<br/>
11- Ir al engranaje de opciones ubicado en la barra izquierda superior e ir a 'Configuración del proyecto'.
<br/>
12- Bajar hacia 'Tus apps' y clickear en el ícono </> para agregar un nuevo proyecto.
<br/>
13- Poner 'Netfilm' de nombre y dar en 'Registrar app' (no aceptar el hosting).
<br/>
14- Cuando termina ir abajo y pinchar en 'Ir a la consola'.
<br/>
15- Dentro de la nueva app 'Netfilm' pinchar la opción radio 'Config' y copiar toda la función 'firebaseConfig()'.
<br/>
16- Abrir el archivo 'firebase.js' en /src y reemplazar la función 'firebaseConfig()'. Guardar.
<br/>
17- Ejecutar el servidor con 'npm start' desde la termianal.

## Contact

Created by [Franco Amoroso](https://www.linkedin.com/in/francoamoroso/) - feel free to contact me! Cheers!
