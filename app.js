// req = request -> petición del cliente
// res = response -> respuesta del servidor
// cliente = navegador

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('La conexión ha sido muy correcta')
}) 

app.listen(3000, () => {
    console.log('Servidor a la espera de conexiones')
})