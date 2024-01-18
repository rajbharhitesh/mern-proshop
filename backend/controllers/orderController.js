import asyncHandler from '../middlewares/asyncHandler.js';
import Order from '../models/orderModel.js';

/**-----------------------------------------------
 * @desc    Create a new order
 * @route   /api/orders
 * @method  POST
 * @access  Private
 ------------------------------------------------*/
const addOrderItems = asyncHandler(async (req, res) => {});

/**-----------------------------------------------
 * @desc    Get logged in users orders
 * @route   /api/orders/myorders
 * @method  GET
 * @access  Private
 ------------------------------------------------*/
const getMyOrders = asyncHandler(async (req, res) => {});

/**-----------------------------------------------
 * @desc    Get order by id
 * @route   /api/orders/:id
 * @method  GET
 * @access  Private
 ------------------------------------------------*/
const getOrderById = asyncHandler(async (req, res) => {});

/**-----------------------------------------------
 * @desc    Update order to paid
 * @route   /api/orders/:id/pay
 * @method  GET
 * @access  Private
 ------------------------------------------------*/
const updateOrderToPaid = asyncHandler(async (req, res) => {});

/**-----------------------------------------------
 * @desc    Update order to deliver
 * @route   /api/orders/:id/deliver
 * @method  GET
 * @access  Private  --- ADMIN
 ------------------------------------------------*/
const updateOrderToDeliver = asyncHandler(async (req, res) => {});

/**-----------------------------------------------
 * @desc    Get all order
 * @route   /api/orders
 * @method  GET
 * @access  Private  ---- ADMIN
 ------------------------------------------------*/
const getOrders = asyncHandler(async (req, res) => {});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDeliver,
  getOrders,
};
