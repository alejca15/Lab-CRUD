const fs = require("fs").promises;


//-----------------Get--------------//
const getAllProducts = async (req, res) => {
  try {
    const data_Base = await fs.readFile("./Server/database.json", "utf8");
    const products = JSON.parse(data_Base);
    res.json(products);
  } catch (error) {
    res.json({ message: "Error al leer los productos", error: error.message });
  }
};

//---------------------Post-------------------//
const post_product = async (req, res) => {
    const { Nombre, Presentacion, Cantidad } = req.body;
    try {
      const data = await fs.readFile("./Server/database.JSON", "utf8");
      const products = JSON.parse(data);
      const new_product = {
        id: products.Products.length + 1,
        Nombre,
        Presentacion,
        Cantidad,
      };
      products.Products.push(new_product);
      await fs.writeFile("./Server/database.JSON",JSON.stringify(products, null, 2),"utf8");
      console.log("Producto añadido con éxito");
    } catch (error) {
      console.error("Error al procesar la solicitud", error);
      res.status(500).json({ message: "Fail to add Producto", error });
    }
  };


  //------------------Put-------------------//
  const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { Nombre, Presentacion, Cantidad } = req.body;
    try {
      const data_Base = await fs.readFile("./Server/database.json", "utf8");
      const products = JSON.parse(data_Base);
      const product_index = products.Products.findIndex(
        (Producto) => Producto.id === parseInt(id)
      );
      if (product_index === -1) {
        return res.status(404).json({ message: "Producto no encontrado." });
      }
      if (Nombre) {
        products.Products[product_index].Nombre = Nombre;
      }
      if (Presentacion) {
        products.Products[product_index].Presentacion = Presentacion;
      }
      if (Cantidad) {
        products.Products[product_index].Cantidad = Cantidad;
      }
      await fs.writeFile("./Server/Database.JSON",JSON.stringify(products, null, 2),"utf8");
      console.log("Producto actualizado exitosamente.");
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      res.status(500).json({ message: "Error interno del servidor.", error });
    }
  };
  


module.exports = {
    getAllProducts,
    post_product,
    updateProduct
}