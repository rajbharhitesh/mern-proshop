import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: [true, 'Please enter product name'],
      maxLength: [200, 'Product name cannot exceed 200 characters'],
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: [true, 'Please enter product brand'],
    },
    category: {
      type: String,
      required: [true, 'Please enter product category'],
    },
    description: {
      type: String,
      required: [true, 'Please enter product description'],
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'Please enter product price'],
      maxLength: [5, 'Product price cannot exceed 5 digits'],
      default: 0,
    },
    countInStock: {
      type: Number,
      required: [true, 'Please enter product stock'],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
