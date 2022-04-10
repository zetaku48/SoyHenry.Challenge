// No cambiar nombre de funciones.

function mayorMenosMenor(arr) {
    // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
    // NOTA: No utilizar los métodos "min" y "max" de "Math".
    //
    // Tu código:

    var mayor = undefined
    var menor = undefined
    var resta = undefined
    for (var i = 0; i < arr.length; i++) {
        if (mayor != undefined && arr[i] >= mayor) {
            mayor = arr[i]
        }
        if (mayor == undefined) {
            mayor = arr[i]
        }
        if (menor != undefined && arr[i] <= menor) {
            menor = arr[i]
        }
        if(menor == undefined){
            menor = arr[i]
        }
    }
    resta = (mayor - menor)
    return resta
    }

function ingredienteEnMalEstado(menu, comida, ingrediente) {
    // El ingrediente de cierta comida está en mal estado. Hay que sacar los ingredientes próximos a éste,
    // ya que deben estar contaminados también.
    // La funcion recibe un objeto "menu" que contiene las comidas del día. "comida" es un array de ingredientes.
    // Si "ingrediente" está en el array, devolver un array con el ingrediente y los elementos en un índice de 
    // diferencia.
    // Ej:
    /* let menuDelDia = {
        raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
        bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
        tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
    } */
    // ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto") devuelve => ["Aceite", "Peceto", "Ricota"];
    // ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite") devuelve => ["Pollo", "Aceite", "Huevos"];
    // En caso de no encontrarse el ingrediente en la comida, devolver "El menú está perfecto".
    // NOTA: No utilizar el método "includes".
    //
    // Tu código:
   var ingredienteM = []
   var plato = menu[comida]
    for (i = 0; i < plato.length; i++){
        if (ingrediente == plato[i]) {
            ingrediente1 = plato[i-1]
            ingrediente2 = plato[i]
            ingrediente3 = plato[i+1]
            if(ingrediente1 && ingrediente3){
                ingredienteM = [ingrediente1,ingrediente2,ingrediente3]
            }
            else if(ingrediente1){
                ingredienteM = [ingrediente1,ingrediente2]
            }
            else if(ingrediente3){
                ingredienteM = [ingrediente2,ingrediente3]
            }
        }
    }
    if (ingredienteM != undefined) {
        return ingredienteM
    }
    else return "El menú está perfecto"
    };

function bienvenidoSr(persona) {
    // La funcion recibe un objeto "persona".
    // de la forma: 
    // {
    //  nombre: 'Lionel
    //  apellido: 'Messi',
    //  invitado: true
    //  }
    // Si tiene la propiedad "invitado" y, además, tiene las propiedades "nombre" y "apellido", tomar esos valores y retorna:
    // "Lionel Messi, un gusto tenerlo nuevamente! Bienvenido".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "apellido", retornar:
    // "Bienvenido Sr. Messi".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "nombre", retornar:
    // "Hola Lionel, tu mesa está lista".
    // En caso de que no tenga la propiedad "invitado" retornar:
    // "Disculpe señor, no está invitado a la fiesta".
    //
    // Tu código:
    if (persona.invitado != undefined) {
        if (persona.nombre != undefined && persona.apellido != undefined) {
            return persona.nombre +" "+ persona.apellido + ", un gusto tenerlo nuevamente! Bienvenido";
            
        }
        if (persona.nombre == undefined) {
            return "Bienvenido Sr. " + persona.apellido
        }
        if (persona.apellido == undefined) {
            return "Hola " + persona.nombre+ ", tu mesa está lista"
        }
    }
    return "Disculpe señor, no está invitado a la fiesta"
       

};

function obtenerSoloLosMejores(estudiantes, nota1, nota2) {
    // "estudiantes" es un array de objetos "estudiante". Crea un nuevo array con el nombre y apellido de los estudiantes
    // que en sus propiedades "check1" y "check2", tengan una nota mayor o igual a "nota1" y "nota2" respectivamente.
    // Ej:
    /* var estudiantes = [
        { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
        { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
        { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
        { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}
    ] */
    // obtenerSoloLosMejores(estudiantes, 15, 15); retorna => ["Fulanito Rodriguez", "Perengano Leiria"];
    //
    // Tu código:

    var Estudiante = []

    for (i = 0; i < estudiantes.length; i++)
        if (estudiantes[i].check1 >= nota1 && estudiantes[i].check2 >= nota2){
         Estudiante.push(estudiantes[i].nombre + " " + estudiantes[i].apellido)
     }
    return Estudiante
};

function buscaDestruye(arreglo, num) {
    // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
    // Esta funcion tiene que eliminar los numeros del array que coincidan con el numero recibido como argumento (num).
    // La función debe retornar el array sin los números sacados.
    // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
    // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
    // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
    //
    // Tu código aca:
    return arreglo.filter( (e) => e != num)
};

