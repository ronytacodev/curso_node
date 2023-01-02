const controller = {}
const title = 'INDEX DESDE EL SERVIDOR CON PUG Y DESDE UNA VARIABLE'

controller.index = (req, res) => {
        // res.send('La conexión ha sido muy correcta desde index.controller')
        res.render('index', {title})
}

module.exports = controller
