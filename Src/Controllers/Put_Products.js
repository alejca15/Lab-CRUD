const fs = require("fs").promises;

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
