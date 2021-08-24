# basement.studio challenge: b. Supply

Codigo para [basement.studio challenge: b. Supply](https://github.com/goncy/basement-challenge).

E-commerce de una pagina con el diseño de [este figma](https://www.figma.com/file/BYjaSbdPyhEL0ucneDlIQ0/Dev-Challenge?node-id=1%3A218) construido en Next JS.

[Preview](https://basement-challenge-swart.vercel.app/) del challenge.

## Stack

- [Next JS](https://nextjs.org/) como framework.
- [Typescript](https://www.typescriptlang.org/) javascipt estricto.
- [Tailwind CSS](https://tailwindcss.com/) CSS framework.
- [Cypress](https://www.cypress.io/) para tests de integración.
- [ESLint](https://eslint.org/) para encontrar y resolver problemas en el codigo.
- [Prettier](https://prettier.io/) para formatear el codigo
- [Framer Motion](https://www.framer.com/motion/) solo para pequeñas animaciones.

## ¿Como funciona? 🤔

Se construyo un provider para el manejo del estado para el carrito usando `useContext` y `useReducer` que encapsula a toda la aplicación, los productos se obtienen de un mockup local renderizados en la pagina de inicio.

Cuando se agrega un producto al carrito el estado se actualizara con `dispatch` `type: ADD_PRODUCT` mandando todo el objeto del producto actual añadiendo valores adicionales como la cantidad y valores por defecto como el tamaño.

Se puede agregar o disminuir la cantidad de un producto con `dispatch` `type PLUS_ONE` ó `type MINUS_ONE` mandando el id del producto, cuando la cantidad es uno y se presiona el boton `-` este se eliminara del carrito automaticamente.

Los datos del carrito se guardan en el `local storage` y se muestran en consola cuando se presiona el boton de `checkout`.

## TODOs

- Tests unitarios con [Jest](https://jestjs.io/) y [React testing library](https://testing-library.com/).
- Optimizacion de renderizacion de los componentes.
- Arreglar deslizamiento del texto `A man can’t have enough base­ment swag` en la pagina de inicio para pantallas pequeñas.

## Instalación

- Instalar las dependencias del proyecto: `npm install`.
- Correr el servidorde desarrollo: `npm run dev`.
