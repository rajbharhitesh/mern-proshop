import asyncHandler from '../middlewares/asyncHandler.js';
import Product from '../models/productModel.js';

/**-----------------------------------------------
 * @desc    Fetch All Products
 * @route   /api/products
 * @method  GET
 * @access  Public
 ------------------------------------------------*/
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

/**-----------------------------------------------
 * @desc    Fetch Single Product
 * @route   /api/products/:id
 * @method  GET
 * @access  Public
 ------------------------------------------------*/
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  }

  res.status(404).json({
    message: 'Product Not Found',
  });
});

export { getProducts, getProductById };
