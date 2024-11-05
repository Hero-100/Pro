const Product = require('../models/productModel');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new product
exports.createProduct = async (req, res) => {
    console.log("Received request:", req.body); // Add this line for debugging
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error("Error saving product:", error); // Log the error for debugging
        res.status(400).json({ message: error.message });
    }
};



// Update a product by ID
exports.updateProductById = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a product by ID
exports.deleteProductById = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
