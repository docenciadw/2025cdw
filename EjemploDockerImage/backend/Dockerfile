# Imagen base oficial de Node.js
FROM node:18

# Crear directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos del backend
COPY package*.json ./
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Comando para ejecutar el servidor
CMD ["node", "index.js"]
