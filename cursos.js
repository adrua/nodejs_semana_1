const fs = require('fs');

const cursos = [
    {
        id: 101,
        nombre: 'Introduccion a la Mecanica Quantica',
        duracion: '10 semanas',
        valor: 25000,
        preinscritos: []
    },
    {
        id: 203,
        nombre: 'Teoria de Cuerdas                  ',
        duracion: '20 semanas',
        valor: 33000,
        preinscritos: []
    },
    {
        id: 401,
        nombre: 'Computacion Quantica               ',
        duracion: ' 8 semanas',
        valor: 15000,
        preinscritos: []
    },
    {
        id: 402,
        nombre: 'operadores Quanticas              ',
        duracion: ' 6 semanas',
        valor: 38000,
        preinscritos: []
    }
]

let cursoActual = 0;
function mostrarCursos(interval) {
    console.log('------------------------------------------');
    console.log(`Cursos Disponible ${new Date()}`);
    console.log('------------------------------------------');
    const timer = setInterval(() => {
        var curso = cursos[cursoActual++];
        if(curso) {
            console.log(`${curso.id}\t${curso.nombre}\t${curso.duracion}\t${curso.valor}`)        
        } else {
            console.log('------------------------------------------');
            clearInterval(timer);
        }
    }, interval)
}

function mostrarPreinscritos() {
    console.log('------------------------------------------');
    console.log(`Cursos Disponible ${new Date()}`);
    console.log('------------------------------------------');
    cursos.forEach((curso) => console.log(`${curso.id}\t${curso.nombre}\t${curso.preinscritos.length}`));
}

function preinscripcion(codigoCurso, estudiante) {
    const curso = cursos.find((x) => x.id === codigoCurso);
    if(curso) {
        curso.preinscritos.push(estudiante);
        msg = `Estudiante: (${estudiante.cedula}) ${estudiante.nombre}
        Curso: (${curso.id}) ${curso.nombre}
        Duracion: ${curso.duracion}
        Valor: ${curso.valor}
        `;

        let _archivo = `preinscripcion_${estudiante.cedula}.txt`;
        fs.writeFile(_archivo, msg, (err) => {
            if(err) {
                console.log(`Preinscripcion exitosa de ${estudiante.nombre}.\nNO se genero el archivo ${_archivo}`);
            } else {
                console.log(`Preinscripcion exitosa de ${estudiante.nombre}.\nSe genero el archivo ${_archivo}`);
            }
        } );
    } else {
        console.log(`Curso: ${codigoCurso} no existe\nSeleccione uno de los siguientes`);
        mostrarCursos(0);
    }
    return curso;
}

module.exports = {
    mostrarCursos,
    mostrarPreinscritos,
    preinscripcion
};