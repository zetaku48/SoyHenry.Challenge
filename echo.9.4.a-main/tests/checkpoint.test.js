const {
    mayorMenosMenor,
    ingredienteEnMalEstado,
    bienvenidoSr,
    obtenerSoloLosMejores,
    buscaDestruye,
    clavesUnicas,
    invertirLetras,
    crearClaseAlumno,
    intercambio
} = require('../checkpoint.js');

const menuDelDia = {
    raviolesConSalsa: ['Harina', 'Sal', 'Huevos', 'Aceite', 'Peceto', 'Ricota'],
    bagnaCauda: ['Ajo', 'Anchoas', 'Aceite', 'Crema', 'Papas', 'Zanahorias'],
    tallarines: ['Harina', 'Pollo', 'Aceite', 'Huevos', 'Tomates', 'Cebolla']
};

const personas = [
    {
        nombre: 'Toni',
        apellido: 'Tralice',
        invitado: true
    },
    {
        apellido: 'Rodriguez',
        invitado: true
    },
    {
        nombre: 'Matias',
        invitado: true
    },
    {
        nombre: 'Leandro',
        apellido: 'Dominguez'
    }
];

const estudiantes = [
    { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
    { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
    { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
    { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}
];

const obj1 = {nombre: "Luciano", apellido: "Nicolau"};
const obj2 = {nombre: "Lio", segundoNombre: "Gustavo"};
const obj3 = {usuario: "leanNic", edad: 23};

describe('Funciones', function() {

    describe('mayorMenosMayor', function() {
        it('no debería utilizar los métodos .min o .max de Math', function() {
            const doNotUse = [".min", ".max"];
            const mayorMenosMenorString = mayorMenosMenor.toString();
            doNotUse.forEach(func => {
                expect(mayorMenosMenorString.includes(func)).toBe(false);
            });
        });
        it('debería retornar el resultado de restar el menor del mayor para [20, 31, 11, 15, 32]', function() {
            expect(mayorMenosMenor([20, 31, 11, 15, 32])).toBe(21);
            expect(mayorMenosMenor([2, 3, 1, 5, 0, 32])).toBe(32);
        });
    });

    describe('ingredienteEnMalEstado', function() {
        it('no debería utilizar el método .includes', function() {
            const doNotUse = [".includes"];
            const ingredienteEnMalEstadoString = ingredienteEnMalEstado.toString();
            doNotUse.forEach(func => {
                expect(ingredienteEnMalEstadoString.includes(func)).toBe(false);
            });
        });
        it('debería retornar ["Ajo", "Anchoas", "Aceite"]', function() {
            expect(ingredienteEnMalEstado(menuDelDia, 'bagnaCauda', 'Anchoas')).toEqual(['Ajo', 'Anchoas', 'Aceite']);
        });
        it('debería retornar ["Huevos", "Tomates", "Cebolla"]', function() {
            expect(ingredienteEnMalEstado(menuDelDia, 'tallarines', 'Tomates')).toEqual(['Huevos', 'Tomates', 'Cebolla']);
        });
    });

    describe('bienvenidoSr', function() {
        it('debería retornar un saludo apropiado cuando tiene todas las propiedades', function() {
            expect(bienvenidoSr(personas[0])).toBe('Toni Tralice, un gusto tenerlo nuevamente! Bienvenido');
        });
        it('debería retornar un saludo apropiado cuando tiene apellido y está invitado', function() {
            expect(bienvenidoSr(personas[1])).toBe('Bienvenido Sr. Rodriguez');
        });
        it('debería retornar un saludo apropiado cuando tiene nombre y está invitado', function() {
            expect(bienvenidoSr(personas[2])).toBe('Hola Matias, tu mesa está lista');
        });
        it('debería retornar un mensaje indicando que no está invitado', function() {
            expect(bienvenidoSr(personas[3])).toBe('Disculpe señor, no está invitado a la fiesta');
        });
    });

    describe('obtenerSoloLosMejores', function() {
        it('debería retornar un array con los nombres de los alumnos cuyas notas sean mayor o iguales a 15', function() {
            expect(obtenerSoloLosMejores(estudiantes, 15, 15)).toEqual(["Fulano Rodriguez", "Perengano Leiria"]);
        });
        it('debería retornar un array con los nombres de los alumnos cuya nota para check1 sea mayor o igual a nota1 y para check2, mayor o igual a nota2', function() {
            expect(obtenerSoloLosMejores(estudiantes, 15, 7)).toEqual(["Mengano Solis", "Fulano Rodriguez", "Perengano Leiria"]);
            expect(obtenerSoloLosMejores(estudiantes, 20, 20)).toEqual(["Fulano Rodriguez"]);
        });
    });

    describe('buscaDestruye', function() {
        it('debería eliminar 2 de [1, 2, 7, 3, 9] y retornar [1, 7, 3, 9]', function() {
            expect(buscaDestruye([1, 2, 7, 3, 9], 2)).toEqual([1, 7, 3, 9]);
        });
        it('debería eliminar 1 de [1, 2, 4, 2, 3, 1, 1, 5, 7] y retornar [2, 4, 2, 3, 5, 7]', function() {
          expect(buscaDestruye([1, 2, 4, 2, 3, 1, 1, 5, 7], 1)).toEqual([2, 4, 2, 3, 5, 7]);
        });
    });
    
    describe('clavesUnicas', function() {
        it('debería retornar las claves únicas', function() {
            expect(clavesUnicas(obj1, obj2)).toEqual(["apellido", "segundoNombre"]);
            expect(clavesUnicas(obj1, obj3)).toEqual(["nombre", "apellido", "usuario", "edad"]);
        });
    });

    describe('invertirLetras', function() {
        it('debería switchear las letras del texto según corresponda', function() {
            expect(invertirLetras("Soy Henry")).toBe("sOY hENRY");
            expect(invertirLetras("CaMbIaNdO eL cAsE")).toBe("cAmBiAnDo El CaSe");
        });
    });
});

describe('Clase', function() {
    describe('crearClaseAlumno', function() {
        it('debería tener un constructor que construya correctamente una instancia', function() {
            const Alumno = crearClaseAlumno();
            const alumno = new Alumno('Harry', 'Potter', 1, [{nombre: 'Ron', apellido: 'Weasley', cohorte: 1}], []);
            expect(alumno.nombre).toBe('Harry');
            expect(alumno.apellido).toBe('Potter');
            expect(alumno.cohorte).toBe(1);
            expect(alumno.grupoDeAmigos[0].nombre).toBe('Ron');
            expect(alumno.obtenerNotas.length).toBe(0);
        });
        it('debería añadir amigos correctamente', function() {
            const Alumno = crearClaseAlumno();
            const alumno = new Alumno('Harry', 'Potter', 1, [{nombre: 'Ron', apellido: 'Weasley', cohorte: 1}], []);
            alumno.addAmigos('Hermione', 'Granger');
            alumno.addAmigos('Neville','Longbottom');
            expect(alumno.grupoDeAmigos[1]).toEqual({nombre: 'Hermione', apellido: 'Granger', cohorte: 1})
            expect(alumno.grupoDeAmigos[2]).toEqual({nombre: 'Neville', apellido: 'Longbottom', cohorte: 1})
        });
        it('debería retornar cantidad de amigos del alumno', function() {
            const Alumno = crearClaseAlumno();
            const alumno = new Alumno('Harry', 'Potter', 1, [{nombre: 'Ron', apellido: 'Weasley', cohorte: 1}], []);
            expect(alumno.obtenerAmigos()).toBe(1);
            alumno.addAmigos('Neville','Longbottom');
            alumno.addAmigos('Hermione', 'Granger');
            expect(alumno.grupoDeAmigos[1].cohorte).toBe(1);
            expect(alumno.obtenerAmigos()).toBe(3);
        });
        it('debería añadir correctamente una nueva nota en el arreglo notasCheckpoint del alumno', function() {
            const Alumno = crearClaseAlumno();
            const alumno = new Alumno('Harry', 'Potter', 1, [{nombre: 'Ron', apellido: 'Weasley', cohorte: 1}], []);
            alumno.addNota(15);
            expect(alumno.notasCheckpoints[0]).toBe(15);
            alumno.addNota(20);
            expect(alumno.notasCheckpoints[1]).toBe(20);
        });
        it('debería retornar un array con las notas de los alumnos', function() {
            const Alumno = crearClaseAlumno();
            const alumno = new Alumno('Harry', 'Potter', 1, [{nombre: 'Ron', apellido: 'Weasley', cohorte: 1}], []);
            alumno.addNota(15);
            expect(alumno.obtenerNotas()).toEqual([15]);
            alumno.addNota(20);
            expect(alumno.obtenerNotas()).toEqual([15, 20]);
        });
        it('debería retornar una presentación correcta', function() {
            const Alumno = crearClaseAlumno();
            const alumno = new Alumno('Harry', 'Potter', 1, [{nombre: 'Ron', apellido: 'Weasley', cohorte: 1}], []);
            const alumno2 = new Alumno('Ron', 'Weasley', 1, [{nombre: 'Harry', apellido: 'Potter', cohorte: 1}], []);
            expect(alumno.presentacion()).toBe('Hola, soy el alumno Harry Potter del cohorte 1');
            expect(alumno2.presentacion()).toBe('Hola, soy el alumno Ron Weasley del cohorte 1');
        });
    });
});

describe('Extra Credits', function() {
    describe('intercambio', function() {
        it('no debería utilizar métodos de Object (.keys, .values, .entries)', function() {
            const doNotUse = [".keys", ".values", ".entries"]
            const intercambioString = intercambio.toString();
            doNotUse.forEach(func => {
                expect(intercambioString.includes(func)).toBe(false);
            });
        });
        it('debería retornar { Harry: "nombre", Potter: "apellido" } para { nombre: "Harry", apellido: "Potter" }', function() {
            expect(intercambio({ nombre: 'Harry', apellido: 'Potter' })).toEqual({ Harry: 'nombre', Potter: 'apellido' });
        });
        it('debería intercambiar correctamente los pares clave-valor', function() {
            expect(intercambio(personas[0])).toEqual({ Toni: 'nombre', Tralice: 'apellido', true: 'invitado' });
            expect(intercambio(estudiantes[0])).toEqual({ Mengano: 'nombre', Solis: 'apellido', 16: 'check1', 8: 'check2' });
        });
    });
});