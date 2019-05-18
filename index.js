const opcionesMostrarCursos = {
};

const opcionesPreinscripcion = {
    estudiante: {
        demand: true,
        alias: 'e'
    },
    curso: {
        demand: true,
        alias: 'c'
    }
};

const argv = require('yargs')
        .command('mostrar-cursos', 'Lista de cursos disponible', opcionesMostrarCursos)
        .command('preinscripcion', 'preincripcion curso', opcionesPreinscripcion)
        .argv;

const misCursos = require('./cursos');

console.log(argv);
switch(argv._[0]) {
    case 'mostrar-cursos':
        misCursos.mostrarCursos();
        break;
    case 'preinscripcion':
        if(misCursos.preinscripcion(argv.curso, argv.estudiante)) {
            misCursos.mostrarPreinscritos();                        
        } else {
            console.log(`Curso: ${argv.curso} no existe`);
        };
        break;    
}
