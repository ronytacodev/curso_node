const controller = {}
const connection = require('../dbConnection/connection')
const PokeModel = require('../models/pokemon.model')

controller.index = async (req, res) => {
        try {
                // res.send('La conexión ha sido muy correcta desde index.controller')
                const title = 'INDEX DESDE EL SERVIDOR CON PUG Y DESDE UNA VARIABLE'
                await connection()
                const allPokemons = await PokeModel.find()
                console.log(allPokemons)
                console.log('CONNECTION OK WITH NODEMON')
                res.render('index', {title})

        } catch (err) {
                console.error(err) 
        }

}

module.exports = controller

