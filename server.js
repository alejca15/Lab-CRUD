//Dependencias necesarias y su declaracion
const express = require("express");
const cors = require("cors");
const app = express();
const products_Routes = require("./Src/Routes/Products_Routes")

const PORT = process.env.PORT || 3000;

//Permite el post (BUSCAR)
app.use(express.urlencoded({ extended: true }));

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use("/api/Products", products_Routes);

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });