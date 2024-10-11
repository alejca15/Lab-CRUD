# Lab-CRUD

Lab 11/10/2024

Laboratorio realizado en conjunto por: Dariel, Alejandro, Dalhuin, Marco.

El sigiente trabajo (excluyendo la presentación) consiste de un API CRUD con 5 funcionalidades (GET, GET por medio de ID, POST, PUT, DELETE) ademas de un archivo JSON.

Desglose de las funcionalidades:

GET: 
<!-- 
const fs = require ('fs').promises;                                                 //Se importa express y se instaura una promesa
 getAllProducts = async (req, res) => {                  //Se genera una funcion asincrona con los parametros req y res (lo que requiere lafuncionalidad y la respuesta)
    try {                                                                           //Se Utiliza Try y Catch para validar errores
        const data_Base = await fs.readFile('./Server/database.json', 'utf8');      //Se lee el archivo usando readFile y se resuelve la promesa
        const products = JSON.parse(data_Base);                                     //Se parsea los datos del JSON
        res.json(products);                                                         //Como respuesta del JSON se obtienen los datos
    } catch (error) {                                                               //Se captura el error
        res.json({ message: 'Error al leer los productos', error: error.message }); //Se imprime el error
    }
}; 
-->


GET por medio de ID:

POST:
<!-- 
const fs = require("fs").promises;                                     //Se importa express y se instaura una promesa

const post_product = async (req, res) => {              //Se genera una funcion asincrona con los parametros req y res (lo que requiere la funcionalidad y la respuesta)
  const { Nombre, Presentacion, Cantidad } = req.body;                //se establecen los valores del producto que sera enviado
  try {                                                               //Se Utiliza Try y Catch para validar errores
    const data = await fs.readFile("./Server/database.JSON", "utf8"); //Se lee el archivo usando readFile y se resuelve la promesa
    const products = JSON.parse(data);                                //Se parsea los datos del JSON
    const new_product = {                                             //Se establece el nuevo producto y se instancian los valores anteriormente declarados
      id: products.Productos.lenght + 1,      //Se hace un id en base al espacio que el producto ocupa ademas se usa "+1" para que las id's sigan una secuencia numerica
      aumento
      Nombre,
      Presentacion,
      Cantidad,
    };
    products.Productos.push(new_product);                                    //Se usa el ".push" para añadir los datos del producto
    await fs.writeFile("./Server/database.JSON",JSON.stringify(inventory, null, 2),"utf8"); //Se utiliza writeFile para sobre escribir los datos 
    console.log("Producto añadido con éxito");                               //Renderiza el mensaje de exito
  } catch (error) {                                                          //Se captura el error
    console.error("Error al procesar la solicitud", error);                  //renderiza el error en la consola
    res.status(500).json({ message: "Fail to add Producto", error });        //renderiza el error en el programa de testing (POSTMAN)
  }
}; 
-->

PUT:
<!--

-->

DELETE:
<!--
const delete_product = async (req, res) => {       //Se genera una funcion asincrona con los parametros req y res (lo que requiere la funcionalidad y la respuesta)
    const { id } = req.params;
    try {
        const data = await fs.readFile("./Server/Database.JSON", "utf8");
        const products = JSON.parse(data);
        const ProductoIndex = products.Products.findIndex(
            (Producto) => Producto.id === parseInt(id)
        );
        if (ProductoIndex === -1) {
            return res.status(404).json({ message: "Producto no encontrado." });
        }
        products.Products.splice(ProductoIndex, 1); 
        await fs.writeFile("./Server/Database.JSON", JSON.stringify(products, null, 2), "utf8");
        console.log("Producto eliminado exitosamente.");
    } catch (error) {
        console.error("Error al eliminar el Producto:", error);
        res.status(500).json({ message: "Error interno del servidor.", error });
    }
};
-->

ARCHIVO JSON: en este laboratorio se uso un arcivo JSON como forma de simular el uso de una base de datos.
<!--

-->
USO DE POSTMAN: En este laboratorio se uso el programa POSTMAN para testear el correcto funcionamiento del API

SERVER:
<!-- 
const express = require("express"); //Se importa "express"
const cors = require("cors");       //Se importa "cors"
const app = express();              //Se llama al express

const PORT = process.env.PORT || 3000;   // Se establece el puerto en el que se va a trabajar


app.use(express.urlencoded({ extended: true })); //Permite el post (BUSCAR)


app.use(express.json()); // Middleware para parsear JSON


app.use(cors()); //Habilita el Cors


app.use("/api/Products", productsRoutes); // Rutas


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`); //Señalizacion para que el usuario sepa que el servidor se encuentra activo
  });                                                              
-->
