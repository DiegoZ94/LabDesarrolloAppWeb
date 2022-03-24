const knex = require('../database/connection');


/*
let Bicicleta = function(id, color, modelo, lat, lon){
    this.id = id
    this.color = color
    this.modelo = modelo
    this.lat = lat
    this.lon = lon
}
*/
exports.create = (bici) => {
    return knex('bicicletas')
      .insert({color: bici.color, modelo: bici.modelo, lat: bici.lat, lon: bici.lon });
}

exports.all = () =>{
    return knex.select('*').from('bicicletas');
}

exports.removeById = (aBiciId) =>{
    
    idP = parseInt(aBiciId)
    return knex('bicicletas').where({id: idP}).del();
}

exports.findById = (aBiciId) =>{
    idP = parseInt(aBiciId)
    let aBici = knex.select('*').from('bicicletas').where({id: idP}).first();
    if(aBici){
        console.log(aBici.color)
        return aBici
    }
    else{
        throw new Error(`No existe una bici con el id: ${aBiciId}`)
    }
}

exports.update = (id, bici) => {
    return knex('bicicletas')
      .update(bici)
      .update('updated_at', knex.fn.now())
      .where('id', parseInt(id));
}


/*
Bicicleta.prototype.toString = function(){
    return `id: ${this.id}, color: ${this.color}`
}

Bicicleta.allBicis = []

Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici)
}

//Eliminar
Bicicleta.findById = function(aBiciId){
    let aBici = Bicicleta.allBicis.find(x => x.id == aBiciId)
    if(aBici){
        return aBici
    }
    else{
        throw new Error(`No existe una bici con el id: ${aBiciId}`)
    }
}

Bicicleta.removeById = function(aBiciId){
    for(let i = 0; i < Bicicleta.allBicis.length; i++){
        if(Bicicleta.allBicis[i].id == aBiciId){
            //Borrar
            Bicicleta.allBicis.splice(i, 1)
            break
        }
    }
}

//Añadir un par de bicis:
//let b1 = new Bicicleta(1, 'rojo', 'bmx', 19.284770943610578, -99.13729060406136)
//let b2 = new Bicicleta(2, 'blanca', 'Benotto', 19.286055116801744, -99.1369912899661)

//Bicicleta.add(b1)
//Bicicleta.add(b2)

module.exports = Bicicleta*/