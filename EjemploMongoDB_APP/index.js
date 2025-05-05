// 1. Importar librerías
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { type } = require('os');

const app = express();
app.use(cors());
app.use(cors({ origin: '*' }));

app.use(express.json()); // Para leer JSON del cuerpo de las peticiones

// 2. Conectar a MongoDB (local o Atlas)
mongoose.connect('mongodb://localhost:27017/usuariosDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Conectado a MongoDB"))
.catch((err) => console.error("❌ Error de conexión:", err));

// 3. Definir un esquema
const usuarioSchema = new mongoose.Schema({
    id: Number,
    nombre: String,
    email: String
});

// Crear un nuevo esquema
const counterSchema = new mongoose.Schema({
    id: {type: String, require: true},
    seq: {type: Number, default: 0}
});

// Crear el modelo para el contador
const Counter = mongoose.model('Counter', counterSchema);

// 4. Crear un modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Crear función aumentar contador
async function getNextSequence(name) {
    const counter = await Counter.findOneAndUpdate(
        { id: name},
        { $inc: { seq: 1} },
        { new: true, upsert: true}
    );
    return counter.seq;
}

// 5. Crear rutas en Express

// Obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
    try {
      const usuarios = await Usuario.find();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Crear un nuevo usuario
app.post('/usuarios', async (req, res) => {
    try {
        const nuevoId = await getNextSequence('usuarioId');
        const nuevoUsuario = new Usuario({
            id: nuevoId,
            nombre: req.body.nombre,
            email: req.body.email
        });
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta DELETE - Eliminar usuario por ID
app.delete('/usuarios/:id', async (req, res) => {
    try {
      const resultado = await Usuario.findByIdAndDelete(req.params.id);
      if (!resultado) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      res.json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Ruta PUT - Actualizar completamente un usuario
  app.put('/usuarios/:id', async (req, res) => {
    try {
      const actualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true, overwrite: true });
      if (!actualizado) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      res.json(actualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Ruta PATCH - Actualizar parcialmente un usuario
  app.patch('/usuarios/:id', async (req, res) => {
    try {
      const actualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!actualizado) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      res.json(actualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Puerto del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});