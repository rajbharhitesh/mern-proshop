import express from 'express';
const router = express.Router();
import checkObjectId from '../middlewares/checkObjectId.js';
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js';

router.route('/').get(getProducts);
router.route('/:id').get(checkObjectId, getProductById);

export default router;
