const express = require('express');
const router = express.Router();
const { 
    getAllProducts, 
    getProductById, 
    createProduct, 
    updateProductById, 
    deleteProductById 
} = require('../controllers/productController');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);  // Ensure this line exists
router.put('/:id', updateProductById);
router.delete('/:id', deleteProductById);

module.exports = router;
