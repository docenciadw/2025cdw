// Importar express
const express = require('express');

// Crear aplicación
const app = express();

// Definir una ruta
app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

app.get('/ejemplo1', (req, res) => {
    res.send('Ejemplo de mensaje 2');
});

// app.post("/registrar", async (req, res) => {
//     try {
//         const datos = req.body;
    
//         if (!datos.nombre || !datos.descripcion || !datos.precio || !datos.stock) {
//             return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
//     }
    
//     const nuevoProducto = new Producto({
//         nombre: datos.nombre,
//         descripcion: datos.descripcion,
//         precio: datos.precio,
//         stock: datos.stock
//     });
    
//     await nuevoProducto.save();
//             res.status(201).json({ mensaje: "Producto registrado exitosamente", producto: nuevoProducto });
//         } catch (error) {
//             res.status(500).json({ mensaje: "Error al registrar producto", error });
//         }
//     });


// Escuchar en un puerto
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});