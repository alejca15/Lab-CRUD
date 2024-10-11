const express = require('express');
const router = express.Router();
const Products_Routes = require('../Src/Controllers/Product_Controllers')

router.get('/', Products_Routes.getAllProducts)

module.exports=router