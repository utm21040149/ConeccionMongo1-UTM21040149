const mongoose = require('mongoose')
const url_bd = 'mongodb://localhost:27017/BASE-DE-DATOS'

mongoose.connect(url_bd)
.then (() =>{
    console.log('Se pudo conectar a la Base de Datos con existo Americanista promedio')
})

.catch(()=>{
        console.log('Fue culpa de Yessica por llegar temprano')
})

const Cant_Libros = new mongoose.Schema(
    {
        Libro1 :{
            type: String
        },
        Libro2:{
            type: String
        },
        Libro3:{
            type: String
        },
        Libro4:{
            type: String
        },
        Libro5:{
            type: String
        },
        Libro6:{
            type: String
        },Libro7:{
            type: String
        }
    }
)

const Coleccion_Libros = new mongoose.model('Titulo de Nombre', Cant_Libros)

Coleccion_Libros.create({
    Libro1: "La Gloria",
    Libro2: "La Divina Comedia",
    Libro3: "Habitos Atomicos",
    Libro4: "Batman",  
    Libro5: "Dark Souls",
    Libro6: "WW2",
    Libro7: "Como ganarle a tu novia en una discucion",
})