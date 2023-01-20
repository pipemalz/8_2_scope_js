//Declaración
var hola;
//Asignación
hola = 10;
//Declaración y Asignación
var hola = 20;
//Re-asignación
hola = 30
//Re-declaración
var hola = 40;

console.log(hola);


//Global Scope
var fruit = 'Apple';

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    //Asignación de una variable sin declararla, pasa a ser del scope Global.
    country = 'Colombia';
    console.log(country)
}

countries();
//Al estar en el scope global puedo hacer uso de ella fuera de la función.
console.log(country);
