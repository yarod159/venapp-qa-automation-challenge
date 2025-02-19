````md
# README - Pruebas Automatizadas y de Rendimiento

## Descripción del Proyecto

Este proyecto contiene pruebas automatizadas para el sitio web **venapp.com** utilizando **Cypress** y pruebas de rendimiento con **K6**. Además, se ha implementado **Mochawesome** para la generación de reportes detallados de ejecución de pruebas.

## Tecnologías Utilizadas

- **Cypress**: Para pruebas end-to-end (E2E).
- **K6**: Para pruebas de rendimiento.
- **Mochawesome**: Para la generación de reportes en Cypress.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu entorno:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [NPM](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)

## Instalación

Clona este repositorio y ejecuta los siguientes comandos:

```sh
# Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>

# Instalar dependencias
npm install
````

## Ejecución de Pruebas


Para ejecutar las pruebas en modo headless:

```sh
npx cypress run
```

Para ejecutar con fireFox las pruebas en modo headless (Recomendado):

```sh
npm run cy:firefox
```

Para abrir la interfaz interactiva de Cypress:

```sh
npx cypress open
```


### 2. Generación de Reportes con Mochawesome

Las pruebas generarán automáticamente reportes en formato HTML y JSON en la carpeta `cypress/reports`. Para visualizar el reporte debe instalar :

```sh
npm i --save-dev cypress-mochawesome-reporter
```
Luego ejecutar una prueba en modo headless 

```sh
npx cypress run
```
despues ir a la carpeta de reports>html> presionar click derecho en index.html "copy path" y pegar en el navegador de tu preferencia 

### 3. Pruebas de Rendimiento con K6

Para ejecutar el test de carga definido:

```sh
k6 run tests/performance-test.js
```


