const delete_product = async (req, res) => {
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