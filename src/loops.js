//EJERCICIO 1 LOOPS
//Esta funcion debe retornar un numero con el total
//de aves de una array de las aves vistas en cada dia de la semana
// ejemplo:
// totalBirdCount([2, 4, 5, 3, 5, 7, 6]) => 32

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
function totalBirdCount(birdsPerDay) {
  //ESCRIBE TU CÓDIGO AQUI
}

//EJERCICIO 2 LOOPS
//Esta funcion debe retornar un numero
//con el total de aves vistas en una semana
//ejemplo:
// birdsInWeek([2,4,3,5,7,6,3,5,3,7,3,1,5,8,7,4,2,3], 1) => 30
// birdsInWeek([2,4,3,5,7,6,3,5,3,7,3,1,5,8,7,4,2,3], 2) => 32

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
function birdsInWeek(birdsPerDay, week) {
  //ESCRIBE TU CÓDIGO AQUI
}

//WHILE
//EJERCICIO 1 SWITCH
//En un negocio de Jugos hay varios tipos de jugos
//realiza una funcion que retorne la cantidad de minutos que
//toma preparar un tipo de jugo
//ejemplo:
// timeToMixJuice('Pure Strawberry Joy') => 0.5
// timeToMixJuice('Energizer') => 1.5
// timeToMixJuice('Green Garden') => 1.5
// timeToMixJuice('Tropical Island') => 3
// timeToMixJuice('All or Nothing') => 5

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
function timeToMixJuice(name) {
  //ESCRIBE TU CÓDIGO AQUI
}

//EJERCICIO 2 WHILE
// En el negocio hay turnos de trabajo y se maneja una lista de pedidos
// EL empleado 1 le faltan 2 minutos determina cuales bebidas faltan preparar
// cuando el empleado 2 inicie su turno
// ejemplo:
// remainingOrders(['Pure Strawberry Joy', 'Tropical Island', 'Energizer', 'Green Garden'], 3) => ['Energizer', 'Green Garden']
// remainingOrders(['Pure Strawberry Joy', 'All or Nothing', 'Energizer', 'Tropical Island', 'Green Garden'], 2) => ['Pure Strawberry Joy', 'Green Garden']

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft = timeLeft - timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
}

module.exports = {
  totalBirdCount,
  birdsInWeek,
  timeToMixJuice,
  remainingOrders,
};
