document.getElementById('Saludar').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value.trim();
    const mensaje = document.getElementById('saludo');
    
    if (nombre) {
      mensaje.textContent = `¡Hola, ${nombr}! 👋`;
    } else {
      mensaje.textContent = "Por favor, mandame un mensaje.";
    }
});

