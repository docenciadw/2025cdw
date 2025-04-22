function calcularEdad() {
    const nombre = document.getElementById("nombre").value;
    const añoNacimiento = document.getElementById("año").value;

    const añoActual = new Date().getFullYear();
    const edad = añoActual - añoNacimiento;

    let categoria = "";

    if (edad <= 12) {
        categoria = "niño/a";
    } else if (edad <= 17) {
        categoria = "adolescente";
    } else if (edad <= 59) {
        categoria = "adulto/a";
    } else {
        categoria = "mayor";
    }

    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Hola " + nombre +", tienes " + edad + " años de edad y eres " + categoria;
};