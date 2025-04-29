document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        nombreInput: document.getElementById('nombre'),
        anioNacimientoInput: document.getElementById('anioNacimiento'),
        calcularBtn: document.getElementById('calcular'),
        resultadoDiv: document.getElementById('resultado'),
        mensajePersonalizadoDiv: document.getElementById('mensajePersonalizado'),
        categoriaSpan: document.getElementById('categoria')
    };
    const categorias = [
        { rango: [0, 12], nombre: 'Niño', clase: 'bg-green-100 text-green-800', mensaje: '¡Hola {nombre}! Tienes {edad} años y estás en la etapa más divertida de la vida. ¡Disfruta de tu niñez!', claseMensaje: 'bg-green-50 text-green-700' },
        { rango: [13, 17], nombre: 'Adolescente', clase: 'bg-blue-100 text-blue-800', mensaje: '¡Hola {nombre}! Con {edad} años estás descubriendo quién eres. ¡La adolescencia es una etapa de grandes cambios!', claseMensaje: 'bg-blue-50 text-blue-700' },
        { rango: [18, 59], nombre: 'Adulto', clase: 'bg-purple-100 text-purple-800', mensaje: '¡Hola {nombre}! A tus {edad} años estás en la plenitud de la vida adulta. ¡Es tiempo de cumplir tus metas!', claseMensaje: 'bg-purple-50 text-purple-700' },
        { rango: [60, Infinity], nombre: 'Mayor', clase: 'bg-amber-100 text-amber-800', mensaje: '¡Hola {nombre}! Con {edad} años tienes una valiosa experiencia de vida. ¡Es tiempo de disfrutar y compartir tu sabiduría!', claseMensaje: 'bg-amber-50 text-amber-700' }
    ];
    const calcularCategoria = (edad) => categorias.find(c => edad >= c.rango[0] && edad <= c.rango[1]);
    elements.calcularBtn.addEventListener('click', () => {
        const { nombreInput, anioNacimientoInput, resultadoDiv, mensajePersonalizadoDiv, categoriaSpan } = elements;
        const nombre = nombreInput.value.trim();
        const anioNacimiento = parseInt(anioNacimientoInput.value);
        const anioActual = new Date().getFullYear();
        if (!nombre || !anioNacimiento || anioNacimiento < 1900 || anioNacimiento > anioActual) {
            alert('Por favor, completa todos los campos con datos válidos');
            return;
        }
        const edad = anioActual - anioNacimiento;
        const categoria = calcularCategoria(edad);
        if (categoria) {
            mensajePersonalizadoDiv.textContent = categoria.mensaje.replace('{nombre}', nombre).replace('{edad}', edad);
            mensajePersonalizadoDiv.className = `${categoria.claseMensaje} p-4 rounded-md`;
            categoriaSpan.textContent = categoria.nombre;
            categoriaSpan.className = `ml-2 px-3 py-1 rounded-full text-sm font-medium ${categoria.clase}`;
            resultadoDiv.classList.remove('hidden');
            resultadoDiv.style.opacity = '0';
            resultadoDiv.style.transition = 'opacity 0.5s ease-in-out';
            setTimeout(() => resultadoDiv.style.opacity = '1', 100);
        }
    });
});
