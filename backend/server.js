import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

dotenv.config();

// import all routes
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js';

const PORT = process.env.PORT || 5000;
const app = express();

// connect DB
connectDB();

app.use('/api/products', productRoute);
app.use('/api/users', userRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT:${PORT}`.bgBlue
      .black.underline.bold
  );
});
