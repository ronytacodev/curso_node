const mongoose = require('mongoose')

const password = 'developer'
const dbname = 'pokedex'
const uri = `mongodb+srv://root:${password}@cluster0.nt3yocn.mongodb.net/${dbname}?retryWrites=true&w=majority`

// const connextion = () => {
//     mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
// }

// module.exports = connection

module.exports = () => mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}) 