import { Row, Col } from 'react-bootstrap';
import { useGetProductsQuery } from '../redux/api/productApi';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import Product from '../components/Product';

const HomePage = () => {
  const { data: products, isLoading, error, isError } = useGetProductsQuery();

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message || error.error);
    }
  }, [isError, error]);

  if (isLoading) {
    return <h1>Loader</h1>;
  }

  return (
    <>
      <h1 className="text-center">Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
