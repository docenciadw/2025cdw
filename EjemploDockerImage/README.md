# 🧪 Proyecto de Gestión de Usuarios con Node.js, MongoDB y Docker

Este proyecto es una aplicación web completa con:

- 🔧 **Backend** en Node.js + Express
- 🗂️ **Base de datos MongoDB**
- 🌐 **Frontend estático** en HTML + JavaScript
- 🐳 **Contenerizado con Docker y Docker Compose**

---

## 📦 Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## 🚀 ¿Qué hace la aplicación?

- Permite listar, crear, actualizar y eliminar usuarios.
- Los datos se almacenan en MongoDB.
- El frontend consume la API usando `fetch()`.

---

## 📁 Estructura del proyecto

mi-app-usuarios/ 
│
├── backend/ # API en Node.js 
│   ├── index.js │ 
|   ├── package.json 
│   └── Dockerfile
├── frontend/ # Interfaz HTML 
│   └── index.html 
├── docker-compose.yml # Orquestación de servicios 
└── README.md

---

## ▶️ Cómo ejecutar el proyecto

### 1. Clona o descarga este repositorio

```bash
git clone https://github.com/docenciadw/2025cdw/blob/main/EjemploDockerImage
cd mi-app-usuarios

### 2. Ejecuta Docker Compose

docker-compose up --build

✅ Esto:

    Compilará y ejecutará el backend (http://localhost:3000)

    Iniciará MongoDB (mongodb://localhost:27017)

    Servirá el frontend en (http://localhost:8080)

---

## 🔍 Acceso a la aplicación

    🌐 Frontend: http://localhost:8080

    📡 API REST: http://localhost:3000/usuarios

    🧠 MongoDB: puerto 27017 (solo accesible localmente)

---
