const cursos = [
    {
        id: 101,
        nombre: 'Introduccion a la Mecanica Quantica',
        duracion: '10 semanas',
        valor: 25000
    },
    {
        id: 203,
        nombre: 'Teoria de Cuerdas                  ',
        duracion: '20 semanas',
        valor: 33000
    },
    {
        id: 401,
        nombre: 'Computacion Quantica               ',
        duracion: ' 8 semanas',
        valor: 15000
    }
]

let cursoActual = 0;
function mostrarCursos() {
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
    }, 2000)
}

module.exports = {
    mostrarCursos    
};