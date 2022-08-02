# Desafio GraphQl
Desafío entregable para el curso de backend de Coderhouse

<h2 align="center">⭐️Desafio "VHS" ⭐️</h2>

## 🌐 [Ver Desafio en Heroku](https://guillesapag.herokuapp.com/login)

## 🤝Instalar dependencias
$ npm install

## ✨Iniciar el servidor con los diferentes modos de persistencia

$ npm start # --> Por defecto con MongoDB
$ PERSISTENCIA=memory node index.js # --> memoria


# Alternativamente se puede usar con nodemon, con los comandos:
$ npm run dev # --> Por defecto con MongoDB
$ npm run dev:firebase # --> firebase
$ npm run dev:memory # --> memoria


- Implementación del patrón Repository sobre los DAOs de Mensaje y Productos
- Reimplementación de las rutas de productos para pruebas


# Iniciar el servidor con los diferentes modos de persistencia
$ npm start # --> Por defecto con MongoDB
$ PERSISTENCIA=firebase node index.js # --> FIREBASE
$ PERSISTENCIA=memory node index.js # --> memoria


# Alternativamente se puede usar con nodemon, con los comandos:
$ npm run dev # --> Por defecto con MongoDB
$ npm run dev:firebase # --> firebase
$ npm run dev:memory # --> memoria
```

## Para realizar las pruebas implementadas: 

- Prueba cliente:
    - Visitar http://localhost:8080/pruebas
    - Las pruebas se imprimiran por la consola de ejecución del servidor

- Pruebas con mocha/chia/supertest
```bash
# Con el servidor iniciado en el modo que se quiera probar:
$ npm run test
```

#### Los reportes para cada uno de los métodos de persistencia se encuentran en el directorio tests/reports


# 🏠 [Homepage](https://github.com/Guillesap)

## 📝 License

Copyright © 2022 👤[Guillermo Sapag](https://vhsvideoclub.netlify.app/).

#### Los reportes para cada uno de los métodos de persistencia se encuentran en el directorio tests/reports