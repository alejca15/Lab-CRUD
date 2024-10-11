const express = require('express');
const router = express.Router();
const Products_Routes = require('../Controllers/Product_Controllers')

router.get('/', Products_Routes.getAllProducts)
router.post(`/`,Products_Routes.post_product )
router.put(`/:id`,Products_Routes.updateProduct)

module.exports=router