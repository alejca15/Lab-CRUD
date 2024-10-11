const express = require('express');
const router = express.Router();
const Products_Routes = require('../Controllers/Product_Controllers')

router.get('/', Products_Routes.getAllProducts)
router.post(`/`,Products_Routes.post_product )
router.get('/:id', Products_Routes.get_id_product)
router.put(`/:id`,Products_Routes.updateProduct)
router.delete(`/:id`,Products_Routes.delete_product)

module.exports=router