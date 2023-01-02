// req = request -> petición del cliente
// res = response -> respuesta del servidor
// cliente = navegador

const express = require('express')
const {route} = require('./routers/index.routers')
const app = express()

// ROUTES
// const routes =require('./routers/index.routers')
// app.use(routes)
app.use(require('./routers/index.routers'))

app.listen(3000, () => {
    console.log('Servidor a la espera de conexiones')
})