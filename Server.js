//Dependencias necesarias y su declaracion
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

//Permite el post (BUSCAR)
app.use(express.urlencoded({ extended: true }));

// Middleware para parsear JSON
app.use(express.json());

//Habilita el Cors
app.use(cors());

// Rutas
app.use("/api/Products", productsRoutes);

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });