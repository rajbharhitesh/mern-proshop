import { Row, Col } from 'react-bootstrap';
import { useGetProductsQuery } from '../redux/api/productApi';
import Product from '../components/Product';

const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <>Loading</>
      ) : error ? (
        <>{error.data.message || error.error}</>
      ) : (
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
      )}
    </>
  );
};

export default HomePage;