function clavesUnicas(obj1, obj2) {
    // La funcion recibe dos objetos "obj1" y "obj2".
    // Retornar las keys de las propiedades que sean únicas en cada objeto.
    // Ej:
    // let obj1 = {nombre: "Luciano", apellido: "Nicolau"}
    // let obj2 = {nombre: "Lio", segundoNombre: "Gustavo"}
    // clavesUnicas(obj1, obj2) retorna => ["apellido", "segundoNombre"];
    //
    // Tu código`:

    var clave1 = Object.keys(obj1)
    var clave2 = Object.keys(obj2)
    var resultado = []
    for(var i = 0 ; i < clave1.length; i++){
        if(!clave2.includes(clave1[i])){
            resultado.push(clave1[i])
        }
    }
    for(var a = 0 ; a < clave2.length; a++){
        if(!clave1.includes(clave2[a])){
            resultado.push(clave2[a])
        }
    }
    return resultado
};

function invertirLetras(frase) {
    // La funcion recibe un string "frase". Convertir las letras en minúsculas a mayúsculas y viceversa y devolver
    // la frase con dichos cambios.
    // TIP: Usar toLowerCase y toUpperCase
    // Para saber si un char es upper o lower, comparalo con el mismo char en upper o lower;
    // ej:
    //  'i' === 'i'.toLowerCase(); -> es lower;
    //  'I' === 'I'.toLowerCase()l -> no es lower;
    // Tu código:

    var resultado = ""
    for (let ind in frase){
        let a = frase[ind]
        if (a != a.toLowerCase()){
            resultado = resultado + a.toLowerCase()

        }
        else {
            resultado = resultado + a.toUpperCase()
        }
    }
    return resultado
}

// =======================================================================

function crearClaseAlumno() {
    class Alumno {
        constructor (nombre, apellido, cohorte, grupoDeAmigos, notasCheckpoints) {
            // El constructor de la clase recibe nombre (string), apellido (string), cohorte (number), 
            // grupoDeAmigos (array de objetos), notasCheckpoints (array de numbers).
            // Inicializar las propiedades del alumno con los valores recibidos como argumento.
            //
            // Tu código:
            this.nombre = nombre
            this.apellido = apellido
            this.cohorte = cohorte
            this.grupoDeAmigos = grupoDeAmigos
            this.notasCheckpoints = notasCheckpoints
            
        };

        addAmigos(nombre, apellido) {
            // Este método debe agregar amigos al array de grupoDeAmigos del alumno.
            // Añade un objeto con las propiedades "nombre", "apellido" y "cohorte" (siendo 
            // el value de cohorte el mismo que tiene asignado la instancia de "Alumno") 
            // en el array de grupoDeAmigos.
            // No debe retornar nada.
            //
            // Tu código:
            var cohorte = this.cohorte
            this.grupoDeAmigos.push({nombre, apellido, cohorte})
        };

        obtenerAmigos() {
            // Este método debe devolver la cantidad de amigos que tiene el alumno.
            //
            // Tu código:
            return this.grupoDeAmigos.length
        };

        addNota(nota) {
            // Este método añade una nota al array de notasCheckpoints
            // No debe retornar nada.
            //
            // Tu código:
            this.notasCheckpoints.push(nota)
            
        };

        obtenerNotas() {
            // Este método debe devolver un array con las notas del alumno.
            //
            // Tu código:
            return this.notasCheckpoints
        };

        presentacion() {
            // Este método debe devolver un string utilizando el nombre, el apellido y 
            // el cohorte del alumno.
            // Ej: Si ejecutamos presentacion() en la instancia de alumno, devolvería: 
            // "Hola, soy el alumno Lionel Messi del cohorte 13";
            //
            // Tu código:
            return "Hola, soy el alumno " + this.nombre + " " + this.apellido +" del cohorte " + this.cohorte
        };
        
    };

    return Alumno;
};

/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

function intercambio(objeto) {
    // Devolver un objeto con los pares clave-valor intercambiados.
    // Ej: intercambio({ nombre: "Fulano", apellido: "Rodriguez" }); devuelve => { Fulano: "nombre", Rodriguez: "apellido" }
    // NOTA: No utilizar métodos de Object (values, keys, entries);
    //
    // Tu código:
    var resultado = {}
    for(let clave in objeto){
        resultado[objeto[clave]] = clave
    }
    return resultado
};



// No modificar nada debajo de esta línea
// =======================================================================

module.exports = {
    mayorMenosMenor,
    ingredienteEnMalEstado,
    bienvenidoSr,
    obtenerSoloLosMejores,
    buscaDestruye,
    clavesUnicas,
    invertirLetras,
    crearClaseAlumno,
    intercambio
}
