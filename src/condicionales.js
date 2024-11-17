//EJERCICIO 1 CONDICIONALES
//Esta funcion debe retornar una valor booleano
//para determinar si es necesario una licencia de conducir
//dependiendo del tipo de vehiculo
//si es car o truck es necesario licencia
//si es bicycle o motorcycle no es necesario licencia
// ejemplo:
// needsLicense('car') => true
// needsLicense('truck') => true
// needsLicense('bicycle') => false
// needsLicense('motorcycle') => false

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
function needsLicense(kind) {
  //ESCRIBE TU CÓDIGO AQUI
}

//EJERCICIO 2 CONDICIONALES
//Esta funcion debe retornar un string
//que retornara el primer resultado orden alfabetico de dos nombres de vehiculos
//si los nombres son iguales retorna "they are the same kind of vehicle"
//ejemplo:
// chooseVehicle('chevrolet', 'ford') => "chevrolet is the best choice"
// chooseVehicle('mazda', 'ford') => "ford is the best choice"
// chooseVehicle('mazda', 'mazda') => "they are the same kind of vehicle"

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
function chooseVehicle(option1, option2) {
  //ESCRIBE TU CÓDIGO AQUI
}

//EJERCICIO 3 CONDICIONALES
//Esta funcion debe retornar el valor de devaluo de acuerdo
//a los años del vehiculo y el precio original
//si es menor de 3 años el precio es el 80% del precio original
//si es mayor de 3 años y menor de 10 el precio es el 70% del precio original
//si es mayor de 10 el precio es el 50% del precio original
//ejemplo:
// calculateResellPrice(1000, 5) => 700
// calculateResellPrice(1000, 10) => 500
// calculateResellPrice(1000, 2) => 800

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
function calculateResellPrice(originalPrice, age) {
  //ESCRIBE TU CÓDIGO AQUI
}

module.exports = { needsLicense, chooseVehicle, calculateResellPrice };
