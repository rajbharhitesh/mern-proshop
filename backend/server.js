import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

dotenv.config();

// import all routes
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js';
import orderRoute from './routes/orderRoute.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// connect DB
connectDB();

app.use('/api/products', productRoute);
app.use('/api/users', userRoute);
app.use('/api/orders', orderRoute);

app.get('/api/config/paypal', (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT:${PORT}`.bgBlue
      .black.underline.bold
  );
});
