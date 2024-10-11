const fs = require ('fs').promises;

 getAllProducts = async (req, res) => {
    try {
        const data_Base = await fs.readFile('./Server/database.json', 'utf8');
        const products = JSON.parse(data_Base); 
        res.json(products); 
    } catch (error) {
        res.json({ message: 'Error al leer los productos', error: error.message });
    }
};