/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bicicletas').del()
    .then(function () {
      // Inserts seed entries
      return knex('bicicletas').insert([
        {color: 'Azul', modelo: 'Tec CCM', lat:19.284770943610578 , lon:-99.13729060406136 },
        {color: 'Rojo', modelo: 'Acoxpa', lat: 19.3023345, lon:-99.1373265 },
        {color: 'Amarillo', modelo: 'Benotto', lat:19.2928252 , lon: -99.1396439}
      ]);
    })
};
