const fs = require("fs").promises;

const post_product = async (req, res) => {
  const { Nombre, Presentacion, Cantidad } = req.body;
  try {
    const data = await fs.readFile("./Server/database.JSON", "utf8");
    const products = JSON.parse(data);
    const new_product = {
      id: products.Productos.length + 1,
      Nombre,
      Presentacion,
      Cantidad,
    };
    products.Productos.push(new_product);
    await fs.writeFile("./Server/database.JSON",JSON.stringify(products, null, 2),"utf8");
    console.log("Producto añadido con éxito");
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    res.status(500).json({ message: "Fail to add Producto", error });
  }
};
