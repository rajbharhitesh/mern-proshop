import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

// import all routes
import productRoute from './routes/productRoute.js';

const PORT = process.env.PORT || 5000;
const app = express();

// connect DB
connectDB();

app.use('/api/products', productRoute);

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT:${PORT}`.bgBlue
      .black.underline.bold
  );
});
