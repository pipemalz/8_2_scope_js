function greeting() {
    //Declaración de variable en el scope de función.
    let username = 'Ana';
    console.log(username);

    if(username === 'Ana'){
        console.log("Hello " + username);
    }
}

greeting();

//Error dado que la variable se declaró en el scope de la función greeting por lo tanto no se puede llamar fuera de esta.
console.log(username)