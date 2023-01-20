//Todo lo que se encuentre entre {} está en scope de bloque.

function fruits() {
    if(true){
        var fruit = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
        console.log(fruit2 + "Scope de bloque");
        console.log(fruit3 + "Scope de bloque");
    }
    //Cuando una variable se declara con la palabra resevada var, esta puede ser llamada en el scope de funcion, independientemente si fue declarada en el scope de bloque.
    console.log(fruit + " scope de funcion");

    //Cuando una variable se declara con la palabra reservada let o const en scope de bloque, no puede ser usada por fuera de este. Si se llama fuera de este scope genera un error y detiene la ejecución del programa.
    console.log(fruit2 + " Scope de funcion");
    console.log(fruit3 + " Scope de funcion");
}

fruits();