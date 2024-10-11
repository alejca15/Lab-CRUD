
const get_id_product = async (req, res) 
    const { id } = req.params;
    try {
        const data = await fstat.readFile("./Server/database.JSON", "utf8");
        const products = JSON.parse(data);
        const productindex = products.Products.findIndex(
            (product) => product.id === parseInt(id)
        );
        if (productindex === -1) {
            return res.status(404).json({  message: "Product no encontrado" });
        }
        res.json(products.Products[productindex]); 
    } catch (error) {
        console.error("error al actualizar coñoo:", error);
        res.status(500).json({message:  "error interno" });
    }

