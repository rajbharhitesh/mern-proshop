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
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

/**-----------------------------------------------
 * @desc    Create a new Product
 * @route   /api/products
 * @method  POST
 * @access  Private/Admin
 ------------------------------------------------*/
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.png',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

/**-----------------------------------------------
 * @desc    Update Product
 * @route   /api/products/:id
 * @method  POST
 * @access  Private/Admin
 ------------------------------------------------*/
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProducts, getProductById, createProduct, updateProduct };
