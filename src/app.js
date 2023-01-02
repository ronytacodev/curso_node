// req = request -> petición del cliente
// res = response -> respuesta del servidor
// cliente = navegador

const express = require('express')
const {route} = require('./routers/index.routers')
const app = express()
const path = require('path')

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// ROUTES
// const routes =require('./routers/index.routers')
// app.use(routes)
app.use(require('./routers/index.routers'))

// STATIC FILES
app.use(express.static(path.join(__dirname, '../public')))
// console.log(__dirname)

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '404.html'));
})

app.listen(3000, () => {
    console.log('Servidor a la espera de conexiones')
})