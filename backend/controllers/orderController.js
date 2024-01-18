import asyncHandler from '../middlewares/asyncHandler.js';
import Order from '../models/orderModel.js';

/**-----------------------------------------------
 * @desc    Create a new order
 * @route   /api/orders
 * @method  POST
 * @access  Private
 ------------------------------------------------*/
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const order = new Order({
      orderItems: orderItems.map((x) => ({
        ...x,
        product: x._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

/**-----------------------------------------------
 * @desc    Get logged in users orders
 * @route   /api/orders/myorders
 * @method  GET
 * @access  Private
 ------------------------------------------------*/
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

/**-----------------------------------------------
 * @desc    Get order by id
 * @route   /api/orders/:id
 * @method  GET
 * @access  Private
 ------------------------------------------------*/
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

/**-----------------------------------------------
 * @desc    Update order to paid
 * @route   /api/orders/:id/pay
 * @method  PUT
 * @access  Private
 ------------------------------------------------*/
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

/**-----------------------------------------------
 * @desc    Update order to deliver
 * @route   /api/orders/:id/deliver
 * @method  PUT
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
