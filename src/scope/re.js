//var

//Declaracion

var firstName; //undefined

//Asignación
firstName = 'Felipe';

console.log(firstName);

//Asignación y Declaración
var lastName = 'Moreno';

//Reasignación
lastName = 'Gómez';

console.log(lastName);

var secondName = "Luis";
var secondName = "Jacinto";

console.log(secondName);

//let

//Declaración
let vacio; //undefined

//Declaración y asignación
let fruit = 'Apple';
console.log(fruit)

//Reasignación
fruit = 'Mango';
console.log(fruit)

//Cuando se declara una variable con let, esta no se puede redeclarar, al realizar esto la aplicación no se ejecutará.
// let fruit = 'Orange';


//const
//Declaración y asignación
const animal = 'Dog';
console.log(animal);

//Las variables declaradas con const no se pueden redeclarar ni reasignar. Etonces son constantes.
//const animal = 'Hola';
//animal = 'Cat';
//console.log(animal);

const vehicles = [];

vehicles.push("Renault");
vehicles.push("Mazda");
console.log(vehicles)
vehicles.shift();
console.log(vehicles)
vehicles.unshift('KIA');
console.log(vehicles);